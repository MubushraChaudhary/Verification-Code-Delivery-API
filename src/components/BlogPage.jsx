import React from "react";
import GoogleMapReact from "google-map-react";
import { Text, Title } from "@mantine/core";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Blogpage = () => {
  const defaultProps = {
    center: {
      lat: 33.667063057243,
      lng: 73.07332256931441,
    },
    zoom: 20,
  };

  return (
    <>
      <Title style={{ color: "purple" }}>USquare:</Title>
      <Text style={{ marginTop: "20px" }}>
        We treat you like a partner and build on your vision by showing you new
        possibilities and alternative that suit you better.It is the leading
        digital platform for all business firms across the world and an one stop
        automated solution for your trade and industry.
      </Text>
      <Title style={{ color: "purple" }}>Location</Title>
      <div style={{ height: "400px", width: "500px", marginLeft: "200px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={33.667063057243}
            lng={73.07332256931441}
            text="My Marker"
          />
        </GoogleMapReact>
        <Title
          style={{ marginRight: "600px", marginTop: "20px", color: "purple" }}
        >
          RoadMap
        </Title>
        <iframe
          width="560"
          height="270"
          marginBotto="30px"
          src="https://www.youtube.com/embed/HcOc7P5BMi4?si=x7YDVoHSOky2l7Qv"
          title="YouTube video "
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};
export default Blogpage;
