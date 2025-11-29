import styled from "styled-components";

interface ErrorMessageProps {
  message: string;
  type?: "error" | "info";
}

const MessageContainer = styled.div<{ $type: "error" | "info" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 8px;
  border: 2px solid
    ${(props) =>
      props.$type === "error"
        ? props.theme.colors.text.darkRed
        : props.theme.colors.border.brown};
  background: ${(props) =>
    props.$type === "error"
      ? props.theme.gradients.message.error
      : props.theme.gradients.card.dark};
  box-shadow: ${(props) =>
    props.$type === "error"
      ? `0 4px 20px ${props.theme.colors.shadow.redLight}`
      : `0 4px 20px ${props.theme.colors.shadow.blackMedium}`};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 16px;
  font-weight: 600;
  color: ${(props) =>
    props.$type === "error"
      ? props.theme.colors.text.red
      : props.theme.colors.text.gold};
  text-align: center;
  text-shadow: ${(props) =>
    props.$type === "error"
      ? `0 2px 4px ${props.theme.colors.shadow.black}`
      : `0 0 10px ${props.theme.colors.shadow.gold}, 0 2px 4px ${props.theme.colors.shadow.black}`};
  letter-spacing: 1px;
`;

const ErrorMessage = ({ message, type = "error" }: ErrorMessageProps) => {
  return <MessageContainer $type={type}>{message}</MessageContainer>;
};

export default ErrorMessage;
