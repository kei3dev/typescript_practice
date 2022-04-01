export type Item = {
  id: string
  name: string
  price: number
  description: string
  status: ItemStatus
}

type ItemStatus = 'ON_SALE' | 'SOLD_OUT'
