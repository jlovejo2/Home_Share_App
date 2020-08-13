import cloudinary from "cloudinary";

export const Cloudinary = {
  upload: async (image: string, folderPath: string) => {
    try {
      let pathPresent = true;

      console.log("image: ", image);
      console.log("folder path: ", folderPath);
      if (folderPath === "") {
        pathPresent = false;
      }
      /*eslint-disable @typescript-eslint/camelcase */

      const res = await cloudinary.v2.uploader.upload(image, {
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
        cloud_name: process.env.CLOUDINARY_NAME,
        folder: pathPresent ? folderPath : "TinyHouse_Assets/",
      });

      return res.secure_url;
    } catch (error) {
      throw new Error(`Failed to upload to cloudinary: ${error}`);
    }
  },
  delete: async (image: string) => {
    const res = await cloudinary.v2.uploader.destroy(image, function (result) {
      console.log(result);
    });

    return res.secure_url;
  },
  /*eslint-enable @typescript-eslint/camelcase */
};
