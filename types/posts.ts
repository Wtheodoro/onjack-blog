export interface IPosts {
  body: string
  id: number
  title: string
  userId: number
}

export interface IComments {
  postId: number
  id: number
  name: string
  email: string
  body: string
}
