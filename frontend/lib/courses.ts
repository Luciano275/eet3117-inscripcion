import { db } from "./database/db";

export async function getAllCourses() {
  try {
    return await db.curso.findMany({
      orderBy: {
        curso: 'asc'
      }
    })
  }catch (e) {
    console.error(e);
    throw new Error('Algo salio mal al recuperar los cursos');
  }
}