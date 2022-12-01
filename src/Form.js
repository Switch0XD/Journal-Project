import React  from "react";  
import "./components/Loginform"

function Form(){
    return(
        <div className="cover">
        <div className="Form_container" >
        <h2 >Faculty Awards/Recognitations/Fellowships</h2>
        </div>
        <br></br><br></br>
        <form>
        <div>
        <div>
        <label className="Ach">Achivement Type
        </label>
        <select className="Achivement">
  <option value="Achivement 1">Achivement 1</option>
  <option value="Achivement 2">Achivement 2</option>
  <option value="Achivement 3">Achivement 3</option>
  <option value="Achivement 4">Achivement 4</option>
    </select>
    </div>
   <br/>
   <br/>

    <div>
    <label>Achivement Level
        </label>
     <select>
  <option value="Achivement Level 1">Achivement Level 1</option>
  <option value="Achivement Level 2">Achivement Level 2</option>
  <option value="Achivement Level 3">Achivement Level 3</option>
  <option value="Achivement Level 4">Achivement Level 4</option>
    </select>
    </div>
    </div>
    <br/>
   <br/>

    <label>Organization Type
        </label>
     <select>
  <option value="Organization Type 1">Organization Type 1</option>
  <option value="Organization Type 2">Organization Type 2</option>
  <option value="Organization Type 3">Organization Type 3</option>
  <option value="Organization Type 4">Organization Type 4</option>
    </select>
    <div>
    <br/>
    <br/>
    <label>Organization Name
    </label>
    <input type="text" ></input>
   </div>
        </form>
        </div>
    );
}

export default Form;