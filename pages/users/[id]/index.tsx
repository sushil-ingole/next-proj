import React, { useEffect, useState } from 'react'
import { IUserDetail } from '../IUserDetail';
import { useRouter } from 'next/router';

const UserDetails = () => {
    const [user, setUser] = useState<IUserDetail | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    const val = router.query.value;
    console.log("val: ", val);
    useEffect(() => {
        async function fetchUserDetails() {
            console.log("router.query.id: ", router.query.id);
            const data = await fetch(`https://dummyjson.com/users/${router.query.id}`).then((val) => val.json());
            console.log("UserDetails: ", data);
            setUser(data);
            setLoading(false);
        }
        fetchUserDetails();
    }, []);
    if (!user) {
        return <>
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        </>
    }
    return (
        <>
            {loading ? (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            ) : (
                <div className="user-detail-container">
                    <div className="user-detail-header">
                        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
                        <h2>{user.firstName} {user.lastName}</h2>
                    </div>
                    <div className="user-detail-section">
                        <h3>Personal Information</h3>
                        <p>Maiden Name: {user.maidenName}</p>
                        <p>Age: {user.age}</p>
                        <p>Gender: {user.gender}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Username: {user.username}</p>
                        <p>Password: {user.password}</p>
                        <p>Birth Date: {user.birthDate}</p>
                        <p>Blood Group: {user.bloodGroup}</p>
                        <p>Height: {user.height} cm</p>
                        <p>Weight: {user.weight} kg</p>
                        <p>Eye Color: {user.eyeColor}</p>
                        <p>Hair: {user.hair.color}, {user.hair.type}</p>
                    </div>
                    <div className="user-detail-section user-detail-address">
                        <h3>Address</h3>
                        <p>{user.address.address}, {user.address.city}, {user.address.state}, {user.address.stateCode} {user.address.postalCode}</p>
                        <p>Country: {user.address.country}</p>
                        <p>Coordinates: {user.address.coordinates.lat}, {user.address.coordinates.lng}</p>
                    </div>
                    <div className="user-detail-section user-detail-bank">
                        <h3>Bank Information</h3>
                        <p>Card Expire: {user.bank.cardExpire}</p>
                        <p>Card Number: {user.bank.cardNumber}</p>
                        <p>Card Type: {user.bank.cardType}</p>
                        <p>Currency: {user.bank.currency}</p>
                        <p>IBAN: {user.bank.iban}</p>
                    </div>
                    <div className="user-detail-section user-detail-company">
                        <h3>Company Information</h3>
                        <p>Department: {user.company.department}</p>
                        <p>Company Name: {user.company.name}</p>
                        <p>Title: {user.company.title}</p>
                        <p>Address: {user.company.address.address}, {user.company.address.city}, {user.company.address.state}, {user.company.address.stateCode} {user.company.address.postalCode}</p>
                        <p>Country: {user.company.address.country}</p>
                        <p>Coordinates: {user.company.address.coordinates.lat}, {user.company.address.coordinates.lng}</p>
                    </div>
                    <div className="user-detail-section user-detail-crypto">
                        <h3>Crypto Information</h3>
                        <p>Coin: {user.crypto.coin}</p>
                        <p>Wallet: {user.crypto.wallet}</p>
                        <p>Network: {user.crypto.network}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default UserDetails;
