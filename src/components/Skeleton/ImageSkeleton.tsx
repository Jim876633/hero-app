import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonImage = styled.div<{ $width?: string; $height?: string }>`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "100%"};
  background: ${(props) => props.theme.gradients.skeleton.shimmer};
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: 4px;
`;

interface ImageSkeletonProps {
  width?: string;
  height?: string;
}

const ImageSkeleton = ({ width, height }: ImageSkeletonProps) => {
  return <SkeletonImage $width={width} $height={height} />;
};
export default ImageSkeleton;
