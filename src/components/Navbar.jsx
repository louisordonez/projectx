const Navbar = ({ search, onSearch }) => {
  return (
    <div className="border-b py-4 flex items-baseline">
      <div className="ml-4 font-semibold text-green-700">Project X</div>
      <div>
        <input
          className="ml-8 border rounded-lg p-2"
          type="text"
          placeholder="Search ID..."
          value={search}
          onChange={onSearch}
        />
      </div>
    </div>
  )
}

export default Navbar
