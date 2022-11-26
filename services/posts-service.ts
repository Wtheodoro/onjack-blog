import API_URL from './api'

const postsService = {
  getAllPosts: async () =>
    await fetch(`${API_URL}/posts`).then((response) => response.json()),

  getPostComments: async (postId: number) =>
    await fetch(`${API_URL}/posts/${postId}/comments`).then((response) =>
      response.json()
    ),
}

export default postsService
