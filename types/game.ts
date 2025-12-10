export interface Game {
  id: string
  title: string
  category: string
  thumbnail: string
  description: string
  gameUrl: string
  isHot?: boolean
  jackpot?: string
  rating?: string
  provider?: string
}
