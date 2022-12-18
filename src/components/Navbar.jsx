import { useState, useEffect } from 'react'

const Navbar = ({ onSearch }) => {
  const [active, setActive] = useState(false)
  const [value, setValue] = useState('')

  useEffect(() => {
    setActive(true)
  }, [])

  const handleSearch = (value) => (value ? onSearch(value) : alert('Search cannot be empty.'))

  const handleActive = () => (active ? 'text-green-900 border-b-2 border-b-green-900' : 'text-green-700')

  return (
    <div className="border-b py-4 flex items-baseline">
      <div className="mx-4">
        <a className="font-semibold text-green-700" href="/">
          Project X
        </a>
      </div>
      <div
        className="flex items-center border rounded-lg"
        onKeyDown={(event) => event.key === 'Enter' && handleSearch(value)}
      >
        <input
          className="mx-2 text-sm p-2 focus:outline-none"
          type="text"
          placeholder="Search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          type="button"
          className="border-none text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 focus:ring-4 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center"
          onClick={() => handleSearch(value)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="mx-6">
        <a
          className={`font-semibold cursor-pointer ${handleActive()} active:text-green-900 hover:text-green-900`}
          href="/"
        >
          Markets
        </a>
      </div>
    </div>
  )
}

export default Navbar
