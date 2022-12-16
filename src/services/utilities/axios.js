import axios from 'axios'
import { COIN_GECKO_BASE_URL } from '../constants/endpoints'

export const CoinGeckoRef = axios.create({
  baseURL: COIN_GECKO_BASE_URL,
})
