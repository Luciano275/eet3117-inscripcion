'use client'

import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Input, Section, Select, Title } from "./form-utils";
import { FaUsers } from "react-icons/fa6";
import SearchSchool from "./search-school";
import { PadronResponse } from "@/types";

export default function Form (
  {schools}
  : {
    schools: PadronResponse | null;
  }
) {

  const [nacimiento, setNacimiento] = useState<string | null>(null);
  const [edad, setEdad] = useState<null | number>(null);

  useEffect(() => {
    if (nacimiento) {
      const difMilliseconds = new Date().getTime() - new Date(nacimiento).getTime();
      const millisecondsToYear = 1000 * 60 * 60 * 24 * 365.25;
      const calculatedEdad = Math.floor(difMilliseconds / millisecondsToYear);

      setEdad(calculatedEdad);
    }
  }, [nacimiento])

  return (
    <form className="flex flex-col gap-10">
      <Section>
        <Title text="Información Personal">
          <FaUser size={20} />
        </Title>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input type="text" name="nombre" label="Nombre" placeholder="ej. Marcos" />
          <Input type="text" name="apellido" label="Apellido" placeholder="ej. Arraya" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Input type="number" name="dni" label="DNI" placeholder="ej. 12456789" />
          <Input type="date" name="fechaNacimiento" label="Fecha de Nacimiento" onChange={(e) => setNacimiento(e.target.value)} />
          <Input disabled label="Edad" value={nacimiento && edad ? edad.toString() : ''} className="col-start-1 col-end-3 md:col-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Select name="genero" label="Género">
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </Select>
          <Input type="text" name="direccion" label="Domicilio Real" placeholder="ej. Mar Blanco 350" />
          <Input type="text" name="direccion" label="Domicilio Real" placeholder="ej. 387 123 1234" className="col-start-1 col-end-3 md:col-auto" />
        </div>

        <div>
          <Input type="email" name="correoEstudiante" label="Correo Electrónico del Estudiante" placeholder="ej. alumno@gmail.com" />
        </div>

        <div>
          {/* Escuela de procedencia */}
          <SearchSchool schools={schools} />
        </div>

      </Section>

      <Section>
        <Title text="Información del Tutor">
          <FaUsers size={20} />
        </Title>
      </Section>
    </form>
  )
}