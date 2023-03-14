import React, { useState } from 'react';
import './Styles/FacultyAwardsForm.css';

function FacultyAwardsForm() {
  const [formData, setFormData] = useState({
    achievementType: '',
    achievementLevel: '',
    awardDate: '',
    organizationType: '',
    organizationName: '',
    incentivesReceived: '',
    proof: ''
  });
  const [previousAwards, setPreviousAwards] = useState([]);

  const handleInputChange = (event) => {
    const { name, type, value, checked, files } = event.target;
    const inputValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setFormData({ ...formData, [name]: inputValue });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    setPreviousAwards([...previousAwards, formData]);
    setFormData({
      achievementType: '',
      achievementLevel: '',
      awardDate: '',
      organizationType: '',
      organizationName: '',
      incentivesReceived: '',
      proof: ''
    });
  };

  return (
    <center> <div className="form-container">
      <h3>Faculty Awards/Recognition/Fellowships</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="achievementType">Achievement Type</label>
          <select id="achievementType" name="achievementType" value={formData.achievementType} onChange={handleInputChange} required>
            <option value="">Select Achievement Type</option>
            <option value="Award">Award</option>
            <option value="Innovation">Innovation</option>
            <option value="Recognition">Recognition</option>
            <option value="Fellowship">Fellowship</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="achievementLevel">Achievement Level</label>
          <select id="achievementLevel" name="achievementLevel" value={formData.achievementLevel} onChange={handleInputChange} required>
            <option value="">Select Achievement Level</option>
            <option value="State">State</option>
            <option value="National">National</option>
            <option value="International">International</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="awardDate">Award Date</label>
          <input type="date" id="awardDate" name="awardDate" value={formData.awardDate} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="organizationType">Organization Type</label>
          <select id="organizationType" name="organizationType" value={formData.organizationType} onChange={handleInputChange} required>
            <option value="">Select Organization Type</option>
            <option value="Government">Government</option>
            <option value="Private">Private</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="organizationName">Organization Name</label>
          <input type="text" id="organizationName" name="organizationName" value={formData.organizationName} onChange={handleInputChange} required />
        </div>







        <div className="form-group">
          <label htmlFor="radio-button-group">Radio button group</label>
          <div id="radio-button-group">
            <label>
              <input type="radio" name="radioButtonGroup" value="Option 1" onChange={handleInputChange} checked={formData.radioButtonGroup === "Option 1"} /> Option 1
            </label>
            <label>
              <input type="radio" name="radioButtonGroup" value="Option 2" onChange={handleInputChange} checked={formData.radioButtonGroup === "Option 2"} /> Option 2
            </label>
          </div>
        </div>





        <br />




        <label>
          Proof:
          <input type="file" name="proof" onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>


      <table>
        <thead>
          <tr>
            <th>Achievement Type</th>
            <th>Achievement Level</th>
            <th>Award Date</th>
            <th>Organization Type</th>
            <th>Organization Name</th>
            <th>Incentives Received from VIT</th>
            <th>Proof</th>
          </tr>
        </thead>
        <tbody>
          {previousAwards.map((award, index) => (
            <tr key={index}>
              <td>{award.achievementType}</td>
              <td>{award.achievementLevel}</td>
              <td>{award.awardDate}</td>
              <td>{award.organizationType}</td>
              <td>{award.organizationName}</td>
              <td>{award.incentivesReceived ? 'Yes' : 'No'}</td>
              <td>{award.proof}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </center >
  );
}

export default FacultyAwardsForm;




















