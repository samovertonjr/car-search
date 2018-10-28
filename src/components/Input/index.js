import React from 'react'

const Input = props => (
  <input
    className="block w-full shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-1 mb-4"
    type={props.type}
    name={props.name}
    onChange={props.handleChange}
    placeholder={props.labelName}
  />
)

export default Input
