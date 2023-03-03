// import React from "react";
// import "./components/Loginform"

// function Form() {
//   return (

//     <div className="Form">
//       <div className="AwardForm">
//         <form action="submit" method="post">
//           <label htmlFor="">Achievement Type</label>
//           <select name="AchievementType" id="AchievementType-select">
//             <option value="">--Please choose Achievement Type--</option>
//             {/* <option value="Award">Award</option> */}
//             <option value="Innovation Award">Innovation Award</option>
//             <option value="Recognition">Recognition</option>
//             <option value="Fellowship">Fellowship</option>
//           </select>

//           {/* Achievement level Dropdown list */}

//           <label htmlFor="">Achievement Level</label>
//           <select name="AchievementLevel" id="AchievementLevel-select">
//             <option value="">--Please choose Achievement Level--</option>
//             <option value="State">State</option>
//             <option value="National">National</option>
//             <option value="International">International</option>
//           </select><br />
//           {/* Calendar of Awards */}
//           <label htmlFor="">Award Date</label>

//           <input type="date" id="start" name="trip-start"
//             value=""
//             min="1800-01-01" /> <br />
//           {/* Organization type drop downlist */}
//           <label htmlFor="">Organization Type</label>
//           <select name="OrgType" id="OrgType-Select">
//             <option value="">--Please choose Organization Type--</option>
//             <option value="Government">Government</option>
//             <option value="Private">Private</option>
//           </select><br />
//           {/* Organization Name List */}
//           <label htmlFor="">Organization Name</label>
//           <input type="text" /><br />
//           {/* Radio btn for Recognition from VIT */}
//           <label htmlFor="">Have you received any incentive by VIT in recognition of the award</label>
//           <div className="RadioBtn1">
//             <input type="radio" id="YesForm" /><br />
//             <label className="YesRadioBtn">YES</label><br />
//           </div>
//           <div className="RadioBtn2"><input type="radio" id="NoForm" /><br />
//             <label className="NoRadioBtn">NO</label>
//           </div>


//           <br />
//           {/* Upload proof  */}
//           <label className="FileUpload">Awarded/Recognition/Fellowship Proof Upload</label>
//           <input type="file" />

//           {/* Submit Btn */}
//           <input type="button" value="👉Click here to Submit" />
//         </form>
//       </div>
//       <div className="AwardTable">
//         <label className="AwardTableHeading">FACULTY AWARDS/RECOGNITIONS/FELLOWSHIPS</label>
//         <table className="InnerTable">
//           <thead className="TableHead"><tr>
//             <th>#</th>
//             <th>Achievement Type</th>
//             <th>Achievement Level</th>
//             <th>Awarded Date</th>
//             <th>Organization Type</th>
//             <th>Organization Name</th>
//             <th>Any Incentives</th>
//             <th>Incentives Description</th>
//             <th>Action</th>
//           </tr></thead>
//           <td></td>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Form;












// import React, { useState } from "react";

// const AwardForm = () => {
//   const [award, setAward] = useState({
//     name: "",
//     category: "",
//     date: "",
//     proof: null
//   });
//   const [submittedAwards, setSubmittedAwards] = useState([]);

//   const handleChange = event => {
//     setAward({
//       ...award,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleFileChange = event => {
//     setAward({
//       ...award,
//       proof: event.target.files[0]
//     });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     setSubmittedAwards([...submittedAwards, award]);
//     setAward({
//       name: "",
//       category: "",
//       date: "",
//       proof: null
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={award.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="category">Category:</label>
//           <input
//             type="text"
//             name="category"
//             value={award.category}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="date">Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={award.date}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="proof">Proof (PDF only):</label>
//           <input
//             type="file"
//             accept="application/pdf"
//             name="proof"
//             onChange={handleFileChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Category</th>
//             <th>Date</th>
//             <th>Proof</th>
//           </tr>
//         </thead>
//         <tbody>
//           {submittedAwards.map((award, index) => (
//             <tr key={index}>
//               <td>{award.name}</td>
//               <td>{award.category}</td>
//               <td>{award.date}</td>
//               <td>{award.proof.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AwardForm;












// chatgpt one

// import React, { useState } from 'react';

// function Form() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [picture, setPicture] = useState(null);
//   const [tableData, setTableData] = useState([]);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   }

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   }

//   const handleMobileChange = (event) => {
//     setMobile(event.target.value);
//   }

//   const handlePictureChange = (event) => {
//     setPicture(URL.createObjectURL(event.target.files[0]));
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newTableData = [...tableData, { name, email, mobile, picture }];
//     setTableData(newTableData);
//     setName('');
//     setEmail('');
//     setMobile('');
//     setPicture(null);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" value={name} onChange={handleNameChange} required />
//         <br />
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={handleEmailChange} required />
//         <br />
//         <label htmlFor="mobile">Mobile:</label>
//         <input type="tel" id="mobile" value={mobile} onChange={handleMobileChange} required />
//         <br />
//         <label htmlFor="picture">Picture:</label>
//         <input type="file" id="picture" onChange={handlePictureChange} accept="image/*" />

//         <button type="submit">Submit</button>
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile</th>
//             <th>Picture</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((data, index) => (
//             <tr key={index}>
//               <td>{data.name}</td>
//               <td>{data.email}</td>
//               <td>{data.mobile}</td>
//               <td><img src={data.picture} alt="profile" width="50" height="50" /></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Form;


import React, { useState } from 'react';
import './FacultyAwardsForm.css'

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
    // <center><div>
    //   <form onSubmit={handleSubmit}>
    //     <label >
    //       Achievement Type:
    //       <input type="text" name="achievementType" value={formData.achievementType} onChange={handleInputChange} />
    //     </label>
    //     <br />
    //     <label>
    //       Achievement Level:
    //       <input type="text" name="achievementLevel" value={formData.achievementLevel} onChange={handleInputChange} />
    //     </label>
    //     <br />
    //     <label>
    //       Award Date:
    //       <input type="date" name="awardDate" value={formData.awardDate} onChange={handleInputChange} />
    //     </label>
    //     <br />
    //     <label>
    //       Organization Type:
    //       <input type="text" name="organizationType" value={formData.organizationType} onChange={handleInputChange} />
    //     </label>
    //     <br />
    //     <label>
    //       Organization Name:
    //       <input type="text" name="organizationName" value={formData.organizationName} onChange={handleInputChange} />
    //     </label>
    //     <br />
    //     <label>
    //       Incentives Received from VIT:
    //       <input type="text" name="incentivesReceived" value={formData.incentivesReceived} onChange={handleInputChange} />
    //     </label>






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


        {/* <label>
          Incentives Received from VIT:
          <input type="text" name="incentivesReceived" value={formData.incentivesReceived} onChange={handleInputChange} />
        </label> */}

        {/* <div className="form-group">
          <label htmlFor="incentivesReceived">Incentives Received from VIT</label>
          <div>
            <label>
              <input type="radio" name="incentivesReceived" value="true" checked={formData.incentivesReceived === true} onChange={handleInputChange} required />
              Yes
            </label>
            <label>
              <input type="radio" name="incentivesReceived" value="false" checked={formData.incentivesReceived === false} onChange={handleInputChange} />
              No
            </label>
          </div>
        </div> */}





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















// import React, { useState } from 'react';

// function FacultyAwardsForm() {
//   const [formData, setFormData] = useState({
//     achievementType: '',
//     achievementLevel: '',
//     awardDate: '',
//     organizationType: '',
//     organizationName: '',
//     incentivesReceived: false,
//     proof: null,
//   });

//   const handleInputChange = (event) => {
//     const { name, value, type, checked, files } = event.target;
//     const inputValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
//     setFormData({ ...formData, [name]: inputValue });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // TODO: Handle form submission
//   };

//   return (
//     <div className="form-container">
//       <h3>Faculty Awards/Recognition/Fellowships</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="achievementType">Achievement Type</label>
//           <select id="achievementType" name="achievementType" value={formData.achievementType} onChange={handleInputChange} required>
//             <option value="">Select Achievement Type</option>
//             <option value="Award">Award</option>
//             <option value="Innovation">Innovation</option>
//             <option value="Recognition">Recognition</option>
//             <option value="Fellowship">Fellowship</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="achievementLevel">Achievement Level</label>
//           <select id="achievementLevel" name="achievementLevel" value={formData.achievementLevel} onChange={handleInputChange} required>
//             <option value="">Select Achievement Level</option>
//             <option value="State">State</option>
//             <option value="National">National</option>
//             <option value="International">International</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="awardDate">Award Date</label>
//           <input type="date" id="awardDate" name="awardDate" value={formData.awardDate} onChange={handleInputChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="organizationType">Organization Type</label>
//           <select id="organizationType" name="organizationType" value={formData.organizationType} onChange={handleInputChange} required>
//             <option value="">Select Organization Type</option>
//             <option value="Government">Government</option>
//             <option value="Private">Private</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="organizationName">Organization Name</label>
//           <input type="text" id="organizationName" name="organizationName" value={formData.organizationName} onChange={handleInputChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="incentivesReceived">Incentives Received from VIT</label>
//           <div>
//             <label>
//               <input type="radio" name="incentivesReceived" value="true" checked={formData.incentivesReceived === true} onChange={handleInputChange} required />
//               Yes
//             </label>
//             <label>
//               <input type="radio" name="incentivesReceived" value="false" checked={formData.incentivesReceived === false} onChange={handleInputChange} />
//               No
//             </label>
//           </div>
//         </div>
//         <div className="form-group">




