import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Table from './components/Table'
import Spinner from './components/Spinner'
import Toast from './components/Toast'
import { notifyError } from './components/Toast'
import useMarkets from './services/hooks/useMarkets'

const App = () => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [search])

  const perPage = 10
  const { markets, totalPages, loading, error } = useMarkets(search, page, perPage)

  const handleSearch = (value) => setSearch(value)

  const handleNextPage = () => setPage((page) => page + 1)

  const handlePreviousPage = () => setPage((page) => page - 1)

  return (
    <div className="App font-poppins">
      <Navbar onSearch={handleSearch} />
      <div className="mx-10 mt-8">
        <h1 className="text-2xl">Markets</h1>
      </div>
      {search && (
        <div className="mx-10 mt-8">
          <h1 className="text-lg">{totalPages} results</h1>
        </div>
      )}
      {loading ? (
        <div className="absolute top-2/4 left-2/4">
          <Spinner />
        </div>
      ) : (
        <div className="mt-6 mb-8">
          <Table
            markets={markets}
            page={page}
            perPage={perPage}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
        </div>
      )}
      {error && notifyError('Rate limit exceeded. Please wait a few moments and try again')}
      <Toast />
    </div>
  )
}

export default App
