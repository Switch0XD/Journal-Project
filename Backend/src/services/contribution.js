import prisma from "../db.js"

export const createContribution = async (data) => {
  try {
    const contributionData = await prisma.contributionSheet.create({
      data: { ...data, dateOfJoining: new Date(data.dateOfJoining), empId: +data.empId, year: +data.year }

    })
    return contributionData
  } catch (error) {
    throw new Error(error)
  }
}

export const getContribution = async (id) => {
  const contributionData = await prisma.contributionSheet.findUnique({
    where: {
      id: id
    }
  })
  return contributionData
}

export const getAllContribution = async (id) => {
  const ContributionData = await prisma.contributionSheet.findMany()
  return ContributionData
}