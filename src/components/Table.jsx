const Table = ({ markets, page, onNextPage, onPreviousPage }) => {
  return (
    <div>
      {console.log(markets, page)}
      <div className="mt-10 flex justify-center">
        <div className="mb-6 p-4 border rounded-2xl shadow overflow-x-auto mx-10 relative">
          <table className="w-full">
            <thead className="">
              <tr className="text-left whitespace-nowrap">
                <th className="py-3 px-6 font-semibold">Market Cap Rank</th>
                <th className="py-3 px-6 font-semibold">Name</th>
                <th className="py-3 px-6 font-semibold">ID</th>
                <th className="py-3 px-6 font-semibold">Symbol</th>
                <th className="py-3 px-6 font-semibold">Current Price</th>
                <th className="py-3 px-6 font-semibold">Market Cap</th>
                <th className="py-3 px-6 font-semibold">Fully Diluted Valuation</th>
                <th className="py-3 px-6 font-semibold">Total Volume</th>
                <th className="py-3 px-6 font-semibold">High 24h</th>
                <th className="py-3 px-6 font-semibold">Low 24h</th>
                <th className="py-3 px-6 font-semibold">Price Change 24h</th>
                <th className="py-3 px-6 font-semibold">Price Change Percentage 24h</th>
                <th className="py-3 px-6 font-semibold">Market Cap Change 24h</th>
                <th className="py-3 px-6 font-semibold">Market Cap Change Percentage 24h</th>
                <th className="py-3 px-6 font-semibold">Circulating Supply</th>
                <th className="py-3 px-6 font-semibold">Total Supply</th>
                <th className="py-3 px-6 font-semibold">Max Supply</th>
                <th className="py-3 px-6 font-semibold">Ath</th>
                <th className="py-3 px-6 font-semibold">Ath Change Percentage</th>
                <th className="py-3 px-6 font-semibold">Ath Date</th>
                <th className="py-3 px-6 font-semibold">Atl</th>
                <th className="py-3 px-6 font-semibold">Atl Change Percentage</th>
                <th className="py-3 px-6 font-semibold">Atl Date</th>
                {/* <th className="">roi</th> */}
                <th className="py-3 px-6">Last Updated</th>
              </tr>
            </thead>
            <tbody className="">
              {markets.map((market, index) => {
                return (
                  <tr className={`whitespace-nowrap hover:bg-gray-50 ${index !== 9 && 'border-b'}`} key={index}>
                    <td className="py-3 px-6">{market.market_cap_rank}</td>
                    <td className="py-3 px-6">
                      <div className="flex items-center">
                        <img className="w-8 mr-2" src={market.image} />
                        {market.name}
                      </div>
                    </td>
                    <td className="py-3 px-6">{market.id}</td>
                    <td className="py-3 px-6">{market.symbol}</td>
                    <td className="py-3 px-6">{market.current_price}</td>
                    <td className="py-3 px-6">{market.market_cap}</td>
                    <td className="py-3 px-6">{market.fully_diluted_valuation}</td>
                    <td className="py-3 px-6">{market.total_volume}</td>
                    <td className="py-3 px-6">{market.high_24h}</td>
                    <td className="py-3 px-6">{market.low_24h}</td>
                    <td className="py-3 px-6">{market.price_change_24h}</td>
                    <td className="py-3 px-6">{market.price_change_percentage_24h}</td>
                    <td className="py-3 px-6">{market.market_cap_change_24h}</td>
                    <td className="py-3 px-6">{market.market_cap_change_percentage_24h}</td>
                    <td className="py-3 px-6">{market.circulating_supply}</td>
                    <td className="py-3 px-6">{market.total_supply}</td>
                    <td className="py-3 px-6">{market.max_supply}</td>
                    <td className="py-3 px-6">{market.ath}</td>
                    <td className="py-3 px-6">{market.ath_change_percentage}</td>
                    <td className="py-3 px-6">{market.ath_date}</td>
                    <td className="py-3 px-6">{market.atl}</td>
                    <td className="py-3 px-6">{market.atl_change_percentage}</td>
                    <td className="py-3 px-6">{market.atl_date}</td>
                    {/* <td className="">{market.roi}</td> */}
                    <td className="py-3 px-6">{market.last_updated}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-2 flex justify-center text-sm">
        <button
          className="border-solid bg-green-700 hover:bg-green-900 rounded-lg text-white mx-4 p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={onPreviousPage}
          disabled={page < 2 && true}
        >
          Previous
        </button>
        <div className="p-2">{page}</div>
        <button
          className="border-solid bg-green-700 hover:bg-green-900 rounded-lg text-white mx-4 p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={onNextPage}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Table
