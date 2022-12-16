import { convertDate } from '../services/utilities/convertDate'
import { convertCurrency } from '../services/utilities/convertCurrency'

const Table = ({ markets, page, onNextPage, onPreviousPage }) => {
  const handleBorder = (index) => {
    if (markets.length > 1) {
      return index < 9 && 'border-b'
    }
  }

  const handleColor = (value) => (value > 0 ? 'text-green-700' : 'text-red-700')

  const handleChange = (value) => {
    const roundedValue = Math.round(value * 10) / 10

    return value > 0 ? `▲ ${roundedValue}` : `▼ ${roundedValue}`
  }

  const handleAmountChange = (value) => {
    const roundedValue = Math.round(value * 10) / 10

    return value > 0 ? `▲ $${value.toLocaleString('en-US')}` : value.toLocaleString('en-US').replace('-', '▼ -$')
  }

  const handleSupply = (value) => value && value.toLocaleString('en-US')

  return (
    <div>
      <div className="flex justify-center">
        <div className="mb-6 border rounded-lg shadow overflow-x-auto mx-10 relative">
          <table className="w-full text-sm text-left ">
            <thead className="text-gray-700 bg-gray-50 uppercase">
              <tr className="text-left whitespace-nowrap">
                <th className="py-4 px-6 font-semibold">Market Cap Rank</th>
                <th className="py-4 px-6 font-semibold">Name</th>
                <th className="py-4 px-6 font-semibold">ID</th>
                <th className="py-4 px-6 font-semibold">Current Price</th>
                <th className="py-4 px-6 font-semibold">Market Cap</th>
                <th className="py-4 px-6 font-semibold">Fully Diluted Valuation</th>
                <th className="py-4 px-6 font-semibold">Total Volume</th>
                <th className="py-4 px-6 font-semibold">High 24h</th>
                <th className="py-4 px-6 font-semibold">Low 24h</th>
                <th className="py-4 px-6 font-semibold">Price Change 24h</th>
                <th className="py-4 px-6 font-semibold">Price Change Percentage 24h</th>
                <th className="py-4 px-6 font-semibold">Market Cap Change 24h</th>
                <th className="py-4 px-6 font-semibold">Market Cap Change Percentage 24h</th>
                <th className="py-4 px-6 font-semibold">Circulating Supply</th>
                <th className="py-4 px-6 font-semibold">Total Supply</th>
                <th className="py-4 px-6 font-semibold">Max Supply</th>
                <th className="py-4 px-6 font-semibold">Ath</th>
                <th className="py-4 px-6 font-semibold">Ath Change Percentage</th>
                <th className="py-4 px-6 font-semibold">Ath Date</th>
                <th className="py-4 px-6 font-semibold">Atl</th>
                <th className="py-4 px-6 font-semibold">Atl Change Percentage</th>
                <th className="py-4 px-6 font-semibold">Atl Date</th>
                {/* <th className="py-4 px-6 font-semibold">Roi</th> */}
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
                    <td className="py-4 px-6">{market.id}</td>
                    <td className="py-4 px-6">{convertCurrency(market.current_price)}</td>
                    <td className="py-4 px-6">{convertCurrency(market.market_cap)}</td>
                    <td className="py-4 px-6">{convertCurrency(market.fully_diluted_valuation)}</td>
                    <td className="py-4 px-6">{convertCurrency(market.total_volume)}</td>
                    <td className="py-4 px-6">{convertCurrency(market.high_24h)}</td>
                    <td className="py-4 px-6">{convertCurrency(market.low_24h)}</td>
                    <td className={`py-4 px-6 ${handleColor(market.price_change_24h)}`}>
                      {handleAmountChange(market.price_change_24h)}
                    </td>
                    <td className={`py-4 px-6 ${handleColor(market.price_change_percentage_24h)}`}>{`${handleChange(
                      market.price_change_percentage_24h
                    )}%`}</td>
                    <td className={`py-4 px-6 ${handleColor(market.market_cap_change_24h)}`}>
                      {handleAmountChange(market.market_cap_change_24h)}
                    </td>
                    <td
                      className={`py-4 px-6 ${handleColor(market.market_cap_change_percentage_24h)}`}
                    >{`${handleChange(market.market_cap_change_percentage_24h)}%`}</td>
                    <td className="py-4 px-6">
                      <span>{handleSupply(market.circulating_supply)}</span>
                      <span className="ml-1 uppercase">{market.symbol}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span>{handleSupply(market.total_supply)}</span>
                      <span className="ml-1 uppercase">{market.symbol}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span>{handleSupply(market.max_supply)}</span>
                      <span className="ml-1 uppercase">{market.max_supply && market.symbol}</span>
                    </td>
                    <td className="py-4 px-6">{convertCurrency(market.ath)}</td>
                    <td className={`py-4 px-6 ${handleColor(market.ath_change_percentage)}`}>{`${handleChange(
                      market.ath_change_percentage
                    )}%`}</td>
                    <td className="py-4 px-6">{convertDate(market.ath_date)}</td>
                    <td className="py-4 px-6">{convertCurrency(market.atl)}</td>
                    <td className={`py-4 px-6 ${handleColor(market.atl_change_percentage)}`}>{`${handleChange(
                      market.atl_change_percentage
                    )}%`}</td>
                    <td className="py-4 px-6">{convertDate(market.atl_date)}</td>
                    {/* <td className="py-4 px-6">{market.roi}</td> */}
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
          className="border-solid w-8 bg-green-700 hover:bg-green-900 rounded-lg text-white mx-4 p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={onPreviousPage}
          disabled={page < 2 && true}
        >
          {'<'}
        </button>
        <div className="p-2">{page}</div>
        <button
          className="border-solid w-8 bg-green-700 hover:bg-green-900 rounded-lg text-white mx-4 p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={onNextPage}
        >
          {'>'}
        </button>
      </div>
    </div>
  )
}

export default Table
