import { useState } from 'react'
import Modal from './Modal'
import { convertDate } from '../services/utilities/convertDate'
import { convertCurrency } from '../services/utilities/convertCurrency'
import { convertPercentage } from '../services/utilities/convertPercentage'

const Table = ({ markets, page, perPage, totalPages, onNextPage, onPreviousPage }) => {
  const [open, setOpen] = useState(false)

  const handleRoi = (roi) => {
    if (roi !== null) {
      return (
        <div>
          <button
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2.5 py-[0.3125rem]"
            onClick={() => setOpen(true)}
          >
            View
          </button>
          <Modal open={open} onClose={() => setOpen(false)} title={'Roi'}>
            <p className="mt-2">Times: {roi.times}</p>
            <p className="mt-2">
              Currency: <span className="uppercase">{roi.currency}</span>
            </p>
            <p className="mt-2">Percentage: {convertPercentage(roi.percentage)}</p>
          </Modal>
        </div>
      )
    }
  }

  const handleSupply = (value) => value && value.toLocaleString('en-US')

  const handleColor = (value) => (value > 0 ? 'text-green-600' : 'text-red-600')

  const handleBorder = (index) => markets.length > 1 && index < 9 && 'border-b'

  return (
    <div>
      <div className="flex justify-center">
        <div className="mb-6 border rounded-lg shadow overflow-x-auto mx-10 relative">
          <table className="w-full text-sm text-left ">
            <thead className="text-gray-700 bg-gray-50 uppercase">
              <tr className="text-left whitespace-nowrap">
                <th className="py-4 px-6 font-semibold">#</th>
                <th className="py-4 px-6 font-semibold">Name</th>
                <th className="py-4 px-6 font-semibold">Price</th>
                <th className="py-4 px-6 font-semibold">Price Change 24h</th>
                <th className="py-4 px-6 font-semibold">High 24h</th>
                <th className="py-4 px-6 font-semibold">Low 24h</th>
                <th className="py-4 px-6 font-semibold">Mkt Cap</th>
                <th className="py-4 px-6 font-semibold">Mkt Cap Change 24h</th>
                <th className="py-4 px-6 font-semibold">Total Volume</th>
                <th className="py-4 px-6 font-semibold">FDV</th>
                <th className="py-4 px-6 font-semibold">Circulating Supply</th>
                <th className="py-4 px-6 font-semibold">Total Supply</th>
                <th className="py-4 px-6 font-semibold">Max Supply</th>
                <th className="py-4 px-6 font-semibold">Ath</th>
                <th className="py-4 px-6 font-semibold">Ath Date</th>
                <th className="py-4 px-6 font-semibold">Atl</th>
                <th className="py-4 px-6 font-semibold">Atl Date</th>
                <th className="py-4 px-6 font-semibold">Roi</th>
                <th className="py-4 px-6 font-semibold">Last Updated</th>
              </tr>
            </thead>
            <tbody className="">
              {markets.map((market, index) => {
                return (
                  <tr className={`whitespace-nowrap hover:bg-gray-50 ${handleBorder(index)}`} key={index}>
                    <td className="py-4 px-6 text-black">{market.market_cap_rank}</td>
                    <td className="py-4 px-6 text-black">
                      <div className="flex items-center">
                        <img className="w-5 mr-2" src={market.image} />
                        <span>{market.name}</span>
                        <span className="ml-1 uppercase text-gray-500 text-xs">{market.symbol}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">{convertCurrency(market.current_price)}</td>
                    <td className="py-4 px-6">
                      <span>{convertCurrency(market.price_change_24h)}</span>
                      <span className={`ml-1 ${handleColor(market.price_change_percentage_24h)}`}>
                        {`${convertPercentage(market.price_change_percentage_24h)}%`}
                      </span>
                    </td>
                    <td className="py-4 px-6">{convertCurrency(market.high_24h)}</td>
                    <td className="py-4 px-6">{convertCurrency(market.low_24h)}</td>
                    <td className="py-4 px-6">{convertCurrency(market.market_cap)}</td>
                    <td className="py-4 px-6">
                      <span>{convertCurrency(market.market_cap_change_24h)}</span>
                      <span className={`ml-1 ${handleColor(market.market_cap_change_percentage_24h)}`}>
                        {`${convertPercentage(market.market_cap_change_percentage_24h)}%`}
                      </span>
                    </td>
                    <td className="py-4 px-6">{convertCurrency(market.total_volume)}</td>
                    <td className="py-4 px-6">{convertCurrency(market.fully_diluted_valuation)}</td>
                    <td className="py-4 px-6">
                      <span>{handleSupply(market.circulating_supply)}</span>
                      <span className="ml-1 uppercase">{market.circulating_supply && market.symbol}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span>{handleSupply(market.total_supply)}</span>
                      <span className="ml-1 uppercase">{market.total_supply && market.symbol}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span>{handleSupply(market.max_supply)}</span>
                      <span className="ml-1 uppercase">{market.max_supply && market.symbol}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span>{convertCurrency(market.ath)}</span>
                      <span className={`ml-1 ${handleColor(market.ath_change_percentage)}`}>
                        {`${convertPercentage(market.ath_change_percentage)}%`}
                      </span>
                    </td>
                    <td className="py-4 px-6">{convertDate(market.ath_date)}</td>
                    <td className="py-4 px-6">
                      <span>{convertCurrency(market.atl)}</span>
                      <span className={`ml-1 ${handleColor(market.atl_change_percentage)}`}>
                        {`${convertPercentage(market.atl_change_percentage)}%`}
                      </span>
                    </td>

                    <td className="py-4 px-6">{convertDate(market.atl_date)}</td>
                    <td className="py-4 px-6">{handleRoi(market.roi)}</td>
                    <td className="py-4 px-6">{convertDate(market.last_updated)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-2 flex justify-center text-sm">
        <button
          className="border-solid w-8 focus:outline-none bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-white mx-4 p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={onPreviousPage}
          disabled={page < 2 && true}
        >
          {'<'}
        </button>
        <div className="p-2">{page}</div>
        <button
          className="border-solid w-8 focus:outline-none bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-white mx-4 p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={onNextPage}
          disabled={page >= totalPages / perPage && true}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Table
