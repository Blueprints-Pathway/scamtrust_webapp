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
    >
      {children}
    </BackdropMUI>
  );
};

export default Backdrop;
