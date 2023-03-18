import React from 'react';
import NavigationBar from './Component/navBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Publication from './Component/publicationPage';
import ContributionSheet from './Component/contributionSheet';





function App() {
  return (
    <Router>
      <div>
        <NavigationBar />

        <ContributionSheet />

        <Publication />
        {/* <Routes>
          <Route exact path='/ContributionSheet' element={< ContributionSheet />}></Route>
        </Routes> */}
      </div>
    </Router >
  );
}

export default App;
