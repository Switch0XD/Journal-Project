import React from 'react';
import './Styles/FacultyAwardsForm.css';

const Publicattion = () => {
  return (
    <center> <div className="form-container"></div>
      <h2>Publication-Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="NameOfFaculty">Name Of Faculty</label>
          <input type="text" id="NameOfFaculty" name="NameOfFaculty" />
        </div>
        <div className="form-group">
          <label htmlFor="Scopus-ID">Scopus ID</label>
          <input type="text" id="Scopus-ID" name="Scopus-ID" />
        </div>
        <div className="form-group">
          <label htmlFor="Scopus-Url">Scopus Url</label>
          <input type="text" id="Scopus-Url" name="Scopus-Url" />
        </div>
        <div className="form-group">
          <label htmlFor="WOS-ID">WOS ID</label>
          <input type="text" id="WOS-ID" name="WOS-ID" />
        </div>
        <div className="form-group">
          <label htmlFor="WOS-URL">WOS URL</label>
          <input type="text" id="WOS-URL" name="WOS-URL" />
        </div>
        <div className="form-group">
          <label htmlFor="Google-Scholar">Google-Scholar</label>
          <input type="text" id="Google-Scholar" name="Google-Scholar" />
        </div>
        <div className="form-group">
          <label htmlFor="ORCID-ID">ORCID-ID</label>
          <input type="text" id="ORCID-ID" name="ORCID-ID" />
        </div>
        <div className="form-group">
          <label htmlFor="VIDWAN-ID">VIDWAN-ID</label>
          <input type="text" id="VIDWAN-ID" name="VIDWAN-ID" />
        </div>
        <div className="form-group">
          <label htmlFor="Reserch-ID">Reserch-ID</label>
          <input type="text" id="Reserch-ID" name="Reserch-ID" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </center >
  )
}

export default Publicattion
