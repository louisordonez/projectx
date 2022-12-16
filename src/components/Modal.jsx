const Modal = ({ open, onClose, title, children }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-5 z-0 ${open ? 'block' : 'hidden'}`}>
      <div className="fixed bg-white w-96 h-[11rem] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-lg shadow">
        <div className="flex justify-between items-baseline m-6 mb-4">
          <h1 className="uppercase font-semibold text-lg absolute top-3 left-2.5 p-2">{title}</h1>
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 focus:ring-4 rounded-lg text-sm p-2 ml-auto inline-flex items-center"
            onClick={onClose}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="absolute left-2.5 p-2 mt-3">{children}</div>
      </div>
    </div>
  )
}

export default Modal
