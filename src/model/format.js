export const thousands = (num, decimals) => {
  const n = num.toFixed(decimals)
  const numParts = n.toString().split('.')
  numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return numParts.join('.')
}
