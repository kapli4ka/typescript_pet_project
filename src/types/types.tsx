import React from 'react';



interface IUser {
    id: string;
    name: string;
    username: string;
    email: string;
    address: IAddress
    phone: string;
    website: string;
    company: ICompany
}
interface IAddress{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo:IGeo
}

interface IGeo {
    lat: string;
    lng: string;
}

interface ICompany{
    name: string;
    catchPhrase: string;
    bs: string;
}

export default IUser