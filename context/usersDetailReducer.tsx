import React, {
  createContext,
  ReactElement,
  useContext,
  useReducer,
  useState,
} from 'react'

const UsersStateContext = createContext({})

const UsersDispatchContext = createContext({})

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
