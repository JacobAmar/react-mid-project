import React from 'react'
import Search from './Search'
import User from './User'
import { useState,useEffect } from 'react'
import { getFromDB } from '../utils/db'

const Users = () => {
  const [users, setUsers] = useState([])
  
  useEffect( () => {
    const fetchUsers = async () => {
        let result = await getFromDB('users')
        setUsers(result)
    }
    fetchUsers()
  },[])
  
  return (
    <>
    <Search/>
    <br/>
    {
        users.map( (item,index) => {
            return(
                <div key={index}>
                    <User key={index} user={item}/>
                    <br/>
                </div>
            )
        })
    }
    </>
  )
}

export default Users