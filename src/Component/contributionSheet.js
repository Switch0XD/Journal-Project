
import { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import '../Styles/contribution-sheet.css';





const Faculty = () => {
  const dataOne = useLocation();
  const [empId, setempId] = useState('');
  const [name, setname] = useState('');
  const [DOJ, setDOJ] = useState('');
  const [ContriList, setContriList] = useState('');
  const [YearOfContribution, setYearOfContribution] = useState('');
  const [TitleOfContribution, setTitleOfContribution] = useState('');
  const [DescriptionOfContribution, setDescriptionOfContribution] = useState('');
  const [ImpactFactorforPublication, setImpactFactorforPublication] = useState('');
  const [IndexOfPublication, setIndexOfPublication] = useState('');
  const [FundAmount, setFundAmount] = useState('');
  const [ContributionType, setContributionType] = useState('');
  const [PresentStatusofPatentsOnly, setPresentStatusofPatentsOnly] = useState('');
  const [ContributionUrl, setContributionUrl] = useState('');
  const [GrantLetterFile, setGrantLetterFile] = useState('');
  const Navigator = useNavigate();
  console.log(Navigator)


  useEffect(() => {
    if (!dataOne.state) {
      Navigator('/Publication');
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const { empId, fullName, scopusId, scopusUrl, webOfScienceId, wosUrl, googleScholar, orcid_id, vidwanId, researcherId } = dataOne.state
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('scopusId', scopusId);
    formData.append('scopusUrl', scopusUrl);
    formData.append('webOfScienceId', webOfScienceId);
    formData.append('wosUrl', wosUrl);
    formData.append('googleScholar', googleScholar);
    formData.append('orcid_id', orcid_id);
    formData.append('vidwanId', vidwanId);
    formData.append('researcherId', researcherId);
    formData.append('empId', empId);
    formData.append('name', name);
    formData.append('DOJ', DOJ);
    formData.append('ContriList', ContriList);
    formData.append('YearOfContribution', YearOfContribution);
    formData.append('TitleOfContribution', TitleOfContribution);
    formData.append('DescriptionOfContribution', DescriptionOfContribution);
    formData.append('ImpactFactorforPublication', ImpactFactorforPublication);
    formData.append('IndexOfPublication', IndexOfPublication);
    formData.append('FundAmount', FundAmount);
    formData.append('ContributionType', ContributionType);
    formData.append('PresentStatusofPatentsOnly', PresentStatusofPatentsOnly);
    formData.append('ContributionUrl', ContributionUrl);
    formData.append('GrantLetterFile', GrantLetterFile);



    const test = {
      empId: empId,
      name: name,
      dateOfJoining: DOJ,
      type: ContriList,
      year: YearOfContribution,
      title: TitleOfContribution,
      description: DescriptionOfContribution,
      impactFactor: ImpactFactorforPublication,
      indexing: IndexOfPublication,
      funded: FundAmount,
      role: ContributionType,
      patent: PresentStatusofPatentsOnly,
      url: ContributionUrl,
      file: GrantLetterFile
    }



    fetch('https://script.google.com/macros/s/AKfycbx1j47m7n7oUoDYHtF6lpyIq0zXzbG35BUXen5SND4vDBGo_p6vhafXiBvlj-aCGeA/exec', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));


    fetch('http://localhost:8060/publication', {
      // mode: 'cors',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataOne.state)

    })
      .then(response => response.json())
      .then(data =>
        fetch('http://localhost:8060/contribution', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(test)
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error))

      )
      .catch(error => console.error(error));


  }
  return (
    <div className="form-container" >
      <center> <h2>Faculty Contribution-Sheet</h2>  </center>
      <p class="instruction-fcs" align="left"><strong> Dear Professor</strong>,
        Please fill your Contribution details carefully.
        Don't submit incomplete information.
        If no Contributions/not applicable, mention NA.
        You can submit the forms multiple times for every Contribution.*
        Please submit the details of the contribution that bear the VIT Bhopal Affiliation.</p>


      <div className="form-container">
        <form onSubmit={handleSubmit} >
          <div className="form-group">

            <label htmlFor="Employee ID">1. Employee ID <span class="required">*</span>
              <input type="text" id="Employee ID" value={empId} name="Employee ID" onInput={(e) => setempId(e.target.value)} required /></label>

          </div>

          <div className="form-group">

            <label htmlFor="Employee Name">2. Employee Name <span class="required">*</span></label>
            <input type="text" id="Employee Name" value={name} name="Employee Name" onInput={(e) => setname(e.target.value)} required />
          </div>

          <div className="form-group">

            <label htmlFor="Date Of Joining">3. Date Of Joining <span class="required">*</span></label>
            <input type="date" id="Date Of Joining" value={DOJ} name="Date Of Joining" onInput={(e) => setDOJ(e.target.value)} required />
          </div>




          <div className="formgroup">
            <label htmlFor="Type of Contribution">4. Type of Contribution<span class="required">*</span>
              <div className="ContributionList">
                <select onChange={(e) => setContriList(e.target.value)} value={ContriList} name="Type of Contribution">
                  <option value="">Select of Type of Contribution</option>
                  <option value="Conference Paper">Conference Paper</option>
                  <option value="Journal Paper">Journal Paper</option>
                  <option value="Book">Book</option>
                  <option value="Book Chapter">Book Chapter</option>
                  <option value="Patent">Patent</option>
                  <option value="Awards and Recognition">Awards and Recognition</option>
                  <option value="Funded Project Grants">Funded Project Grants</option>
                  <option value="Funded Programme Grants">Funded Programme Grants</option>
                  <option value="Consultancy">Consultancy</option>
                </select> </div></label>



          </div>
          <div className="form-group">
            <label htmlFor="Year Of Contribution">5. Year Of Contribution<span class="required">*</span>
              <input type="number" value={YearOfContribution} placeholder="YYYY" min="2017" max="2100" onInput={(e) => setYearOfContribution(e.target.value)} required />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="Title of the Contribution">6. Title of the Contribution <span class="required">*</span>
              <input type="text" id="Title of the Contribution" value={TitleOfContribution} name="Title of the Contribution" onInput={(e) => setTitleOfContribution(e.target.value)} required /></label>
          </div>



          <div className="large-para">

            <label htmlFor="Description">7. Description of the Contribution (Name of the Journal/Conference, Vol No, Issue
              No for Conference & Journal Papers, ISBN and Publisher Name for Book and
              Book Chapters, Patent No for Patents, Name of the funding Agency for Funded
              Projects/ Funded Seminars / Consultancy, Name of Awarder for Awards &
              Recognition.) <span class="required">*</span>

              <input type="text" id="Description" value={DescriptionOfContribution} name="Description" onInput={(e) => setDescriptionOfContribution(e.target.value)} required /></label>
          </div>



          <div className="large-para">

            <label htmlFor=" Impact Factor for Publications">8. Impact Factor for Publications, If Applicable. Please use NA, if Not Applicable. <span class="required">*</span>
              <input type="text" id=" Impact Factor for Publications" value={ImpactFactorforPublication} name=" Impact Factor for Publications" onInput={(e) => setImpactFactorforPublication(e.target.value)} required /></label>
          </div>


          <div className="large-para">

            <label htmlFor="Indexing of the Publications">9.Indexing of the Publications (This is for Journal Publication, Conference
              Publication, Book and Book Chapter. Please use topmost indexing, if the
              publication indexed by more than one indexing) <span class="required">*</span>



              <div className="radio-contributionsheet" onChange={(e) => setIndexOfPublication(e.target.value)} >
                <label>SCI/SCIE/ESCI (MJR CLARIVATE ANALYTICS)
                  <input type="radio" value="SCI/SCIE/ESCI (MJR CLARIVATE ANALYTICS)" name="IndexOfPublication" /></label>
                <label>Scopus

                  <input type="radio" value="SCOPUS" name="IndexOfPublication" />
                </label>
                <label>Web of Science
                  <input type="radio" value="WOS" name="IndexOfPublication" /></label>
                <label>UGC Care
                  <input type="radio" value="UGC_Care" name="IndexOfPublication" /></label>
                <label>Non Indexed
                  <input type="radio" value="Non_Indexed" name="IndexOfPublication" /></label>
              </div>
            </label>
          </div>

          <div className="large-para">

            <label htmlFor=" Total Funded Amount">10. Total Funded Amount for Funded Projects/ Funded Seminars / Consultancy. For
              others, NA. <span class="required">*</span>

              <input type="text" id="Total Funded Amount " value={FundAmount} name="Total Funded Amount " onInput={(e) => setFundAmount(e.target.value)} required /> </label>
          </div>
          <div className="large-para">

            <label htmlFor="Role for Funded Projects">11. Role for Funded Projects/ Funded Seminars / Consultancy/Patents/Papers
              /Books. For others, please choose NA<span class="required">*</span>


              <div className="radio">
                <select onChange={(e) => setContributionType(e.target.value)} value={ContributionType} name="contributionType">
                  <option value="Project Investigator">Project Investigator</option>
                  <option value="Co-Project Investigator">Co-Project Investigator</option>
                  <option value="Coordinator">Coordinator</option>
                  <option value="Co-Coordinator">Co-Coordinator</option>
                  <option value="Applicant Only for Patents">Applicant Only for Patents</option>
                  <option value="Inventor Only for Patents">Inventor Only for Patents</option>
                  <option value="Applicant and Inventor for Patents">Applicant and Inventor for Patents</option>
                  <option value="First Author for Papers">First Author for Papers</option>
                  <option value="Second Author for Papers">Second Author for Papers</option>
                  <option value="Author for Books/Chapters">Author for Books/Chapters</option>
                  <option value="Co-Author for Books/Chapters">Co-Author for Books/Chapters</option>
                  <option value="NA">NA</option>
                </select>

              </div>
            </label>
          </div>


          <div className="large-para">

            <label>12. Present Status of Patents Only. For other, please choose NA.<span class="required">*</span>


              <div className="radio-contributionsheet" onChange={(e) => setPresentStatusofPatentsOnly(e.target.value)}>
                <label>Filed
                  <input type="radio" value="Filed" name="PresentStatusofPatentsOnly" /></label>
                <label> Published
                  <input type="radio" value="Published" name="PresentStatusofPatentsOnly" /></label>

                <label>Granted

                  <input type="radio" value="Granted" name="PresentStatusofPatentsOnly" /></label>
                <label>

                  <input type="radio" value="NA" name="PresentStatusofPatentsOnly" /></label>

              </div>
            </label>
          </div>

          <div className="large-para">

            <label htmlFor="  Share the link">13. Share the link for accessing your contribution online(Web URL for Papers,
              Patents, Awards, Books and Book Chapter. For other, please use NA.) <span class="required">*</span>

              <input type="text" id=" Share the link " value={ContributionUrl} name=" Share the link" onInput={(e) => setContributionUrl(e.target.value)} required /> </label>
          </div>




          <div className="large-para">

            <label htmlFor="Attach Official Grant Letter Copy for Funded Projects">14. Attach Official Grant Letter Copy for Funded Projects, Funded Seminars and
              Consultancy. Attach the full published paper in PDF for Papers. Attach PDF
              Version of Book/Book Chapters for Books/Chapters. Attach the Patent Receipt
              and Grant Letters for Patents. Attach the copy of awards for awards /
              recognition. (The file type should be PDF, max. size is 5 MB).<span class="required">*</span>
              <input type="file" id="Attach Official Grant Letter Copy for Funded Projects" value={GrantLetterFile} name="Attach Official Grant Letter Copy for Funded Projects" onInput={(e) => setGrantLetterFile(e.target.value)} /></label>
          </div>

          <center>
            <button type="submit">Submit</button>
          </center>
        </form>


      </div >

    </div >

  );
};

export default Faculty;