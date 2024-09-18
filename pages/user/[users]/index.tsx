import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const useUser = () => ({ user: null });

const Index = () => {
    const router = useRouter();
    const user = useUser();
    useEffect(() => {
        if (user.user === null) {
            router.replace('/');
        }
    }, [router, user.user]);

    return (
        <>
            <h3>This is users {router.query.users} index page.</h3>
            {/* <button onClick={(e) => router.push(`${router.query.users}/setting`)}>Go to settings of users.</button> */}
            <button onClick={(e) => router.replace({
                pathname: '/user/[users]/setting',
                query: { users: router.query.users }
            })}>Go to settings of users.</button>
        </>
    )
}

export default Index
