import { google } from "googleapis";
import { Client, AddressComponent } from "@googlemaps/google-maps-services-js";

const auth = new google.auth.OAuth2(
  process.env.G_CLIENT_ID,
  process.env.G_CLIENT_SECRET,
  `${process.env.PUBLIC_URL}/login`
);

const maps = new Client({});

const parseAddress = (addressComponents: AddressComponent[]) => {
  let country = "null";
  let admin = "null";
  let city = "null";

  for (const component of addressComponents) {
    console.log(component);
    const componentTypesArray = component.types;

    for (const typesIndex of componentTypesArray) {
      if (typesIndex === "country") {
        country = component.long_name;
      }
      if (typesIndex === "administrative_area_level_1") {
        admin = component.long_name;
      }
      if (typesIndex === "locality" || typesIndex === "postal_town") {
        city = component.long_name;
      }
    }
  }

  return { country, admin, city };
};

export const Google = {
  authUrl: auth.generateAuthUrl({
    //eslint-disable-next-line @typescript-eslint/camelcase
    access_type: "online",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
  }),
  logIn: async (code: string) => {
    const { tokens } = await auth.getToken(code);

    auth.setCredentials(tokens);

    const { data } = await google.people({ version: "v1", auth }).people.get({
      resourceName: "people/me",
      personFields: "emailAddresses,names,photos",
    });

    return { user: data };
  },
  geocode: async (address: string) => {
    //this is geocoding response from api
    const res = await maps.geocode({
      params: {
        address: address,
        key: `${process.env.G_GEOCODE_KEY}`,
      },
    });

    console.log(res);

    if (res.status < 200 || res.status > 299) {
      throw new Error("failed to geocode address");
    }

    return parseAddress(res.data.results[0].address_components);
  },
};
