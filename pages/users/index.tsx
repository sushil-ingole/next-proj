import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    const [allUsers, setAllUsers] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        async function fetchUsers() {
            const data = await fetch('https://dummyjson.com/users').then((res) => res.json());
            console.log("val: ", data.users);
            setAllUsers(data.users);
            setLoading(false);
        }
        fetchUsers();
    }, []);

    return (
        <>
            {loading ? (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            ) : (
                <table className='all-users'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((user: any) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>
                                    <button onClick={() => {
                                        router.push({
                                            pathname: '/users/[id]',
                                            query: { id: user.id }
                                        });
                                    }}>
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default AllUsers;
