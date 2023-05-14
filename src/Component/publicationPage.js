/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/publicationPage.css';


const initialState = {
  empId: null,
  name: null,
  email: null,
  password: null,
  errors: {
    empId: '',
    name: '',
    scopusId: '',
    scopusUrl: '',
    webOfScienceId: '',
    wosUrl: '',
    googleScholar: '',
    orcid_id: '',
    vidwanId: '',
    researcherId: '',
  }
}

const Publication = () => {
  const [empId, setempId] = useState('223311');
  const [name, setname] = useState('testing');
  const [scopusId, setscopusId] = useState('1234567811');
  const [scopusUrl, setscopusUrl] = useState('https://mlh.io');
  const [webOfScienceId, setwebOfScienceId] = useState('C12345678');
  const [wosUrl, setwosUrl] = useState('https://mlh.io');
  const [googleScholar, setgoogleScholar] = useState('https://mlh.io');
  const [orcid_id, setorcid_id] = useState('12345678922');
  const [vidwanId, setvidwanId] = useState('654321');
  const [researcherId, setresearcherId] = useState('12345098761');

  const [user, setUser] = useState(initialState);

  const navigates = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const test = { empId, name, scopusId, scopusUrl, webOfScienceId, wosUrl, googleScholar, orcid_id, vidwanId, researcherId }



    navigates('/contributionSheet', { state: test })
  };


  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = user.errors;

    switch (name) {
      case 'empId':
        errors.empId = value.length === 4 ? 'Please enter Employee ID ' : '';
        break;
      case 'name':
        errors.name =
          value.length < 6
            ? 'Please Enter valid name'
            : '';
        break;
      case 'scopusId':
        errors.scopusId =
          value.length === 10
            ? 'Please Enter valid Scopus ID'
            : '';
        break;
      case 'scopusUrl':
        errors.scopusUrl =
          (!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value))
            ? 'Please enter a valid URL!'
            : '';
        break;
      case 'webOfScienceId':
        errors.webOfScienceId =
          value.length === 9
            ? 'Please enter Web of Science ID'
            : '';
        break;
      case 'wosUrl':
        errors.wosUrl =
          (!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value))
            ? 'Please enter a valid URL!'
            : '';
        break;
      case 'googleScholar':
        errors.googleScholar = (!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value))
          ? 'Please enter a valid Url'
          : '';
        break;

      case 'orcid_id':
        errors.orcid_id =
          value.length === 12
            ? 'Please Enter valid ORCID ID'
            : '';
        break;
      case 'vidwanId':
        errors.vidwanId =
          value.length === 6
            ? 'Please Enter valid Vidwan ID'
            : '';
        break;
      case 'researcherId':
        errors.researcherId =
          value.length === 11
            ? 'Please Enter valid Researcher ID'
            : '';
        break;


      default:
        break;
    }

    setUser({ errors, [name]: value });
  }
  const { errors } = user;
  return (
    <div className='publication-container'>

      <h2 id='Heading'>Publication Form</h2>

      <form id='formm' onSubmit={handleSubmit}>
        <div className='publication-field' >
          <label htmlFor="Employee ID">Employee ID <span class="required">*</span></label>
          <input type="text" id="Employee ID" value={empId} name="Employee ID" onInput={(e) => setempId(e.target.value)} required />
        </div>



        <div className='publication-field' >
          <label>Name of the Faculty<span class="required">*</span></label>
          <input type="text" value={name} name='name' onInput={e => setname(e.target.value)} onChange={handleChange} noValidate placeholder='Enter Full Name' required />
          {errors.name.length > 0 &&
            <span className='error'>{errors.name}</span>} </div>



        <div className='publication-field'>
          <label>
            Scopus ID :  </label>
          <input type="text" value={scopusId} name='scopusId' onInput={e => setscopusId(e.target.value)} onChange={handleChange} noValidate required placeholder='7103138412' />
          {errors.scopusId.length > 0 &&
            <span className='error'>{errors.scopusId}</span>}

        </div>
        <div className='publication-field'>
          <label>
            Scopus Url:  </label>
          <input type="text" value={scopusUrl} name='scopusUrl' onInput={e => setscopusUrl(e.target.value)} onChange={handleChange} noValidate required placeholder='Profile Url' />
          {errors.scopusUrl.length > 0 &&
            <span className='error'>{errors.scopusUrl}</span>}

        </div>
        <div className='publication-field'>
          <label>
            Web of Science(WOS) ID :       </label>
          <input type="text" value={webOfScienceId} name='webOfScienceId' onInput={e => setwebOfScienceId(e.target.value)} onChange={handleChange} noValidate required placeholder='P-1234-20XX' />
          {errors.webOfScienceId.length > 0 &&
            <span className='error'>{errors.webOfScienceId}</span>}

        </div>

        <div className='publication-field'>
          <label>
            WOS Url :   </label>
          <input type="text" value={wosUrl} name='wosUrl' onInput={e => setwosUrl(e.target.value)} onChange={handleChange} noValidate required placeholder='Profile Url' />
          {errors.wosUrl.length > 0 &&
            <span className='error'>{errors.wosUrl}</span>}

        </div>
        <div className='publication-field'>
          <label>
            Google Scholar :      </label>
          <input type="text" value={googleScholar} name='googleScholar' onInput={e => setgoogleScholar(e.target.value)} onChange={handleChange} noValidate required placeholder='Profile Url' />
          {errors.googleScholar.length > 0 &&
            <span className='error'>{errors.googleScholar}</span>}

        </div>
        <div className='publication-field'>
          <label>
            ORCID ID :         </label>
          <input type="text" value={orcid_id} name='orcid_id' onInput={e => setorcid_id(e.target.value)} onChange={handleChange} noValidate required placeholder='0000-0000-0000-0000' />
          {errors.orcid_id.length > 0 &&
            <span className='error'>{errors.orcid_id}</span>}

        </div>
        <div className='publication-field'>
          <label>
            VIDWAN ID : </label>
          <input type="text" value={vidwanId} name='vidwanId' onInput={e => setvidwanId(e.target.value)} onChange={handleChange} noValidate required placeholder='123456' />
          {errors.vidwanId.length > 0 &&
            <span className='error'>{errors.vidwanId}</span>}

        </div>
        <div className='publication-field'>
          <label>
            Researcher ID :</label>
          <input type="text" name='researcherId' value={researcherId} onInput={e => setresearcherId(e.target.value)} onChange={handleChange} noValidate required placeholder='ABC-1234-20XX' />
          {errors.researcherId.length > 0 &&
            <span className='error'>{errors.researcherId}</span>}

        </div>

        <div id='submit'>
          <button type='submit' >Submit</button>
        </div>
      </form>
    </div>

  );
}






export default Publication;