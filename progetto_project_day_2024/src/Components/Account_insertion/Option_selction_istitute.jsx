import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export const Option_selction_istitute = (list_istitute) => {
  const value = (list_istitute.id)
  const nomeInstituto = (list_istitute.istituto)
  return (
    <option value={value}>{nomeInstituto}</option>
  )
}

export default Option_selction_istitute;
