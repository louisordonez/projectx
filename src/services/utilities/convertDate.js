export const convertDate = (timestamp) =>
  timestamp && `${new Date(timestamp).toLocaleDateString('en-US')} ${new Date(timestamp).toLocaleTimeString('en-US')}`
