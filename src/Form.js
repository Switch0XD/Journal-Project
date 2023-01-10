import React from "react";
import "./components/Loginform"

function Form() {
  return (

    <div className="Form">
      <div className="AwardForm">
        <form action="submit" method="post">
          <label htmlFor="">Achievement Type</label>
          <select name="AchievementType" id="AchievementType-select">
            <option value="">--Please choose Achievement Type--</option>
            {/* <option value="Award">Award</option> */}
            <option value="Innovation Award">Innovation Award</option>
            <option value="Recognition">Recognition</option>
            <option value="Fellowship">Fellowship</option>
          </select>

          {/* Achievement level Dropdown list */}

          <label htmlFor="">Achievement Level</label>
          <select name="AchievementLevel" id="AchievementLevel-select">
            <option value="">--Please choose Achievement Level--</option>
            <option value="State">State</option>
            <option value="National">National</option>
            <option value="International">International</option>
          </select><br />
          {/* Calendar of Awards */}
          <label htmlFor="">Award Date</label>

          <input type="date" id="start" name="trip-start"
            value=""
            min="1800-01-01" /> <br />
          {/* Organization type drop downlist */}
          <label htmlFor="">Organization Type</label>
          <select name="OrgType" id="OrgType-Select">
            <option value="">--Please choose Organization Type--</option>
            <option value="Government">Government</option>
            <option value="Private">Private</option>
          </select><br />
          {/* Organization Name List */}
          <label htmlFor="">Organization Name</label>
          <input type="text" /><br />
          {/* Radio btn for Recognition from VIT */}
          <label htmlFor="">Have you received any incentive by VIT in recognition of the award</label>
          <div className="RadioBtn1">
            <input type="radio" id="YesForm" /><br />
            <label className="YesRadioBtn">YES</label><br />
          </div>
          <div className="RadioBtn2"><input type="radio" id="NoForm" /><br />
            <label className="NoRadioBtn">NO</label>
          </div>


          <br />
          {/* Upload proof  */}
          <label className="FileUpload">Awarded/Recognition/Fellowship Proof Upload</label>
          <input type="file" />

          {/* Submit Btn */}
          <input type="button" value="👉Click here to Submit" />
        </form>
      </div>
      <div className="AwardTable">
        <label className="AwardTableHeading">FACULTY AWARDS/RECOGNITIONS/FELLOWSHIPS</label>
        <table className="InnerTable">
          <thead className="TableHead"><tr>
            <th>#</th>
            <th>Achievement Type</th>
            <th>Achievement Level</th>
            <th>Awarded Date</th>
            <th>Organization Type</th>
            <th>Organization Name</th>
            <th>Any Incentives</th>
            <th>Incentives Description</th>
            <th>Action</th>
          </tr></thead>
          <td></td>
        </table>
      </div>
    </div>
  );
}

export default Form;