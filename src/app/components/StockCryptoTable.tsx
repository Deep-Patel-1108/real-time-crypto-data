"use client";
import React from "react";
import { RootState } from "@/store";
import { toggleModel } from "@/store/stockCryptoSlice";
import { useSelector, useDispatch } from "react-redux";
import { PriceTable } from "./PriceTable";
import ChangeSymbolModal from "./ChangeSymbolModal";
import useTicker from "@/hooks/useTicker";
import Image from "next/image";
import { formatPriceUSD } from "@/lib/utils";
import { Button } from "reactstrap";
import { disableScroll } from "@/utils/comon";
import Loader from "./Loader";
import { redirect } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const StockCryptoTable: React.FC = () => {
  const { loading, changeCoinModel } = useSelector(
    (state: RootState) => state.stockCrypto
  );
  const { coins, selectedCoin, data } = useTicker();
  const dispatch = useDispatch();

  const handleModel = () => {
    disableScroll();
    dispatch(toggleModel());
  };

  if (!data.length) {
    return redirect("/");
  }

  if (loading) return <Loader />;

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-end px-4">
          <div className=" flex gap-3 items-center p-3 rounded-lg shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]">
            <Image
              className="w-15 h-15 rounded-full"
              src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${coins[selectedCoin].iconCode}.png`}
              alt={`${coins[selectedCoin].iconCode}`}
              height={60}
              width={60}
            />
            <div className="flex flex-col">
              <p className="font-bold text-2xl">{coins[selectedCoin].name}</p>
              <p>{formatPriceUSD(data[0].rate ?? 0, 5)}</p>
            </div>
          </div>
          <div>
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  className="p-4 w-[100px] h-[100px] text-blue-700 cursor-pointer
                 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]
                  rounded-full font-bold"
                >
                  Change Coin
                </Button>
              </DrawerTrigger>
              <DrawerContent className=" h-[90%] sm:h-[70%] xl:h-[50%] flex justify-center items-center">
                <ChangeSymbolModal />
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <div className="p-8 flex justify-center w-full">
          <PriceTable prices={data} />
        </div>

        {changeCoinModel && <ChangeSymbolModal />}
      </div>
    </>
  );
};

export default StockCryptoTable;
