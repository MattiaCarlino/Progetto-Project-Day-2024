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
        <div className='field'>
          <form >
            <div className='name-field'>
              <label> Inserisci Nome </label>
              <input type='text' class= "form-control" placeholder='Nome'></input>
            </div>
            <div className='surname-field'>
              <label> Inserisci Cognome </label>
              <input type='text' class= "form-control" placeholder='Cognome'></input>
            </div>
            <div className='istitute-field'>
              <label>Scuola</label>
              <select class="form-select" name='istitute-field'>
                <option selected >Seleziona la tua scuola</option>  
                <option></option>
              </select>
            </div>
            <div className='class-field'>
              <label>Scuola</label>
              <select class="form-select">
                <option selected>Seleziona la tua classe</option>
                <option value="1">Prima</option>
                <option value="2">Seconda</option>
                <option value="3">Terza</option>
                <option value="4">Quarta</option>
                <option value="5">Quinta</option>
              </select>
            </div>
              <div className='save-button'>
                <div>
                  <button type="button" class="btn btn-primary"> Sign Up </button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Homepage_account;

/*
 <h5>Nome</h5>
            <div className='name-field'>
              <form class="form-floating">
                <input type="name" class="form-control" id="floatingInput" placeholder="Nome" ></input>
                <label for="floatingInput"> Inserisci nome </label>
              </form>
            </div>
          </div>

          <div className='field'>
            <h5>Cognome</h5>
            <div className='surname-field'>
              <form class="form-floating">
                <input type="name" class="form-control" id="floatingInput" placeholder="Cognome"></input>
                <label for="floatingInput"> Inserisci cognome </label>
              </form>
            </div>
          </div>

          <div className='field'>
            <h5>Istituto</h5>
            <div className='istitute-selection'>
              <select class="form-select" aria-label="select example">
                <option selected>Seleziona la tua scuola</option>
                {Istitutes.map(istitute => (
                  <Option_selction_istitute
                    list_istitute={istitute}
                    key = {istitute.id}
                  />
                ))}
              </select>
            </div>
          </div>

          <div className='field'>
            <h5>Classe</h5>
            <div className='class-selection'>
              <select class="form-select" aria-label="select example">
                <option selected>Seleziona la tua classe</option>
                <option value="1">Prima</option>
                <option value="2">Seconda</option>
                <option value="3">Terza</option>
                <option value="4">Quarta</option>
                <option value="5">Quinta</option>
              </select>
            </div>
          </div>

          <div className='field'>
            <h5>Indirizzo</h5>
            <div className='address-selection'>
              <select class="form-select" aria-label="select example" >
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

          <div className='save-button'>
            <div>
            <button type="button" class="btn btn-primary"> Sign Up </button>
            </div>
          </div>
*/

/*
<form >
            <div className='name-field'>
              <label> Inserisci Nome </label>
              <input type='text' class= "form-control" placeholder='Nome'></input>
            </div>
            <div className='surname-field'>
              <label> Inserisci Cognome </label>
              <input type='text' class= "form-control" placeholder='Cognome'></input>
            </div>
            <div className='istitute-field'>
              <label>Scuola</label>
              <select class="form-select" name='istitute-field'>
                <option selected >Seleziona la tua scuola</option>  
                <option></option>
              </select>

            </div>

*/