import React from "react";

type Props = {
  onReset: () => void;
};

const ResetPayoutButton: React.FC<Props> = ({ onReset }) => {
  return (
    <button
      onClick={onReset}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
    >
      Reset Payouts
    </button>
  );
};

export default ResetPayoutButton;
