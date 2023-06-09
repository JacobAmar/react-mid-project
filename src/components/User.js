import React from 'react'
import { useState,useEffect } from 'react'
import { getFromDB } from '../utils/db'

const User = ({user}) => {
  const [Todos, setTodos] = useState([])
  const [Border, setBorder] = useState(null)
  const [ShowMoreData, setShowMoreData] = useState('none')
  
  useEffect(() => {
    const fetchTodos = async() => {
        let result = await getFromDB(`todos?userId=${user.id}`)
        setTodos(result)
    }
    fetchTodos()
  }, [])
  
  useEffect(() => {
    const getTasksStatus = () => {
        let result = Todos.filter( todo => todo.completed === false )
        // if theres no completed tasks then background is red, if the array is empty it means that everything is completed
        result.length === 0 ? setBorder('3px solid green') : setBorder('3px solid red')
    }
    getTasksStatus()
  }, [Todos])
  
  return (
    <div style={{ border: Border }}>
        ID: {user.id}
        <br/>
        Name: {user.name}
        <br/>
        Email: {user.email}
        <br/>
        <button onMouseOver={ () => setShowMoreData('block') } onMouseOut={ () => setShowMoreData('none') }>Other Data</button>
        <div style={{ display: ShowMoreData }}>
            Street: { user.address.street }
            <br/>
            City: {user.address.city}
            <br/>
            Zip Code: {user.address.zipcode}
        </div>
        <button>Update</button>
        <button>Delete</button>
    </div>
  )
}

export default User