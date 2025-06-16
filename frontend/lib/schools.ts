import { PadronResponse } from "@/types";
import queryString from "query-string";

export async function findSchoolsByName(schoolName: string): Promise<PadronResponse> {
  try {
    const url = queryString.stringifyUrl({
      url: `${process.env.BACKEND_URL}/padron`,
      query: {
        nombre: schoolName,
      },
    });

    const rq = await fetch(url);

    if (!rq.ok) {
      const error = await rq.json();
      throw new Error(
        error.message || "Error al obtener la escuela de procedencia"
      );
    }

    return await rq.json();
  } catch (e) {
    console.error(e);
    throw new Error("Fallo al obtener la escuela de procedencia");
  }
}
