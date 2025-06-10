import { X } from "lucide-react";

const steps = [
  { title: "Created", datetime: "17 May, 12:30", completed: true },
  { title: "Processed by FundedNext", datetime: "17 May, 15:16", completed: true },
  { title: "Sent to provider", datetime: "26 May, 05:38", completed: true },
  { title: "Sent to Delhi Provider", datetime: "9 June, 16:46", completed: true },
  { title: "Crediting to your account", datetime: null, completed: false },
];

const PendingStatusPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative space-y-4">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <h2 className="text-xl font-bold">Withdrawal</h2>
        <p className="text-gray-500 text-sm">Invoice ID 1199649708</p>

        <div className="text-3xl font-semibold text-gray-800">3000 USD</div>
        <div className="text-green-600 font-medium bg-green-100 rounded-full inline-block px-3 py-1 text-sm">
          ● Sent
        </div>

        <div className="mt-4 space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <div className="mt-1">
                {step.completed ? (
                  <div className="h-4 w-4 bg-blue-500 rounded-full" />
                ) : (
                  <div className="h-4 w-4 border-2 border-gray-400 rounded-full" />
                )}
              </div>
              <div>
                <p className="font-medium text-gray-800">{step.title}</p>
                {step.datetime && (
                  <p className="text-xs text-gray-500">{step.datetime}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-3 rounded-md mt-6 text-sm text-gray-700 border border-blue-100">
          The transaction has been successfully processed on our end. Please
          allow some time for the funds to be credited to your account.
        </div>
      </div>
    </div>
  );
};

export default PendingStatusPopup;
