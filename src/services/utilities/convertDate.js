export const convertDate = (timestamp) => {
  const date = new Date(timestamp)

  return `${date.toLocaleDateString('en-US')} ${date.toLocaleTimeString('en-US')}`
}
