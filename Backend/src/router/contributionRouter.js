import { Router } from "express";
import { createContribution, getContribution, getAllContribution } from '../services/contribution.js'

const contributionRouter = Router();

// TODO: add publication data validation
// contributionRouter.use()

const contributionValidator = (req, res, next) => {
  const data = req.body;
  console.log("message", req.body);
  if (!data.empId && data.empId.length === 10) {
    req.send({ error: "Please Enter Employee ID" })
    return
  }
  if (!data.name && data.name.length < 3) {
    req.send({ error: "Please Enter Name of the Faculty" })
    return
  }
  if (!data.dateOfJoining) {
    req.send({ error: "Please enter valid date" })
    return
  }
  if (!data.type) {
    req.send({ error: "Please enter select Type of Contribution " })
    return
  } if (!data.year && data.year.length === 4) {
    req.send({ error: "Please enter valid year" })
    return
  }
  if (!data.title) {
    req.send({ error: "Please enter Title of the Contribution" })
    return
  }
  if (!data.description) {
    req.send({ error: "Please enter the description of contribution or publication " })
    return
  }
  if (!data.impactFactor) {
    req.send({ error: "Please enter the impact factor for publication" })
    return
  }
  if (!data.indexing) {
    req.send({ error: "Please select Publication indexing" })
    return
  }
  if (!data.funded) {
    req.send({ error: "Please enter total funded amount" })
    return
  }
  if (!data.role) {
    req.send({ error: "Please enter your role in Funded Projects/ Funded Seminars / Consultancy/Patents/Papers /Books" })
    return
  }
  if (!data.patent) {
    req.send({ error: "Please select Patent status" })

    return
  }
  if (!data.patent) {
    req.send({ error: "Please enter the valid url" })
    return
  }
  if (!data.file) {
    req.send({ error: "Please upload a valid pdf file of less then 5MB" })
    return
  }
  next();

}

// Get all publication data
contributionRouter.get("/contributions", async (req, res) => {
  // Todo: Check Permission
  // Get all data
  const contribution = await getAllContribution();
  res.send({ data: contribution })
})

// Get single publication data with publication id
contributionRouter.get("/contribution/:id", async (req, res) => {
  // Todo: Check Permission
  // search publication data in db
  const id = req.params.id
  const contribution = await getContribution(id)
  res.send({ data: contribution })
})

// Create publication data
// TODO: Change route name
contributionRouter.post("/contribution", contributionValidator, async (req, res) => {
  const data = req.body;
  let contribution;
  contribution = await createContribution(data);
  // TODO: Validate if user is already submited data
  // TODO: save user Data in db
  res.send({ data: contribution })
})


export default contributionRouter