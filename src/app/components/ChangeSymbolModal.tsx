import { AppDispatch } from "@/store";
import { updateSelectedCoin } from "@/store/stockCryptoSlice";
import { useDispatch } from "react-redux";
import { COIN_OPTIONS } from "../config";
import Image from "next/image";
import { DrawerClose } from "@/components/ui/drawer";

export default function ChangeSymbolModal() {
  const dispatch = useDispatch<AppDispatch>();

  const handleModelClose = (value: string) => {
    dispatch(updateSelectedCoin(value));
  };
  return (
    <div className="max-h-[90vh] px-5 pt-6 pb-9 w-full rounded-lg">
      <div className="text-[#222222] capitalize font-bold text-2xl mb-4 text-center">
        select crypto
      </div>
      <div className="flex justify-center flex-wrap gap-3">
        {COIN_OPTIONS.map(({ label, value, iconCode }, index) => (
          <DrawerClose asChild key={index}>
            <button
              className="bg-[#e7e7e7] w-36 h-36 border border-blue-300  transition-all duration-300 rounded-full text-[#222222] p-4 justify-center flex items-center shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,_rgba(60,64,67,0.15)_0px_2px_6px_2px] flex-col"
              onClick={() => {
                handleModelClose(value);
              }}
            >
              <Image
                className="w-10 h-10 mb-2 rounded-full"
                src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${iconCode}.png`}
                alt={`${iconCode}`}
                height={60}
                width={60}
              />
              {label}
            </button>
          </DrawerClose>
        ))}
        <div></div>
      </div>
    </div>
  );
}
