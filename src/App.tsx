import React, {useEffect, useState} from 'react';
import Types from "./types/types";
import Users from "./Users/Users";
import IUser from "./types/types";
import * as wasi from "wasi";
import axios from "axios";




const App = () => {
    const [users, setUsers] =useState<IUser[]>([])

    useEffect(() => {
        getOne()
    }, [])

    async function getOne(){
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        }catch (e) {
            alert(e)

        }finally {

        }
    }
    return (
        <Users users={users}/>
    );
};

export default App;