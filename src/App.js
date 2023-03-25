import React from 'react';
import NavigationBar from './Component/navBar';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Publication from './Component/publicationPage';
import ContributionSheet from './Component/contributionSheet';





function App() {
  return (
    <Router>
      <div>
        <NavigationBar />

       

        <Publication />
         {/* <ContributionSheet /> */}
         <Routes>
          <Route exact path='/ContributionSheet' element={< ContributionSheet />}></Route>
        </Routes> 
      </div>
    </Router >
  );
}

export default App;
