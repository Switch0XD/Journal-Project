import React from 'react';
import LoginPage from './Component/LoginPage';
import FacultyForm from './Component/FacultyAwardsForm';
import NavigationBar from './Component/navBar'
import Publicattion from './Component/Publicattion';
import ReactDOM from 'react-dom';
import Pub from './Component/Pub';
import Faculty from './Component/Faculty';



function App() {
  return (
    <div>
      <NavigationBar />
      {/* <LoginPage /> */}
      {/* <FacultyForm /> */}
      {/* <Pub/> */}
      <Faculty />
      {/* <Publicattion/> */}
    </div>
  );
}

export default App;
