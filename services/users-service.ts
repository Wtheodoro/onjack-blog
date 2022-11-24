import API_URL from './api'

const usersService = {
  getAllUsers: async () =>
    await fetch(`${API_URL}/users`).then((response) => response.json()),

  getUserDetails: async (userId: string) =>
    await fetch(`${API_URL}/users/${userId}`).then((response) =>
      response.json()
    ),
}

export default usersService
