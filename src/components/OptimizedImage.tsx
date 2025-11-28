import { useState } from "react";
import styled from "styled-components";
import ImagePlaceholder from "./ImagePlaceholder";

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid ${(props) => props.theme.colors.border.brown};
  overflow: hidden;
  border-radius: 8px;
`;

const StyledImage = styled.img<{ $loaded: boolean }>`
  opacity: ${(props) => (props.$loaded ? 1 : 0)};
  transition: opacity 0.3s ease;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const OptimizedImage = ({ src, alt, className }: OptimizedImageProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
    setLoaded(true);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
    setLoaded(false);
  };

  return (
    <ImageContainer className={className}>
      {loading && <ImagePlaceholder type="loading" />}
      {error && <ImagePlaceholder type="error" />}
      {!error && (
        <StyledImage
          src={src}
          alt={alt}
          $loaded={loaded}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </ImageContainer>
  );
};

export default OptimizedImage;
