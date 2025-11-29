import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;
const SkeletonText = styled.div<{ $width?: string; $height?: string }>`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "20px"};
  background: ${(props) => props.theme.gradients.skeleton.shimmer};
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  border-radius: 4px;
`;
interface TextSkeletonProps {
  width?: string;
  height?: string;
}

const TextSkeleton = ({ width, height }: TextSkeletonProps) => {
  return <SkeletonText $width={width} $height={height} />;
};
export default TextSkeleton;
