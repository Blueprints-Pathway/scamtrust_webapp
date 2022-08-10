import { Backdrop as BackdropMUI } from "@mui/material";

const Backdrop = (props) => {
  const {
    children,
    showInitiateTransaction,
    showTransactionPreview,
    showTransactionSuccess,
  } = props;
  return (
    <BackdropMUI
      open={
        showInitiateTransaction ||
        showTransactionPreview ||
        showTransactionSuccess
      }
      style={{ zIndex: 40 }}
    >
      {children}
    </BackdropMUI>
  );
};

export default Backdrop;
