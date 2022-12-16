import { useState } from 'react'
import Navbar from './components/Navbar'
import Table from './components/Table'
import Spinner from './components/Spinner'
import useMarkets from './services/hooks/useMarkets'

const App = () => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const { markets, loading, error } = useMarkets(search, page)

  const handleSearch = (value) => {
    setSearch(value)
  }

  const handleNextPage = () => setPage((page) => page + 1)

  const handlePreviousPage = () => setPage((page) => page - 1)

  return (
    <div className="App font-poppins">
      <Navbar onSearch={handleSearch} />
      <div className="mx-10 mt-8 text-4xl">
        <h1>Markets</h1>
      </div>
      {loading ? (
        <div className="mt-8 mb-8">
          <Spinner />
        </div>
      ) : (
        <div className="mt-8 mb-8">
          <Table markets={markets} page={page} onNextPage={handleNextPage} onPreviousPage={handlePreviousPage} />
        </div>
      )}
      {error && 'Error'}
    </div>
  )
}

export default App
