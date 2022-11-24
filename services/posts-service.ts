import API_URL from './api'

const postsService = {
  getAllPosts: async () =>
    await fetch(`${API_URL}/posts`).then((response) => response.json()),

  getPostComments: async (postId: string) =>
    await fetch(`${API_URL}/${postId}/comments`).then((response) =>
      response.json()
    ),
}

export default postsService
