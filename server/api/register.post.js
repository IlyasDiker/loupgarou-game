
import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {

  let body = await readBody(event);

  const prisma = new PrismaClient()

  return {
   body: body
  }
})