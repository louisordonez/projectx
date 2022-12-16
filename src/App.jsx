import { useState } from 'react'
import Navbar from './components/Navbar'
import Table from './components/Table'
import useMarkets from './services/hooks/useMarkets'

const App = () => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const { markets, loading, error } = useMarkets(search, page)

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleNextPage = () => setPage((page) => page + 1)

  const handlePreviousPage = () => setPage((page) => page - 1)

  return (
    <div className="App font-poppins">
      <Navbar search={search} onSearch={handleSearch} />
      <div className="m-10 text-4xl">
        <h1>Markets</h1>
      </div>
      {loading ? (
        'Loading...'
      ) : (
        <div className="mb-10">
          <Table markets={markets} page={page} onNextPage={handleNextPage} onPreviousPage={handlePreviousPage} />
        </div>
      )}
      {error && 'Error'}
    </div>
  )
}

export default App
