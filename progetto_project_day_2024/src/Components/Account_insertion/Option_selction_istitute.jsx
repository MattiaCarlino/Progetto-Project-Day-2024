import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export const Option_selction_istitute = (list_istitute) => {
  return (
    <option value={list_istitute.id}>{list_istitute.istituto}</option>
  )
}

export default Option_selction_istitute;
