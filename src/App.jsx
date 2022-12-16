import { useState } from 'react'
import Navbar from './components/Navbar'
import Table from './components/Table'
import Spinner from './components/Spinner'
import useMarkets from './services/hooks/useMarkets'

const App = () => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const { markets, totalPages, loading, error } = useMarkets(search, page)

  const handleSearch = (value) => {
    setSearch(value)
  }

  const handleNextPage = () => setPage((page) => page + 1)

  const handlePreviousPage = () => setPage((page) => page - 1)

  return (
    <div className="App font-poppins">
      <Navbar onSearch={handleSearch} />
      <div className="mx-10 mt-8">
        <h1 className="text-4xl">Markets</h1>
      </div>
      {loading ? (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 block}`}>
          <div className="absolute top-2/4 left-2/4">
            <Spinner />
          </div>
        </div>
      ) : (
        <div className="mt-8 mb-8">
          <Table
            markets={markets}
            page={page}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
        </div>
      )}
      {error && alert('Rate limit exceeded. Please wait a few moments and try again')}
    </div>
  )
}

export default App
