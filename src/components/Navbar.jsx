import { useState, useEffect } from 'react'

const Navbar = ({ search, onSearch }) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(true)
  }, [])

  const handleActive = () => (active ? 'text-green-900 border-b-2 border-b-green-900' : 'text-green-700')

  return (
    <div className="border-b py-4 flex items-baseline">
      <div className="mx-4">
        <a className="font-semibold text-green-700" href="/">
          Project X
        </a>
      </div>
      <div>
        <input
          className="mx-2 border rounded-lg p-2"
          type="text"
          placeholder="Search ID..."
          value={search}
          onChange={onSearch}
        />
      </div>
      <div className="mx-6">
        <a
          className={`font-semibold cursor-pointer ${handleActive()} active:text-green-900 hover:text-green-900`}
          href="#"
        >
          Markets
        </a>
      </div>
    </div>
  )
}

export default Navbar
