import React, { Component } from 'react'
import Context from '../context'
import Page from  './page'


class Users extends Component{

    constructor(props){
        super(props)
        this.remove = this.remove.bind(this)
    }

    componentDidMount(){
        this.context.actions.users.load()
        setInterval(() => {
            this.context.actions.users.load()
        },2000)
    }

    remove(id){
        console.log(id)
    }

    render(){
        const users = this.context.users    

        return (
            <Page users={users} remove = {this.remove} />
        )
    }
}

Users.contextType = Context

export default Users