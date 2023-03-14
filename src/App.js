import React from 'react';
import LoginPage from './LoginPage';
import FacultyForm from './FacultyAwardsForm';
import NavigationBar from './navBar'
 import Publicattion from './Publicattion';
import ReactDOM from 'react-dom';
import Pub from './Pub';
import Faculty from './Faculty';



function App() {
  return (
    <div>
       <NavigationBar/>
      {/* <LoginPage /> */}
      {/* <FacultyForm /> */}
      {/* <Pub/> */}
      <Faculty/>
     {/* <Publicattion/> */}
    </div>
  );
}

export default App;
