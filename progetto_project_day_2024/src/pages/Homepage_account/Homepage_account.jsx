import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../Homepage_account/Homepage.css'
import Istitutes from '../../istitute.json'
import { Option_selction_address } from '../../Components/Account_insertion/Option_selection_address';
import { Option_selction_istitute } from '../../Components/Account_insertion/Option_selction_istitute';

export const Homepage_account = () => {
  return (
    <div id='Homepage-account'>
      <div className='center-space'>
        <div className='name-field-title'><h4>Nome</h4>
            <div className='name-field'>
              <form class="form-floating">
                <input type="name" class="form-control" id="floatingInput" placeholder="Nome" ></input>
                <label for="floatingInput"> Inserisci nome </label>
              </form>
            </div>
          </div>

          <div className='surname-field-title'>
            <h4>Cognome</h4>
            <div className='surname-field'>
              <form class="form-floating">
                <input type="name" class="form-control" id="floatingInput" placeholder="Cognome"></input>
                <label for="floatingInput"> Inserisci cognome </label>
              </form>
            </div>
          </div>

          <div className='istitute-selection-title'>
            <h4>Istituto</h4>
            <div className='istitute-selection'>
              <select class="form-select">
                <option selected>Seleziona la tua scuola</option>
                {Istitutes.map(istitute => (
                  <Option_selction_istitute
                    key={istitute.id}
                    istitute={istitute}
                  />
                ))}
              </select>
            </div>
          </div>

          <div className='class-selection-title'>
            <h5>Classe</h5>
            <div className='class-selection'>
            <select class="form-select">
              <option selected>Seleziona la tua classe</option>
              <option value="1">Prima</option>
              <option value="2">Seconda</option>
              <option value="3">Terza</option>
              <option value="4">Quarta</option>
              <option value="5">Quinta</option>
            </select>
            </div>
          </div>

          <div className='address-selection-title'>
            <h5>Indirizzo</h5>
            <div className='address-selection'>
            <select class="form-select" >
              <option selected>Seleziona il tuo indirizzo</option>
              {Istitutes.map(istitute => (
                  <Option_selction_address
                    key={istitute.id}
                    istitute={istitute}
                  />
                ))}
            </select>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Homepage_account;