import React, {
  createContext,
  Dispatch,
  ReactElement,
  useContext,
  useReducer,
} from 'react'
import { IComments } from '../types/posts'

interface IUsersDetailsState {
  postsComments: IComments[]
}

const PostsCommentsStateContext = createContext({} as IUsersDetailsState)

const PostsDispatchContext = createContext({} as Dispatch<any>)

const postsCommentsReduce = (state: any, action: any) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_POST_COMMENTS':
      return {
        ...state,
        postsComments: state.postsComments.concat(payload),
      }
    default:
      return state
  }
}

export const PostsCommentsContextProvider = ({
  children,
}: {
  children: ReactElement
}) => {
  const [state, dispatch] = useReducer(postsCommentsReduce, {
    postsComments: [],
  })

  return (
    <PostsDispatchContext.Provider value={dispatch}>
      <PostsCommentsStateContext.Provider value={state}>
        {children}
      </PostsCommentsStateContext.Provider>
    </PostsDispatchContext.Provider>
  )
}

export const usePostsCommentsStateContext = () =>
  useContext(PostsCommentsStateContext)

export const usePostsCommentsDispatchContext = () =>
  useContext(PostsDispatchContext)
