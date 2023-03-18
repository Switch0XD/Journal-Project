import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import ContributionSheet from "./contributionSheet";
import '../Styles/publicationPage.css';
import { Form } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();
//   const handleSubmit = event => {
//     event.preventDefault();


//     navigate('/ContributionSheet');
//   };

const Publication = () => {
  return (
    <center> <div className="publication-container">
      <h2>Publication-Form</h2>


      <form action={'/ContributionSheet'}>


        <div className="publication-field">
          <label htmlFor="NameOfFaculty">Name Of Faculty<span class="required">*</span> </label>
          <input type="text" id="NameOfFaculty" name="NameOfFaculty" required />
        </div>
        <div className="publication-field">
          <label htmlFor="Scopus-ID">Scopus ID<span class="required"> *</span></label>
          <input type="text" id="Scopus-ID" name="Scopus-ID" />
        </div>
        <div className="publication-field">
          <label htmlFor="Scopus-Url">Scopus Url<span class="required"> *</span></label>
          <input type="text" id="Scopus-Url" name="Scopus-Url" />
        </div>
        <div className="publication-field">
          <label htmlFor="WOS-ID">WOS ID<span class="required"> *</span></label>
          <input type="text" id="WOS-ID" name="WOS-ID" />
        </div>
        <div className="publication-field">
          <label htmlFor="WOS-URL">WOS URL<span class="required"> *</span></label>
          <input type="text" id="WOS-URL" name="WOS-URL" />
        </div>
        <div className="publication-field">
          <label htmlFor="Google-Scholar">Google-Scholar<span class="required"> *</span></label>
          <input type="text" id="Google-Scholar" name="Google-Scholar" />
        </div>
        <div className="publication-field">
          <label htmlFor="ORCID-ID">ORCID-ID<span class="required"> *</span></label>
          <input type="text" id="ORCID-ID" name="ORCID-ID" />
        </div>
        <div className="publication-field">
          <label htmlFor="VIDWAN-ID">VIDWAN-ID<span class="required"> *</span></label>
          <input type="text" id="VIDWAN-ID" name="VIDWAN-ID" />
        </div>
        <div className="publication-field">
          <label htmlFor="Reserch-ID">Reserch-ID<span class="required"> *</span></label>
          <input type="text" id="Reserch-ID" name="Reserch-ID" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    </center >
  )
}

export default Publication;