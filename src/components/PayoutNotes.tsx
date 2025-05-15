const PayoutNotes = () => {
  return (
    <div className="bg-indigo-50 border border-indigo-300 rounded-xl shadow-sm overflow-hidden">
      <div className="p-0 ml-4 mt-2 flex justify-between items-center">
        <h6 className="font-semibold text-base text-gray-700">Note:</h6>
      </div>
      <div className="px-4 pb-4 sm:px-6 sm:pb-6">
        <ol className="list-decimal list-inside text-xs sm:text-sm text-gray-700 space-y-1">
          <li className="p-0">
            The 24 hour payout guarantee will be applicable after you request the payout.
          </li>
          <li className="p-0">
            You will be able to withdraw the 15% profit share once you make 10% growth.
          </li>
          <li className="p-0">
            If your payout request is marked with Additional Due Diligence, re-submit.
          </li>
          <li className="p-0">
            With the first payout, you will receive the Reward Bonus.
          </li>
          <li className="p-0">
            If unable to request the payout, check your email from
            <a
              href="mailto:trading@fundednxt.com"
              className="text-indigo-700 underline"
            >
              trading@fundednxt.com
            </a>
            .
          </li>
          <li className="p-0">
            A provider fee of up to 3% will be applied to every payout request.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PayoutNotes;
