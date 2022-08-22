import { useEffect } from "react";

const ConfirmWIthdrawFunds = (props) => {
  const {
    confirmWithdraw,
    setConfirmWithdraw,
    setConfirmTransactionPin,
    setWithdrawSuccessful,
  } = props;

  const onCancelClicked = () => {
    setConfirmWithdraw(false);
  };

  const onConfirmClicked = () => {
    onCancelClicked();
    setConfirmTransactionPin(false)
    setWithdrawSuccessful(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window) document.body.style.overflow = "hidden";
    }

    if (!confirmWithdraw) {
      if (typeof window !== "undefined") {
        if (window) document.body.style.overflow = "unset";
      }
    }
  }, [confirmWithdraw]);

  if (!confirmWithdraw) return <></>;

  return (
    <div>
      <div
        style={{ zIndex: "51" }}
        className="fixed top-0 left-0 w-screen h-screen bg-[rgba(23,23,23,.70)]"
      />
      <div
        style={{ zIndex: "52" }}
        className="fixed bg-white text-center text-colorPrimary w-[90%] rounded-3xl p-4 md:p-6 mx-auto md:max-w-[444px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <p className="font-medium text-2xl mb-2">Transfer of ₦25,000</p>
        <p className="text-xl mb-6">
          You are about to transfer ₦200,000 to the selected bank account.
        </p>
        <p className="text-xl">
          A transaction fee of ₦200,000 applies. Please confirm
        </p>

        <div className="mt-6 flex justify-around">
          <button
            onClick={onCancelClicked}
            className="w-[136px] py-3 bg-white border-colorPrimary border rounded-xl text-colorPrimary"
          >
            Cancel
          </button>
          <button
            onClick={onConfirmClicked}
            className="w-[136px] py-3 bg-colorPrimary rounded-xl text-white"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmWIthdrawFunds;
