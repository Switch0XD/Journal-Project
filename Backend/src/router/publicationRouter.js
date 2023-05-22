import { Router } from "express";
import { getAllPublications, getPublication, createPublication } from "../services/publication.js";

const publicationRouter = Router();

const publicationDataValidator = (req, res, next) => {
  const data = req.body;
  // console.log("msg", req);
  console.log("msg", req.body);
  if (!data.empId && data.empId.length === 6) {
    req.send({ error: "Please Enter Employee ID" })
    return
  }
  if (!data.name && data.name.length < 3) {
    req.send({ error: "Please Enter Name of the Faculty" })
    return
  }
  if (!data.scopusId && data.scopusId.length === 10) {
    req.send({ error: "Please Enter valid Scopus ID." })
    return
  }
  if (!data.scopusUrl && data.scopusUrl === (!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(data))) {
    req.send("Please Enter valid Scopus Url")
    return
  }
  if (!data.webOfScienceId && data.webOfScienceId.length === 9) {
    req.send({
      error: "Please Enter valid Web of Science ID"
    })
    return
  }
  if (!data.wosUrl && data.wosUrl === (!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(data))) {
    req.send({ error: "Please Enter valid Web of Science Url" })
    return
  }
  if (!data.googleScholar && data.googleScholar.length === (!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(data))) {
    req.send({
      error: "Please Enter valid Google Scholar Url"
    })
    return
  }
  if (data.orcid_id && data.orcid_id.length <= 10) {
    res.send({ error: "Please enter valid ORCID ID" })
    return
  }
  if (data.vidwanId && data.vidwanId.length <= 5) {
    res.send({ error: "Please enter valid Vidwan ID" })
    return
  }
  if (data.reseacherId && data.reseacherId.length === 11) {
    res.send({ error: "Please enter valid Researcher ID" })
  }
  next();

  // next(data)
}


// Get all publication data
publicationRouter.get("/publications", async (req, res) => {
  const publications = await getAllPublications();
  res.send({ data: publications })
})

// Get single publication data with publication id
publicationRouter.get("/publication/:id", async (req, res) => {
  const id = req.params.id
  const publication = await getPublication(id)
  res.send({ data: publication })
})




// Create publication data
publicationRouter.post("/publication", publicationDataValidator, async (req, res) => {
  const data = req.body;
  let publication;
  console.log('pass2', data);
  try {
    publication = await createPublication(data);
  } catch (error) {
    console.log(error);
    res.send({ error: "form is already submit" })
    return;
  }
  console.log('pass2deepo', publication);
  res.send({ data: publication })
})


export default publicationRouter