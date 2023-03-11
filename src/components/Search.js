import React from 'react'

const Search = ({users,setUsers}) => {
  const filterUsers = (word) => {
    let result = users.filter( user => user.name.includes(word) || user.email.includes(word))
    setUsers(result)
  }
  return (
    <div>
        Search: <input type='text' onInput={ e => filterUsers(e.target.value)}/>
        <button>Add</button>
    </div>
  )
}

export default Search