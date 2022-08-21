const formatter = Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
})

export default function formatMoney(price) {
  return formatter.format(price)
}
