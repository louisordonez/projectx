import { useState, useEffect } from 'react'
import { CoinGeckoRef } from '../utilities/axios'
import { COINS_MARKETS_ENDPOINT, SEARCH_ENDPOINT } from '../constants/endpoints'

const useMarkets = (search, page, perPage) => {
  const [markets, setMarkets] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)

    const params = `?vs_currency=usd&order=market_cap_desc&sparkline=false&per_page=${perPage}`

    if (search) {
      CoinGeckoRef.get(`${SEARCH_ENDPOINT}${search}`)
        .then((response) => {
          const ids = response.data.coins.map((coin) => coin.id)

          if (ids.length === 0) {
            alert('No data found.')
            setLoading(false)
          } else {
            CoinGeckoRef.get(`${COINS_MARKETS_ENDPOINT}${params}&ids=${ids.toString()}&page=${page}`)
              .then((response) => {
                setMarkets(response.data)
                setLoading(false)

                CoinGeckoRef.get(`${COINS_MARKETS_ENDPOINT}${params}&ids=${ids.toString()}`)
                  .then((response) => {
                    setTotalPages(response.data.length)
                    setLoading(false)
                  })
                  .catch(() => setError(true))
              })
              .catch(() => setError(true))
          }
        })
        .catch(() => setError(true))
    } else {
      CoinGeckoRef.get(`${COINS_MARKETS_ENDPOINT}${params}&page=${page}`)
        .then((response) => {
          setMarkets(response.data)
          setLoading(false)

          CoinGeckoRef.get(`${COINS_MARKETS_ENDPOINT}${params}`)
            .then((response) => {
              setTotalPages(response.data.length)
              setLoading(false)
            })
            .catch(() => setError(true))
        })
        .catch(() => setError(true))
    }
  }, [search, page])

  return { markets, totalPages, loading, error }
}

export default useMarkets
