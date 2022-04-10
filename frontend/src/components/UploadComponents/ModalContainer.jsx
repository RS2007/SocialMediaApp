import React from "react";
/* eslint-disable react/prop-types*/
const ModalContainer = ({
  content: Content,
  image,
  setImage,
  description,
  setDescription,
}) => {
  return (
    <div>
      <Content
        image={image}
        setImage={setImage}
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
};

export default ModalContainer;
