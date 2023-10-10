import { LoadingOutlined } from "@ant-design/icons";
import PropType from "prop-types";
import React, { useState } from "react";

const ImageLoader = ({ src, alt, className, draggable = true, style }) => {
  const loadedImages = {};
  const [loaded, setLoaded] = useState(loadedImages[src]);

  const onLoad = () => {
    loadedImages[src] = true;
    setLoaded(true);
  };
  return (
    <>
      {!loaded && (
        <LoadingOutlined
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            margin: "auto",
            ...style,
          }}
        />
      )}
      <img
        alt={alt || ""}
        className={`${className || ""} ${
          loaded ? "is-img-loaded" : "is-img-loading"
        }`}
        onLoad={onLoad}
        src={src}
        draggable={draggable}
      />
    </>
  );
};

ImageLoader.defaultProps = {
  className: "image-loader",
};

ImageLoader.propTypes = {
  src: PropType.string.isRequired,
  alt: PropType.string,
  className: PropType.string,
};

export default ImageLoader;
