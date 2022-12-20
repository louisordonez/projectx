import { useState, useEffect } from 'react'
import { CoinGeckoRef } from '../utilities/axios'
import { COINS_MARKETS_ENDPOINT, COINS_LIST_ENDPOINT, SEARCH_ENDPOINT } from '../constants/endpoints'

const useMarkets = (search, page, perPage) => {
  const [markets, setMarkets] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    setError('')

    const params = '?vs_currency=usd&order=market_cap_desc&sparkline=false'

    const handleError = (error) => {
      error.code === 'ERR_NETWORK'
        ? setError('Rate limit exceeded. Please wait a few moments and try again.')
        : setError(error.message)
    }

    if (search) {
      CoinGeckoRef.get(`${SEARCH_ENDPOINT}?query=${search}`)
        .then((response) => {
          if (response.status === 200) {
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
                  if (response.status === 200) {
                    setMarkets(response.data)
                    setLoading(false)

                    CoinGeckoRef.get(`${COINS_MARKETS_ENDPOINT}${params}&ids=${ids.toString()}`)
                      .then((response) => {
                        if (response.status === 200) {
                          setTotalPages(response.data.length)
                          setLoading(false)
                        }
                      })
                      .catch((error) => handleError(error))
                  }
                })
                .catch((error) => handleError(error))
            }
          }
        })
        .catch((error) => handleError(error))
    } else {
      CoinGeckoRef.get(`${COINS_MARKETS_ENDPOINT}${params}&per_page=${perPage}&page=${page}`)
        .then((response) => {
          if (response.status === 200) {
            setMarkets(response.data)
            setLoading(false)

            CoinGeckoRef.get(COINS_LIST_ENDPOINT)
              .then((response) => {
                if (response.status === 200) {
                  setTotalPages(response.data.length)
                  setLoading(false)
                }
              })
              .catch((error) => handleError(error))
          }
        })
        .catch((error) => handleError(error))
    }
  }, [search, page])

  return { markets, totalPages, loading, error }
}

export default useMarkets
