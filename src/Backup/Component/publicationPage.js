/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/publicationPage.css';


const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
}


const initialState = {
  fullName: null,
  email: null,
  password: null,
  errors: {
    fullName: '',
    Scopus_ID: '',
    Scopus_Url: '',
    WOS_ID: '',
    WOS_Url: '',
    Google_Scholar: '',
    ORCHID_ID: '',
    VIDWAN_ID: '',
    Research_ID: '',
  }
}

const Publication = () => {

  const [fullName, setName] = useState('');
  const [Scopus_ID, setScopus_ID] = useState('');
  const [Scopus_Url, setScopus_Url] = useState('');

  const [WOS_ID, setWOS_ID] = useState('');
  const [WOS_Url, setWOS_Url] = useState('');
  const [Google_Scholar, setGoogle_Scholar] = useState('');
  const [ORCHID_ID, setORCHID_ID] = useState('');
  const [VIDWAN_ID, setVIDWAN_ID] = useState('');

  const [Research_ID, setResearch_ID] = useState('');

  const [user, setUser] = useState(initialState);
  const navigates = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('Scopus_ID', Scopus_ID);

    fetch('https://script.google.com/macros/s/AKfycbx1j47m7n7oUoDYHtF6lpyIq0zXzbG35BUXen5SND4vDBGo_p6vhafXiBvlj-aCGeA/exec', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };


  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = user.errors;

    switch (name) {
      case 'fullName':
        errors.fullName =
          value.length < 6
            ? 'Full Name must be at least 6 characters long!'
            : '';
        break;
      case 'Scopus_ID':
        errors.Scopus_ID =
          value.length < 3
            ? 'Scopus ID must be at least 4 characters long!'
            : '';
        break;
      case 'Scopus_Url':
        errors.Scopus_Url =
          (!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value))
            ? 'Please enter a valid URL!'
            : '';
        break;
      case 'WOS_ID':
        errors.WOS_ID =
          value.length < 3
            ? 'Scopus WOS_ID must be at least 4 characters long!'
            : '';
        break;
      case 'WOS_Url':
        errors.WOS_Url =
          (!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value))
            ? 'Please enter a valid URL!'
            : '';
        break;
      case 'Google_Scholar':
        errors.Google_Scholar = (!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value))
          ? 'Please enter a valid Url'
          : '';
        break;

      case 'ORCID_ID':
        errors.ORCHID_ID =
          value.length < 3
            ? 'ORCID_ID must be at least 4 characters long!'
            : '';
        break;
      case 'VIDWAN_ID':
        errors.VIDWAN_ID =
          value.length < 3
            ? 'VIDWAN_ID must be at least 4characters long!'
            : '';
        break;
      case 'Research_ID':
        errors.Research_ID =
          value.length < 3
            ? 'Research_ID must be at least 4characters long!'
            : '';
        break;


      default:
        break;
    }

    setUser({ errors, [name]: value });
  }
  const { errors } = user;
  return (
    <center><div className='publication-container'>
      <div className='publication-field'>
        <h2>Publication-Form</h2>
        <form method="POST"
          action="https://script.google.com/macros/s/AKfycbx1j47m7n7oUoDYHtF6lpyIq0zXzbG35BUXen5SND4vDBGo_p6vhafXiBvlj-aCGeA/exec">
          <div className='publication-field' >

            <label htmlFor="fullName">Name of the Faculty</label>
            <input type='text' name='fullName' value={fullName} onSubmit={e => setName(e.target.value)} onChange={handleChange} noValidate placeholder='Enter Full Name' required />
            {errors.fullName.length > 0 &&
              <span className='error'>{errors.fullName}</span>}
          </div>
          <div className='publication-field'>
            <label htmlFor="password">ScopusID</label>
            <input type='text' name='Scopus_ID' value={Scopus_ID} onChange={handleChange} noValidate required placeholder='7103138412' />
            {errors.Scopus_ID.length > 0 &&
              <span className='error'>{errors.Scopus_ID}</span>}
          </div>
          <div className='publication-field'>
            <label htmlFor="password">Scopus Url</label>
            <input type='text' name='Scopus_Url' onChange={handleChange} noValidate required placeholder='Profile Url' />
            {errors.Scopus_Url.length > 0 &&
              <span className='error'>{errors.Scopus_Url}</span>}
          </div>
          <div className='publication-field'>
            <label htmlFor="password">Web of Science ID (WoS ID)</label>
            <input type='text' name='WOS_ID' onChange={handleChange} noValidate required placeholder='P-1234-20XX' />
            {errors.WOS_ID.length > 0 &&
              <span className='error'>{errors.WOS_ID}</span>}
          </div>

          <div className='publication-field'>
            <label htmlFor="password">WOS Url</label>
            <input type='text' name='WOS_Url' onChange={handleChange} noValidate required placeholder='Profile Url' />
            {errors.WOS_Url.length > 0 &&
              <span className='error'>{errors.WOS_Url}</span>}
          </div>
          <div className='publication-field'>
            <label htmlFor="password">Google-Scholar Url</label>
            <input type='text' name='Google_Scholar' onChange={handleChange} noValidate required placeholder='Profile Url' />
            {errors.Google_Scholar.length > 0 &&
              <span className='error'>{errors.Google_Scholar}</span>}
          </div>
          <div className='publication-field'>
            <label htmlFor="password">ORCID-ID</label>
            <input type='text' name='ORCID_ID' onChange={handleChange} noValidate required placeholder='0000-0000-0000-0000' />
            {errors.ORCHID_ID.length > 0 &&
              <span className='error'>{errors.ORCHID_ID}</span>}
          </div>
          <div className='publication-field'>
            <label htmlFor="password">VIDWAN-ID</label>
            <input type='text' name='VIDWAN_ID' onChange={handleChange} noValidate required placeholder='123456' />
            {errors.VIDWAN_ID.length > 0 &&
              <span className='error'>{errors.VIDWAN_ID}</span>}
          </div>
          <div className='publication-field'>
            <label htmlFor="password">Researcher ID</label>
            <input type='text' name='Research_ID' onChange={handleChange} noValidate required placeholder='ABC-1234-20XX' />
            {errors.Research_ID.length > 0 &&
              <span className='error'>{errors.Research_ID}</span>}
          </div>

          <div className='submit'>
            <button onClick={() => navigates('/contributionSheet')} type='submit' >Submit</button>
          </div>
        </form>
      </div>
    </div>
    </center>
  );
}







export default Publication;