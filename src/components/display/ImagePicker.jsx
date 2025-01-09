import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function ImagePicker({ selectedImages, onRemoveImage }) {

  return (
    <ImagePickerContainer className="image-picker">
      {selectedImages.map((src, index) => (
        <ImageWrapper key={src + index}>
          <CloseButton onClick={() => onRemoveImage(index)}>&times;</CloseButton>
            <img src={src} alt={`Image Picker ${index}`} />
        </ImageWrapper>
      ))}
    </ImagePickerContainer>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ImagePickerContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 5px;
  justify-content: flex-end;
  max-width: 100%;
  background-color: #dbebf4;
  animation: ${fadeIn} 0.5s ease-in-out;
  img {
    width: 40px;
    height: 40px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  background-color: #e2e5e9;
  img {
    width: 30px;
    height: 30px;
  }
  .upload_icon {
    cursor: pointer;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #fff;
  color: #878787;
  border: none;
  border-radius: 50%;
  width: 23px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  line-height: 23px;
  z-index: 10001;
`;