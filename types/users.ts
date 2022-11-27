export interface IUser {
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}

export interface IUsersDetail {
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
  address: {
    city: string
    street: string
    suite: string
    zipcode: string
  }
  company: {
    bs: string
    catchPhrase: string
    name: string
  }
}
