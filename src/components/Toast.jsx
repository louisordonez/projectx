import toast, { Toaster } from 'react-hot-toast'

export const notifyError = (text) => toast.error(text)

const Toast = () => {
  return <Toaster position="top-right" reverseOrder={false} />
}

export default Toast
