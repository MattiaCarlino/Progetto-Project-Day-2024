import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export const Option_selction_address= (list_istitute) => {
  return (
    <option value={list_istitute.id}>{list_istitute.indirizzi}</option>
  )
}

export default Option_selction_address;