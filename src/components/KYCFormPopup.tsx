import { useState } from "react";

interface KYCFormPopupProps {
  onClose: () => void;
  onNext: () => void;
  onChange: (data: { pan: string; aadhar: string }) => void;
}

const KYCFormPopup = ({ onClose, onNext, onChange }: KYCFormPopupProps) => {
  const [formData, setFormData] = useState({ pan: "", aadhar: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    
    setFormData(updated);
    onChange(updated);
  };

  return (
    <div className="fixed inset-0 z-10 backdrop-blur-xs bg-black/20 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 space-y-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h3 className="text-lg font-semibold text-gray-800">
          Enter Your KYC Details
        </h3>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onNext();
          }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              PAN Card Number
            </label>
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              required
              placeholder="ABCDE1234F"
              className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Aadhar Card Number
            </label>
            <input
              type="text"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
              required
              placeholder="1234 5678 9012"
              className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default KYCFormPopup;
