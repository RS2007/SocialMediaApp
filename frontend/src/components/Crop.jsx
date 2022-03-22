import { VStack } from "@chakra-ui/react";
import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
/* eslint-disable react/prop-types*/
const Crop = ({ image }) => {
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);
  return (
    <VStack marginTop="400px">
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </VStack>
  );
};

export default Crop;
