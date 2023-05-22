
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


    alert('Thank You,\nYour Data has been recorded,\nPlease close the tab.');
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
      <center> <h2 className='heading-sheet'>Faculty Contribution Sheet</h2>  </center>
      <p class="instruction-fcs" align="left"><strong> Dear Professor</strong>,<br /> <br />
        Please fill your Contribution details carefully.
        <br />
        If no Contributions/not applicable, mention NA. <br />
        You can submit the forms multiple times for every Contribution.* <br />
        Please submit the details of the contribution that bear the VIT Bhopal Affiliation.</p>

      <form onSubmit={handleSubmit} >

        <label id='contribution-label'> <strong>1 .</strong>  Employee ID <span class="required">*</span></label>
        <input type="text" id="Employee ID" sheet-input value={empId} name="Employee ID" onInput={(e) => setempId(e.target.value)} required />




        <label id='contribution-label' htmlFor="Employee Name"> <strong>2 .</strong>  Employee Name <span class="required">*</span></label>
        <input type="text" id="Employee Name" value={name} name="Employee Name" onInput={(e) => setname(e.target.value)} required />




        <label id='contribution-label' htmlFor="Date Of Joining"> <strong>3 .</strong>  Date Of Joining <span class="required">*</span></label>
        <input type="date" id="Date Of Joining" value={DOJ} name="Date Of Joining" onInput={(e) => setDOJ(e.target.value)} required />






        <label id='contribution-label' htmlFor="Type of Contribution"> <strong>4 .</strong> Type of Contribution<span class="required">*</span> </label>

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
        </select>





        <label id='contribution-label' htmlFor="Year Of Contribution"> <strong>5 .</strong> Year Of Contribution<span class="required">*</span></label>
        <input type="number" value={YearOfContribution} placeholder="YYYY" min="2017" max="2100" onInput={(e) => setYearOfContribution(e.target.value)} required />




        <label id='contribution-label' htmlFor="Title of the Contribution"> <strong>6 .</strong> Title of the Contribution <span class="required">*</span></label>
        <input type="text" className='sheet-input' id="Title of the Contribution" value={TitleOfContribution} name="Title of the Contribution" onInput={(e) => setTitleOfContribution(e.target.value)} required />




        <label id='contribution-label' htmlFor="Description"> <strong>7 .</strong> Description of the Contribution (Name of the Journal/Conference, Vol No, Issue
          No for Conference & Journal Papers, ISBN and Publisher Name for Book and
          Book Chapters, Patent No for Patents, Name of the funding Agency for Funded
          Projects/ Funded Seminars / Consultancy, Name of Awarder for Awards &
          Recognition.) <span class="required">*</span></label>

        <input type="text" id="Description" value={DescriptionOfContribution} name="Description" onInput={(e) => setDescriptionOfContribution(e.target.value)} required />




        <label id='contribution-label' htmlFor=" Impact Factor for Publications"> <strong>8 .</strong>  Impact Factor for Publications, If Applicable. Please use NA, if Not Applicable. <span class="required">*</span></label>
        <input type="text" id=" Impact Factor for Publications" value={ImpactFactorforPublication} name=" Impact Factor for Publications" onInput={(e) => setImpactFactorforPublication(e.target.value)} required />



        <label id='contribution-label' htmlFor="Indexing of the Publications"> <strong>9 .</strong> Indexing of the Publications (This is for Journal Publication, Conference
          Publication, Book and Book Chapter. Please use topmost indexing, if the
          publication indexed by more than one indexing) <span class="required">*</span></label>



        <div className="radio-contributionsheet" onChange={(e) => setIndexOfPublication(e.target.value)} >
          <label id='radio9label' >SCI/SCIE/ESCI (MJR CLARIVATE ANALYTICS)</label>
          <input type="radio" value="SCI/SCIE/ESCI (MJR CLARIVATE ANALYTICS)" name="IndexOfPublication" />
          <label id='radio9label' >Scopus</label>

          <input type="radio" value="SCOPUS" name="IndexOfPublication" />

          <label id='radio9label' >Web of Science</label>
          <input type="radio" value="WOS" name="IndexOfPublication" />
          <label id='radio9label' >UGC Care</label>
          <input type="radio" value="UGC_Care" name="IndexOfPublication" />
          <label id='radio9label' >Non Indexed</label>
          <input type="radio" value="Non_Indexed" name="IndexOfPublication" />
        </div>




        <label id='contribution-label' htmlFor=" Total Funded Amount"> <strong>10 .</strong>  Total Funded Amount for Funded Projects/ Funded Seminars / Consultancy. For
          others, NA. <span class="required">*</span></label>

        <input type="text" id="Total Funded Amount " value={FundAmount} name="Total Funded Amount " onInput={(e) => setFundAmount(e.target.value)} required />


        <label id='contribution-label' htmlFor="Role for Funded Projects"> <strong>11 .</strong> Role for Funded Projects/Funded Seminars/Consultancy/Patents/Papers
          /Books. For others,NA<span class="required">*</span></label>


        <div className="dropdown">
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






        <label id='contribution-label' > <strong>12 .</strong> Present Status of Patents Only. For other, please choose NA.<span class="required">*</span></label>


        <div className="radio-contributionsheet" onChange={(e) => setPresentStatusofPatentsOnly(e.target.value)}>
          <label id='radio12label' >Filed</label>
          <input type="radio" value="Filed" name="PresentStatusofPatentsOnly" />
          <label id='radio12label' > Published</label>
          <input type="radio" value="Published" name="PresentStatusofPatentsOnly" />
          <label id='radio12label' >Granted</label>

          <input type="radio" value="Granted" name="PresentStatusofPatentsOnly" />
          <label id='radio12label' >
            NA</label>
          <input type="radio" value="NA" name="PresentStatusofPatentsOnly" />
        </div>



        <label id='contribution-label' htmlFor="  Share the link"> <strong>13 .</strong> Share the link for accessing your contribution online(Web URL for Papers,
          Patents, Awards, Books and Book Chapter. For other, please use NA.) <span class="required">*</span></label>

        <input type="text" id=" Share the link " value={ContributionUrl} name=" Share the link" onInput={(e) => setContributionUrl(e.target.value)} required />







        <label id='contribution-label' htmlFor="Attach Official Grant Letter Copy for Funded Projects"><strong>14.</strong> Attach Official Grant Letter Copy for Funded Projects, Funded Seminars and
          Consultancy. Attach the full published paper in PDF for Papers. Attach PDF
          Version of Book/Book Chapters for Books/Chapters. Attach the Patent Receipt
          and Grant Letters for Patents. Attach the copy of awards for awards /
          recognition. (The file type should be PDF, max. size is 5 MB).<span class="required">*</span></label>
        <input type="file" id="Attach Official Grant Letter Copy for Funded Projects" value={GrantLetterFile} name="Attach Official Grant Letter Copy for Funded Projects" onInput={(e) => setGrantLetterFile(e.target.value)} />


        <div className='bottom-btn'>  <center>
          <button type="submit" onSubmit >Submit</button>
        </center></div>
      </form >
    </div>




  );
};

export default Faculty;