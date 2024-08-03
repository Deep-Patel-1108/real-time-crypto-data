"use client";
import useTicker from "@/hooks/useTicker";
import CoinCard from "./CoinCard";

const HomePage = () => {
  const { coins } = useTicker();
  return (
    <div className=" flex flex-col justify-center items-center p-4 md:px-9">
      <div className="w-3/4 flex justify-center items-center p-4">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-center font-bold text-4xl">
            Ride the Future of Finance with CoinStream
          </h1>

          <p className="text-center text-gray-500">
            CoinStream is your ultimate gateway to the world of cryptocurrency.
            With our intuitive interface and cutting-edge technology, managing
            your digital assets has never been easier.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[90%] flex flex-col sm:flex-row justify-start sm:flex-wrap gap-y-8">
          {Object.keys(coins).map((crypto: any, index) => {
            return <CoinCard {...coins[crypto]} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
