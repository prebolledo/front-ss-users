import React, { Component } from 'react'
import './style.css'

function Page(props){
    const { users,remove } = props
    
    return (
        <div className="users">
            <h1>Users</h1>
            <ul>
                {
                    users.map( user => {
                        return (
                            <li key={user.id}>
                                <strong onClick={()=>{
                                    remove(user.id)
                                }}>{user.id}</strong> 
                                { user.name }
                            </li>
                        ) 
                    })
                }
            </ul>
        </div>        
    )
}

export default Page

