import styled from "styled-components";
import ImageSkeleton from "./Skeleton/ImageSkeleton";

const BrokenImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background.lightBrown};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const BrokenImageIcon = styled.svg`
  width: 40px;
  height: 40px;
  opacity: 0.5;
`;

const BrokenImageText = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text.disabled};
  text-align: center;
`;

interface ImagePlaceholderProps {
  type: "loading" | "error";
}

const ImagePlaceholder = ({ type }: ImagePlaceholderProps) => {
  if (type === "loading") {
    return <ImageSkeleton />;
  }

  return (
    <BrokenImageContainer>
      <BrokenImageIcon
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M21.9 21.9L2.1 2.1L0.7 3.5L3 5.8V19C3 20.1 3.9 21 5 21H18.2L20.5 23.3L21.9 21.9ZM5 19V7.8L8.5 11.3L11 14.31L14.5 10.81L16.2 13.07L5 19ZM21 5V18.2L19 16.2V5H7.8L5.8 3H19C20.1 3 21 3.9 21 5Z"
          fill="currentColor"
        />
      </BrokenImageIcon>
      <BrokenImageText>Image Broken</BrokenImageText>
    </BrokenImageContainer>
  );
};

export default ImagePlaceholder;
