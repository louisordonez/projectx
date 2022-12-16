import { useState, useEffect } from 'react'
import { CoinGeckoRef } from '../utilities/axios'
import { COINS_MARKETS_ENDPOINT } from '../constants/endpoints'
import axios from 'axios'

const useMarkets = (search, page) => {
  const [markets, setMarkets] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)

    const params = search
      ? `?vs_currency=usd&ids=${search}&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
      : `?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
    const paramsWithoutPage = search
      ? `?vs_currency=usd&ids=${search}&order=market_cap_desc&sparkline=false`
      : `?vs_currency=usd&order=market_cap_desc&sparkline=false`
    const controller = new AbortController()

    CoinGeckoRef.get(`${COINS_MARKETS_ENDPOINT}${params}`, {
      signal: controller.signal,
    })
      .then((response) => {
        setMarkets(response.data)
        setLoading(false)

        CoinGeckoRef.get(`${COINS_MARKETS_ENDPOINT}${paramsWithoutPage}`, {
          signal: controller.signal,
        })
          .then((response) => {
            setTotalPages(response.data.length)
            setLoading(false)
          })
          .catch((error) => !axios.isCancel(error) && setError(true))
      })
      .catch((error) => !axios.isCancel(error) && setError(true))

    return () => controller.abort()
  }, [search, page])

  return { markets, totalPages, loading, error }
}

export default useMarkets
