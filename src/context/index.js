import React from 'react'

const Context = React.createContext()

const conbine = (provider, actions) => {
  return (items => {
    let actions = []
    Object.keys(items).map(key =>{
        actions[key] = items[key]
        for(let action in actions[key]){
            actions[key][action] = actions[key][action].bind(provider)
        }
    })
    return actions
  })(actions)
}

export class Provider extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.context.defaultState
    this.state.actions = conbine(this, props.context.actions)
  }

  render() {
    const { children } = this.props
    return (
      <Context.Provider value={this.state}>
          {children}
      </Context.Provider>

    )
  }
}

export default Context
