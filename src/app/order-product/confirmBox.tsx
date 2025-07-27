// confirmBox.tsx
type ConfirmBoxProps = {
  setConfirm: (value: boolean) => void;
  setShowConfirmBox: (value: boolean) => void;
};

export default function ConfirmBox({
  setConfirm,
  setShowConfirmBox,
}: ConfirmBoxProps) {
  return (
    <div
      className="absolute w-full h-dvh top-0 left-0 bg-black/80 flex justify-center items-center"
      onClick={() => setShowConfirmBox(false)}
    >
      <div
        className="max-w-3xl mx-auto px-5 py-8 bg-white text-center rounded text-gray-600"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold mb-3">Order Confirmation</h3>
        <p>Thank you for your order. We will contact you soon.</p>
        <p>
          Please click{" "}
          <span className="text-green-600">
            <strong>proceed</strong>
          </span>{" "}
          to confirm your order
        </p>
        <div className="mt-5 flex gap-5 justify-center">
          <button
            className="btn-danger"
            onClick={() => {
              setConfirm(false);
              setShowConfirmBox(false);
            }}
          >
            Cancel
          </button>
          <button className="btn-success" onClick={() => setConfirm(true)}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
