import styled from "styled-components";
import ImageSkeleton from "./ImageSkeleton";
import TextSkeleton from "./TextSkeleton";

const SkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  padding: 16px;
  border: 3px solid ${(props) => props.theme.colors.border.brown};
  border-radius: 12px;
  background: ${(props) => props.theme.gradients.card.dark};
  width: 160px;
  position: relative;
  overflow: hidden;
  opacity: 0.7;
`;

interface HeroListSkeletonProps {
  count?: number;
}

const HeroListSkeleton = ({ count = 4 }: HeroListSkeletonProps) => {
  return Array.from({ length: count }).map((_, index) => (
    <SkeletonCard key={index}>
      <ImageSkeleton width="110px" height="110px" />
      <TextSkeleton width="80%" height="22.5px" />
    </SkeletonCard>
  ));
};

export default HeroListSkeleton;
