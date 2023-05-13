import prisma from "../db.js"

export const createPublication = async (data) => {
  try {
    const publicationData = await prisma.publication.create({
      data: { ...data, vidwanId: +data.vidwanId, empId: +data.empId }
    })
    return publicationData
  } catch (error) {
    throw new Error(error)
  }
}

export const getPublication = async (id) => {
  const publicationData = await prisma.publication.findUnique({
    where: {
      id: id
    }
  })
  return publicationData
}

export const getAllPublications = async (id) => {
  const publicationData = await prisma.publication.findMany()
  return publicationData
}
