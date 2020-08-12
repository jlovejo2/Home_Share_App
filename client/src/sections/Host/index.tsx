import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { HOST_LISTING } from "../../lib/graphql/mutations";
import {
  HostListing as HostListingData,
  HostListingVariables,
} from "../../lib/graphql/mutations/HostListing/__generated__/HostListing";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Layout,
  Radio,
  Typography,
  Upload,
} from "antd";
import { useScrollToTop } from "../../lib/hooks";
import { Viewer } from "../../lib/types";
import { ListingType } from "../../lib/graphql/globalTypes";
import { Icon } from "@ant-design/compatible";
import {
  iconColor,
  displayErrorMessage,
  displaySuccessNotification,
} from "../../lib/utils";
import { UploadChangeParam } from "antd/lib/upload";
// import { Store } from "antd/lib/form/interface";

interface Props {
  viewer: Viewer;
}

const { Content } = Layout;
const { Text, Title } = Typography;

export const Host = ({ viewer }: Props) => {
  // const [form] = Form.useForm();
  const [imageLoading, setImageLoading] = useState(false);
  const [imageBase64Value, setImageBase64Value] = useState<string | null>(null);

  const [hostListing, { loading, data }] = useMutation<
    HostListingData,
    HostListingVariables
  >(HOST_LISTING, {
    onCompleted: () => {
      displaySuccessNotification("You've successfully created your listing!");
    },
    onError: () => {
      displayErrorMessage(
        "Sorry, we weren't able to create your listing.  Please try again later."
      );
    },
  });

  useScrollToTop();

  const handleHostListing = (values: any) => {
    console.log("success: ", values);

    const fullAddress = `${values.address}, ${values.city}, ${values.state}, ${values.zip}`;

    const input = {
      ...values,
      address: fullAddress,
      image: imageBase64Value,
      price: values.price * 100,
    };

    delete input.city;
    delete input.state;
    delete input.zip;

    console.log(input);

    hostListing({
      variables: {
        input,
      },
    });
  };

  const handleHostListingFormFail = (errorInfo: any) => {
    console.log("error: ", errorInfo);
    displayErrorMessage("Please fill in required fields.");
    return;
  };

  const handleImageUpload = (info: UploadChangeParam) => {
    const { file } = info;
    // console.log(file);

    if (file.status === "uploading") {
      setImageLoading(true);
      return;
    }

    if (file.status === "error") {
      setImageLoading(false);
      displayErrorMessage(`Error uploading image: ${file.error}`);
      console.log(file.error);
      return;
    }

    if (file.status === "done" && file.originFileObj) {
      getBase64Value(file.originFileObj, (imageBase64Value) => {
        setImageBase64Value(imageBase64Value);
        console.log(imageBase64Value);
        setImageLoading(false);
      });
    }
  };

  if (!viewer.id || !viewer.hasWallet) {
    return (
      <Content className="host-content">
        <div className="host__form-header">
          <Title level={4} className="host__form-title">
            You'll have to be signed in and connected with Stripe to host a
            listing!
          </Title>
          <Text type="secondary">
            We only allow users who've signed in to our application and have
            connected with STripe to hose new listings. You can sing in at the{" "}
            <Link to="/login">/login</Link> page and connect with Stripe shortly
            after.
          </Text>
        </div>
      </Content>
    );
  }

  if (loading) {
    return (
      <Content className="host-content">
        <div className="host__form-header">
          <Title level={3} className="host__form-title">
            <Text type="secondary">We're creating your listing now.</Text>
          </Title>
        </div>
      </Content>
    );
  }

  if (data && data.hostListing) {
    return <Redirect to={`/listing/${data.hostListing.id}`} />;
  }

  return (
    <Content className="host-content">
      <Form
        layout="vertical"
        onFinishFailed={handleHostListingFormFail}
        onFinish={handleHostListing}
      >
        <div className="host__form-header">
          <Title level={3} className="host__form-title">
            Hi! Let's get started creating a listing.
          </Title>
          <Text type="secondary">
            In this form, we'll collect some basic and additional information
            about your home.
          </Text>
        </div>
        <Form.Item
          label="Home Type"
          name="type"
          rules={[{ required: true, message: "Please select a home type!" }]}
        >
          <Radio.Group>
            <Radio.Button value={ListingType.APARTMENT}>
              <Icon type="bank" style={{ color: iconColor }} />
              <span>Apartment</span>
            </Radio.Button>
            <Radio.Button value={ListingType.HOUSE}>
              <Icon type="home" style={{ color: iconColor }} />
              <span>House</span>
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Max # of Guests"
          name="numOfGuests"
          rules={[
            {
              required: true,
              message: "Please enter a max number of guests!",
            },
          ]}
        >
          <InputNumber min={1} placeholder="4" />
        </Form.Item>
        <Form.Item
          label="Title"
          name="title"
          extra="Max character count of 45"
          rules={[
            {
              required: true,
              message: "Please enter a title for your listing.",
            },
          ]}
        >
          <Input placeholder="The iconic and luxurious Bel-Air mansion" />
        </Form.Item>
        <Form.Item
          label="Description of listing"
          name="description"
          extra="Max character count of 45"
          rules={[
            {
              required: true,
              message: "Please enter a description for your listing.",
            },
          ]}
        >
          <Input.TextArea
            rows={3}
            maxLength={400}
            placeholder="Modern, clean, and iconic home of the Fresh Prince.  Sits in the heart of Bel-Air, Los Angeles."
          />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please enter an address for your listing.",
            },
          ]}
        >
          <Input placeholder="251 N Bristol Ave" />
        </Form.Item>
        <Form.Item
          label="City/Town"
          name="city"
          rules={[
            {
              required: true,
              message: "Please enter a City (or Town) for your listing.",
            },
          ]}
        >
          <Input placeholder="Los Angeles" />
        </Form.Item>
        <Form.Item
          label="State/Province"
          name="state"
          rules={[
            {
              required: true,
              message: "Please enter a State (or Province) for your listing.",
            },
          ]}
        >
          <Input placeholder="California" />
        </Form.Item>
        <Form.Item
          label="Zip/Postal Code"
          name="zip"
          rules={[
            {
              required: true,
              message: "Please enter a Zip(or Postal) code for your listing.",
            },
          ]}
        >
          <Input placeholder="Please enter a zip code for your listing" />
        </Form.Item>
        <Form.Item
          label="Image"
          name="image"
          extra="Images have to be under 1MB in size and of type JPG or PNG"
          rules={[
            {
              required: false,
              message: "Please enter an image for your listing.",
            },
          ]}
        >
          <div className="host__form-image-upload">
            <Upload
              name="image"
              listType="picture-card"
              showUploadList={false}
              action="https://run.mocky.io/v3/f4e571d6-5a54-453f-9eda-b60a07f26795"
              beforeUpload={beforeImageUpload}
              onChange={handleImageUpload}
            >
              {imageBase64Value ? (
                <img src={imageBase64Value} alt="Listing" />
              ) : (
                <div>
                  <Icon type={imageLoading ? "loading" : "plus"} />
                  <div className="ant-upload-text">Upload</div>
                </div>
              )}
            </Upload>
          </div>
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          extra="All prices in $USD/day"
          rules={[
            {
              required: true,
              message: "Please enter a price for your listing.",
            },
          ]}
        >
          <InputNumber min={0} placeholder="120" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
};

const beforeImageUpload = (file: File) => {
  const fileIsValidImage =
    file.type === "image/jpeg" || file.type === "image/png";
  const fileIsValidSize = file.size / 1024 / 1024 < 1;
  if (!fileIsValidImage) {
    displayErrorMessage("You're only able to upload valid JPG or PNG files.");
    return false;
  }
  if (!fileIsValidSize) {
    displayErrorMessage(
      "You're only able to upload valid image files or under 1MB in size."
    );
    return false;
  }

  return fileIsValidImage && fileIsValidSize;
};

const getBase64Value = (
  img: File | Blob,
  callback: (imageBase64Value: string) => void
) => {
  const reader = new FileReader();
  reader.readAsDataURL(img);
  reader.onload = () => {
    //using type assertion here, if result is ever null or arraybuffer we will bypass typescripts check.  However, it is beliebe to be unlikely
    callback(reader.result as string);
  };
};

// export const WrappedHost = Form.create<Props & FormComponentProps>({
//   name: "host_form",
// })(Host);

// used to mock an image upload "https://www.mocky.io/v2/5cc8019d300000980a055e76"
