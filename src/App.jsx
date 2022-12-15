import { useState } from 'react'
import Navbar from './components/Navbar'
import Table from './components/Table'

const App = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="App font-poppins">
      <Navbar search={search} onSearch={handleSearch} />
      <div className="m-10 text-4xl">
        <h1>Markets</h1>
      </div>
      <Table />
    </div>
  )
}

export default App
