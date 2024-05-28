import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../Homepage_account/Homepage.css'
import { useState } from 'react';

export const Homepage_account = () => {

  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');

  const saveData = () => {
    localStorage.setItem('nome', nome);
    localStorage.setItem('cognome', cognome);

    const elementIstituto = document.getElementById('istituto');
    const istituto = elementIstituto.options[elementIstituto.selectedIndex].value;
    localStorage.setItem('istituto', istituto);

    const elementClasse = document.getElementById('classe');
    const classe = elementClasse.options[elementClasse.selectedIndex].value;
    localStorage.setItem('classe', classe);
    //manca l'input validation che farò
  }

  return (
    <div id='Homepage-account'>
      <div className='center-space'>
        <div>
          <form >
            <div className='title-field'><h5> Nome </h5></div>
            <div className='field' class="form-floating mb-3">
              <input type='text' class="form-control" id="floatingInput" placeholder='Nome' onChange={(e)=>setNome(e.target.value)}></input>
              <label for="floatingInput"> Inserisci Nome </label>
            </div>
            <div className='title-field'><h5> Cognome </h5></div>
            <div className='field' class="form-floating mb-3">
              <input type='text' class="form-control" id="floatingInput" placeholder='Cognome' onChange={(e)=>setCognome(e.target.value)}></input>
              <label for="floatingInput"> Inserisci Cognome </label>
            </div>
            <div className='field'>
              <h5> Scuola </h5>
              <select class="form-select" name='istitute-field' id='istituto'>
                  <option value='null' selected>Seleziona la tua scuola</option>
                  <hr />
                  <option value="liceo classico">Liceo Classico</option>
                  <hr />
                  <option value="liceo linguistico">Liceo Linguistico</option>
                  <hr />
                  <optgroup label='Liceo Scientifico'>
                    <option value="liceo scientifico">Liceo Scientifico tradizionale</option>
                    <option value="liceo scientifico, scienze applicate">Liceo Scientifico scienze applicate</option>
                    <option value="liceo scientifico, sezione sportiva">Liceo Scientifico sportivo</option>
                  </optgroup>
                  <hr />
                  <optgroup label='Liceo delle scienze umane'>
                    <option value="liceo delle scienze umane">Liceo delle scienze umane</option>
                    <option value="liceo delle scienze umane, economico sociale">Liceo delle scienze umane, economico sociale</option>
                  </optgroup>
                  <hr />
                  <optgroup label='Liceo artistico'>
                    <option value="liceo artistico, arti figurative">Indirizzo Arti Figurative</option>
                    <option value="liceo artistico, architettura e ambiente">Indirizzo Architettura e Ambiente</option>
                    <option value="liceo artistico, audiovisivo e multimediale">Indirizzo Audiovisivo e Multimediale</option>
                    <option value="liceo artistico, design">Indirizzo Design</option>
                    <option value="liceo artistico, grafica">Indirizzo Grafica</option>
                    <option value="liceo artistico, scenografia">Indirizzo Scenografia</option>
                  </optgroup>
                  <hr />
                  <optgroup label='Liceo musicale e coreutico'>
                    <option value="liceo musicale e coreutico, musicale">Indirizzo Musicale</option>
                    <option value="liceo musicale e coreutico, coreutico">Indirizzo Coreutico</option>
                  </optgroup>
                  <hr />
                  <optgroup label='Istituto tecnico economico'>
                    <option value="istituto tecnico economico, amministrazione, finanza e marketing">Amministrazione, Finanza e Marketing</option>
                    <option value="istituto tecnico economico, sistemi informativi aziendali">Sistemi Informativi Aziendali</option>
                    <option value="istituto tecnico economico, relazioni internazionali per il marketing">Relazioni Internazionali per il Marketing</option>
                    <option value="istituto tecnico economico, turismo">Turismo</option>
                  </optgroup>
                  <hr />
                  <optgroup label='Istituto tecnico tecnologico'>
                    <option value="istituto tecnico tecnologico, meccanica, meccatronica ed energia">Meccanica, Meccatronica ed Energia</option>
                    <option value="istituto tecnico tecnologico, trasporti e logistica">Trasporti e Logistica</option>
                    <option value="istituto tecnico tecnologico, elettronica ed elettrotecnica">Elettronica ed Elettrotecnica</option>
                    <option value="istituto tecnico tecnologico, informatica e telecomunicazioni">Informatica e Telecomunicazioni</option>
                    <option value="istituto tecnico tecnologico, grafica e comunicazione">Grafica e Comunicazione</option>
                    <option value="istituto tecnico tecnologico, chimica, materiali e biotecnologie">Chimica, Materiali e Biotecnologie</option>
                    <option value="istituto tecnico tecnologico, sistema moda">Sistema Moda</option>
                    <option value="istituto tecnico tecnologico, agraria, agroalimentare e agroindustria">Agraria, Agroalimentare e Agroindustria</option>
                    <option value="istituto tecnico tecnologico, costruzioni, ambiente e territorio">Costruzioni, Ambiente e Territorio</option>
                  </optgroup>
                  <hr />
                  <optgroup label='Istituto professionale per i servizi'>
                    <option value="istituto professionale per i servizi, servizi per l'agricoltura, lo sviluppo rurale e la selvicoltura">Servizi per l'Agricoltura, lo Sviluppo Rurale e la Selvicoltura</option>
                    <option value="istituto professionale per i servizi, servizi socio-sanitari">Servizi Socio-Sanitari</option>
                    <option value="istituto professionale per i servizi, servizi per l'enogastronomia e l'ospitalità alberghiera">Servizi per l'Enogastronomia e l'Ospitalità Alberghiera</option>
                    <option value="istituto professionale per i servizi, servizi commerciali">Servizi Commerciali</option>
                    <option value="istituto professionale per i servizi, servizi per la sanità e l'assistenza sociale">Servizi per la Sanità e l'Assistenza Sociale</option>
                  </optgroup>
                  <hr />
                  <optgroup label=" Istituto professionale per lindustria e l artigianato">
                    <option value="istituto professionale per l'industria e l'artigianato, manutenzione e assistenza tecnica">Manutenzione e Assistenza Tecnica</option>
                    <option value="istituto professionale per l'industria e l'artigianato, industria e artigianato per il made in italy">Industria e Artigianato per il Made in Italy</option>
                    <option value="istituto professionale per l'industria e l'artigianato, arti ausiliarie delle professioni sanitarie: odontotecnico">Arti Ausiliarie delle Professioni Sanitarie: Odontotecnico</option>
                    <option value="istituto professionale per l'industria e l'artigianato, arti ausiliarie delle professioni sanitarie: ottico">Arti Ausiliarie delle Professioni Sanitarie: Ottico</option>
                  </optgroup>
                </select>
            </div>
            <div className='field'>
              <label>Scuola</label>
              <select class="form-select" id='classe'>
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
                  <button type="button" class="btn btn-primary" onClick={saveData}> Sign Up </button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Homepage_account;