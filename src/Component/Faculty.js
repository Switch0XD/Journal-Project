import React from 'react'

const Faculty = () => {
  return (
    <div className="form-container">
      <center> <h3>Faculty Contribution-Sheet</h3>  </center>
      <p align="left">Dear Professor,</p>
      <p align="left">Please fill your Contribution details carefully. Don't submit incomplete information.</p>
      <p align="left">If no Contributions/not applicable, mention NA.</p>
      <p align="left">You can submit the forms multiple times for every Contribution.</p>
      <p align="left">Please submit the details of the contribution that bear the VIT Bhopal Affiliation.</p>
      <br />

      <div className="form-container">
        <form>
          <div className="form-group">

            <label htmlFor="Employee ID">1. Employee ID *</label>
            <input type="text" id="Employee ID" name="Employee ID" required />

          </div>

          <div className="form-group">
            <br />
            <label htmlFor="Employee Name">2. Employee Name *</label>
            <input type="text" id="Employee Name" name="Employee Name" required />
          </div>

          <div className="form-group">
            <br />
            <label htmlFor="Date Of Joining">3. Date Of Joining *</label>
            <input type="date" id="Date Of Joining" name="Date Of Joining" required />
          </div>
          <br />
          <br />


          <div className="form-group">
            <br />
            <label htmlFor="Type of Contribution">4. Type of Contribution*<br /></label>

            <br />
            <div className="ContributionList">
              <select name="Type of Contribution">
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


            </div>
          </div>
          <div className="form-group">
            <br />
            <label htmlFor="Year Of Contribution">5. Year Of Contribution*<br /></label>

            <br />
            <div className="radio">
              <select name="Year Of Contribution">
                <option value="">Select of Year</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>

            </div>
          </div>

          <div className="form-group">
            <br />
            <label htmlFor="Title of the Contribution">6. Title of the Contribution * </label>
            <input type="text" id="Title of the Contribution" name="Title of the Contribution" required />
          </div>
          <br />
          <br />

          <div className="form-group">
            <br />
            <label htmlFor="Description">7. Description of the Contribution (Name of the Journal/Conference, Vol No, Issue
              No for Conference & Journal Papers, ISBN and Publisher Name for Book and
              Book Chapters, Patent No for Patents, Name of the funding Agency for Funded
              Projects/ Funded Seminars / Consultancy, Name of Awarder for Awards &
              Recognition.) *
            </label>
            <input type="text" id="Description" name="Description" required />
          </div>
          <br />
          <br />

          <div className="form-group">
            <br />
            <label htmlFor=" Impact Factor for Publications">8. Impact Factor for Publications, If Applicable. Please use -1, if Not Applicable. *   </label>
            <input type="text" id=" Impact Factor for Publications" name=" Impact Factor for Publications" required />
          </div>
          <br />
          <br />
          <div className="form-group">
            <br />
            <label htmlFor="Indexing of the Publications">9.Indexing of the Publications (This is for Journal Publication, Conference
              Publication, Book and Book Chapter. Please use topmost indexing, if the
              publication indexed by more than one indexing) *
              <br /></label>

            <br />
            <div className="radio">
              <input type="radio" value="SCI/SCIE/ESCI (MJR CLARIVATE ANALYTICS)" name="Indexing of the Publications" />SCI/SCIE/ESCI (MJR CLARIVATE ANALYTICS)
              <br />
              <br />
              <input type="radio" value="SCOPUS" name="Indexing of the Publications" />SCOPUS
              <br />
              <br />
              <input type="radio" value="Web of Science" name="Indexing of the Publications" />Web of Science
              <br />
              <br />
              <input type="radio" value="UGC CARE" name="Indexing of the Publications" />UGC CARE
              <br />
              <br />
              <input type="radio" value="Non Indexed" name="Indexing of the Publications" />Non Indexed
              <br />
              <br />
            </div>
          </div>

          <div className="form-group">
            <br />
            <label htmlFor=" Total Funded Amount">10. Total Funded Amount for Funded Projects/ Funded Seminars / Consultancy. For
              others, please use -1. *
            </label>
            <input type="text" id="Total Funded Amount " name="Total Funded Amount " required />
          </div>
          <br />
          <br />

          <div className="form-group">
            <br />
            <label htmlFor="Role for Funded Projects">11. Role for Funded Projects/ Funded Seminars / Consultancy/Patents/Papers
              /Books. For others, please choose NA*<br /></label>

            <br />
            <div className="radio">
              <select name="contributionType">
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
          </div>


          <div className="form-group">
            <br />
            <label htmlFor="Present Status of Patents Only">12. Present Status of Patents Only. For other, please choose NA.*<br /></label>

            <br />
            <div className="radio">
              <input type="radio" value="Filed" name="Present Status of Patents Only" />Filed
              <br />
              <br />
              <input type="radio" value="Published" name="Present Status of Patents Only" />Published
              <br />
              <br />
              <input type="radio" value="Granted" name="Present Status of Patents Only" />Granted
              <br />
              <br />
              <input type="radio" value="NA" name="Present Status of Patents Only" />NA
              <br />
              <br />
            </div>
          </div>

          <div className="form-group">
            <br />
            <label htmlFor="  Share the link">13. Share the link for accessing your contribution online(Web URL for Papers,
              Patents, Awards, Books and Book Chapter. For other, please use NA.) *
            </label>
            <input type="text" id=" Share the link " name=" Share the link" required />
          </div>
          <br />
          <br />


          <div className="form-group">
            <br />
            <label htmlFor="Attach Official Grant Letter Copy for Funded Projects">14. Attach Official Grant Letter Copy for Funded Projects, Funded Seminars and
              Consultancy. Attach the full published paper in PDF for Papers. Attach PDF
              Version of Book/Book Chapters for Books/Chapters. Attach the Patent Receipt
              and Grant Letters for Patents. Attach the copy of awards for awards /
              recognition. (The file type should be PDF, max. size is10MB).*</label>
            <input type="file" id="Attach Official Grant Letter Copy for Funded Projects" name="Attach Official Grant Letter Copy for Funded Projects"></input>
          </div>
          <br />
          <br />

          <div className="form-group">
            <br />
            <label>
              <input type="checkbox" required />Send me an email receipt of my responses

            </label>
          </div>
          <br />
          <br />
          <input type="Submit" />
        </form>


      </div>

    </div>




  )
}

export default Faculty
