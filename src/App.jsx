import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="App font-poppins">
      <Navbar search={search} onSearch={handleSearch} />
    </div>
  )
}

export default App
