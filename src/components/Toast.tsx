import { ToastContainer } from "react-toastify";
import styled from "styled-components";

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    padding: 16px;
    border-radius: 8px;
    font-family: ${(props) => props.theme.fonts.body};
    font-weight: 600;
    text-align: center;
    text-shadow: 0 2px 4px ${(props) => props.theme.colors.shadow.blackLight};
  }

  .Toastify__toast--success {
    background: ${(props) => props.theme.gradients.message.success};
    color: ${(props) => props.theme.colors.text.green};
    border: 2px solid ${(props) => props.theme.colors.text.darkGreen};
    box-shadow: 0 4px 15px ${(props) => props.theme.colors.shadow.greenLight};
  }

  .Toastify__toast--error {
    background: ${(props) => props.theme.gradients.message.error};
    color: ${(props) => props.theme.colors.text.red};
    border: 2px solid ${(props) => props.theme.colors.text.darkRed};
    box-shadow: 0 4px 15px ${(props) => props.theme.colors.shadow.redLight};
  }

  .Toastify__toast--success .Toastify__close-button {
    color: ${(props) => props.theme.colors.text.green};
  }

  .Toastify__toast--error .Toastify__close-button {
    color: ${(props) => props.theme.colors.text.red};
  }
`;

const Toast = () => {
  return (
    <StyledToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={true}
      newestOnTop
      rtl={false}
      pauseOnHover
    />
  );
};
export default Toast;
