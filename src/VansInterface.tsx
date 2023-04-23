export default interface Van {
    description: String
    id: number
    imageUrl: string
    name: string
    price: number
    type: string
}
export interface VansData {
    vans: Van[];
}