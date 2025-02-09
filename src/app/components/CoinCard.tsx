import Image from 'next/image'
import { StockCrypto } from '../config'
import { formatPriceUSD } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { updateSelectedCoin } from '@/store/stockCryptoSlice'

const CoinCard = ({ id, name, iconCode, rate }: StockCrypto) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(updateSelectedCoin(id))
    router.push('/prices')
  }

  return (
    <div onClick={handleClick} className="sm:w-[50%] md:w-[30%] lg:w-[20%] cursor-pointer flex justify-center items-center ">
      <div className="border border-blue-300 rounded-full shadow-lg flex flex-col justify-center gap-1 items-center py-2 w-40 h-40">
        <Image
          className="w-10 h-10 mb-2 rounded-full"
          src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${iconCode}.png`}
          alt={`${iconCode}`}
          height={60}
          width={60}
        />
        <p>{name}</p>
        <p>{formatPriceUSD(rate ?? 0, 5)}</p>
      </div>
    </div>
  )
}

export default CoinCard
