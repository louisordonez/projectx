const Navbar = () => {
  return (
    <div className="border-b py-4 flex items-baseline">
      <div className="ml-4 font-semibold text-green-700">Project X</div>
      <div>
        <input type="text" placeholder="Search ID..." className="ml-8 border rounded-lg p-2" />
      </div>
    </div>
  )
}

export default Navbar
