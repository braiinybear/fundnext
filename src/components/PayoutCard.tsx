import { Info } from "lucide-react";

interface PayoutCardProps {
  label: string;
  value: string;
  icon: string;
  bg: string;
  border: string;
  tooltip: string;
  onClick: () => void;
}

const PayoutCard = ({
  label,
  value,
  icon,
  bg,
  border,
  tooltip,
  onClick,
}: PayoutCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`${bg} ${border} rounded-xl p-3 sm:p-4 flex justify-between items-center cursor-pointer hover:shadow-md transition`}
    >
      <div>
        <div className="flex items-center gap-x-30">
          <img src={icon} alt={label} className="w-10 h-10" />
          <div className="relative group inline-block">
            <div className="rounded-full p-1 flex items-center justify-center cursor-pointer">
              <Info className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 text-sm text-white bg-black rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 text-center">
              {tooltip}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rotate-45"></div>
            </div>
          </div>
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl font-semi-bold text-gray-800">
          {value}
        </div>
        <div className="text-xs sm:text-sm text-gray-600 mt-1">{label}</div>
      </div>
    </div>
  );
};

export default PayoutCard;
