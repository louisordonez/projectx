const Table = ({ markets, page, onNextPage, onPreviousPage }) => {
  return (
    <div>
      {console.log(markets, page)}
      <div className="mx-10 mt-10 overflow-y-auto">
        <div className="mb-6 p-4 border rounded-2xl shadow w-fit">
          <div className="flex items-baseline">
            <div className="m-1">image</div>
            <div className="m-1">name</div>
            <div className="m-1">id</div>
            <div className="m-1">symbol</div>
            <div className="m-1">current_price</div>
            <div className="m-1">market_cap</div>
            <div className="m-1">market_cap_rank</div>
            <div className="m-1">fully_diluted_valuation</div>
            <div className="m-1">total_volume</div>
            <div className="m-1">high_24h</div>
            <div className="m-1">low_24h</div>
            <div className="m-1">price_change_24h</div>
            <div className="m-1">price_change_percentage_24h</div>
            <div className="m-1">market_cap_change_24h</div>
            <div className="m-1">market_cap_change_percentage_24h</div>
            <div className="m-1">circulating_supply</div>
            <div className="m-1">total_supply</div>
            <div className="m-1">max_supply</div>
            <div className="m-1">ath</div>
            <div className="m-1">ath_change_percentage</div>
            <div className="m-1">ath_date</div>
            <div className="m-1">atl</div>
            <div className="m-1">atl_change_percentage</div>
            <div className="m-1">atl_date</div>
            <div className="m-1">roi</div>
            <div className="m-1">last_updated</div>
          </div>
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
