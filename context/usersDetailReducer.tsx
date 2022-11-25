import React, {
  createContext,
  Dispatch,
  ReactElement,
  useContext,
  useReducer,
} from 'react'
import { IUsersDetails } from '../types/users'

interface IUsersDetailsState {
  usersDetails: IUsersDetails[]
}

const UsersStateContext = createContext({} as IUsersDetailsState)

const UsersDispatchContext = createContext({} as Dispatch<any>)

const usersDetailsReducer = (state: any, action: any) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_USER_DETAIL':
      return {
        ...state,
        usersDetails: [...state.usersDetails, payload],
      }
    default:
      return state
  }
}

export const UsersDetailsContextProvider = ({
  children,
}: {
  children: ReactElement
}) => {
  const [state, dispatch] = useReducer(usersDetailsReducer, {
    usersDetails: [],
  })

  return (
    <UsersDispatchContext.Provider value={dispatch}>
      <UsersStateContext.Provider value={state}>
        {children}
      </UsersStateContext.Provider>
    </UsersDispatchContext.Provider>
  )
}

export const useUsersDetailsStateContext = () => useContext(UsersStateContext)

export const useUsersDetailsDispatchContext = () =>
  useContext(UsersDispatchContext)
