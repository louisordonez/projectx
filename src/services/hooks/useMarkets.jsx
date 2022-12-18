import { useState, useEffect } from 'react'
import { notifyError } from '../../components/Toast'
import { CoinGeckoRef } from '../utilities/axios'
import { COINS_MARKETS_ENDPOINT, SEARCH_ENDPOINT } from '../constants/endpoints'

const useMarkets = (search, page, perPage) => {
  const [markets, setMarkets] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const params = '?vs_currency=usd&order=market_cap_desc&sparkline=false'

    if (search) {
      CoinGeckoRef.get(`${SEARCH_ENDPOINT}${search}`)
        .then((response) => {
          const ids = response.data.coins.map((coin) => coin.id)

          if (ids.length === 0) {
            setMarkets([])
            setTotalPages(0)
            setLoading(false)
          } else {
            CoinGeckoRef.get(
              `${COINS_MARKETS_ENDPOINT}${params}&ids=${ids.toString()}&per_page=${perPage}&page=${page}`
            )
              .then((response) => {
                setMarkets(response.data)
                setLoading(false)

                CoinGeckoRef.get(`${COINS_MARKETS_ENDPOINT}${params}&ids=${ids.toString()}`)
                  .then((response) => {
                    setTotalPages(response.data.length)
                    setLoading(false)
                  })
                  .catch((error) => setError(error))
              })
              .catch((error) => setError(error))
          }
        })
        .catch((error) => setError(error))
    } else {
      CoinGeckoRef.get(`${COINS_MARKETS_ENDPOINT}${params}&per_page=${perPage}&page=${page}`)
        .then((response) => {
          setMarkets(response.data)
          setLoading(false)

          CoinGeckoRef.get(`${COINS_MARKETS_ENDPOINT}${params}`)
            .then((response) => {
              setTotalPages(response.data.length)
              setLoading(false)
            })
            .catch((error) => setError(error))
        })
        .catch((error) => setError(error))
    }
  }, [search, page])

  return { markets, totalPages, loading, error }
}

export default useMarkets
