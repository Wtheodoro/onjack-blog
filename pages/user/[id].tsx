import type { NextPage } from 'next'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  useUsersDetailsDispatchContext,
  useUsersDetailsStateContext,
} from '../../context/postsCommentsReducer'
import usersService from '../../services/users-service'
import { IUsersDetails } from '../../types/users'

const UserDetail: NextPage = () => {
  const router = useRouter()

  const {
    query: { id },
  }: NextRouter = router

  const userDetailDispatch = useUsersDetailsDispatchContext()
  const { usersDetails } = useUsersDetailsStateContext()
  console.log(userDetailDispatch)

  useEffect(() => {
    // Verify if this detail is already on context API
    const isCurrentDetailStoraged = Boolean(
      usersDetails.find((el: IUsersDetails) => el.id === Number(id))
    )

    const fetchAndStoreDetail = async () => {
      const userDetailData = await usersService.getUserDetails(Number(id))

      userDetailDispatch({
        type: 'ADD_USER_DETAIL',
        payload: userDetailData,
      })
    }

    console.count('useEffect')
    if (!isCurrentDetailStoraged) fetchAndStoreDetail()
  }, [id, userDetailDispatch, usersDetails])

  return (
    <main>
      <p>DETAILs</p>
      <Link href='/home'>Back #</Link>
    </main>
  )
}

export default UserDetail
