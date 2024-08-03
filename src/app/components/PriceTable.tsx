import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatPriceUSD } from '@/lib/utils'
import { StockCrypto } from '../config'

export function PriceTable({
  prices,
}: {
  prices: Array<Partial<StockCrypto>>
}) {
  return (
    <div className="w-[80%] mx-auto border-1 rounded-lg border-blue-600 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] p-5">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-bold">Sr No.</TableHead>
            <TableHead className="w-auto font-bold">Price</TableHead>
            <TableHead className="w-auto font-bold">Volume</TableHead>
            <TableHead className="w-auto font-bold">Capital</TableHead>
            <TableHead className='font-bold'>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prices.map((price, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-left">
                {index + 1}
              </TableCell>
              <TableCell className="font-medium">
                {formatPriceUSD(price.rate!, 4)}
              </TableCell>
              <TableCell className="font-medium">{price.volume}</TableCell>
              <TableCell className="font-medium">{price.cap}</TableCell>
              <TableCell>
                {new Date(price.timestamp!).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
