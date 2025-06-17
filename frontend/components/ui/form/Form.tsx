'use client'

import { ContainerInput, Input, Label, Radio, Section, Select, Title } from "./form-utils";
import SearchSchool from "./search-school";
import BelongSchool from "./belong-school";
import { useBelong } from "@/components/providers/belong-provider";
import { PadronResponse } from "@/types";

import { Curso } from "@prisma/client";
import { useEffect, useState } from "react";
import { FaSchool, FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { format } from "date-fns";

export default function Form (
  {schools, courses}
  : {
    schools: PadronResponse | null;
    courses: Curso[]
  }
) {

  const [nacimiento, setNacimiento] = useState<string | null>(null);
  const [edad, setEdad] = useState<null | number>(null);

  const { isBelong } = useBelong();

  useEffect(() => {
    console.log(nacimiento)
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Input type="text" name="nombre" label="Nombre" placeholder="ej. Marcos" />
          <Input type="text" name="apellido" label="Apellido" placeholder="ej. Arraya" />
          <Input type="number" name="dni" label="DNI" placeholder="ej. 12456789" className="sm:col-start-1 sm:col-end-3 md:col-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <ContainerInput>
            <Label label="Fecha de Nacimiento" />
            <MobileDatePicker name="fechaNacimiento" onChange={(e) => e ? setNacimiento(
              format(new Date(e.toString()), 'yyyy-MM-dd')
            ) : '' } className="w-full" />
          </ContainerInput>

          <Input size='lg' disabled label="Edad" value={nacimiento && edad ? edad.toString() : ''} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Select name="genero" label="Género">
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </Select>
          <Input type="text" name="direccion" label="Domicilio Real" placeholder="ej. Mar Blanco 350" />
          <Input type="text" name="telefonoEstudiante" label="Teléfono (Opcional)" placeholder="ej. 387 123 1234" className="col-start-1 col-end-3 md:col-auto" />
        </div>

        <div>
          <Input type="email" name="correoEstudiante" label="Correo Electrónico" placeholder="ej. alumno@gmail.com" />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input type="text" name="nombreTutor" label="Nombre" placeholder="ej. Jorge" />
          <Input type="text" name="apellidoTutor" label="Apellido" placeholder="ej. Flores" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Input type="number" name="dniTutor" label="DNI" placeholder="ej. 12456789" />
          <Input type="text" name="telefonoTutor" label="Teléfono" placeholder="ej. 387 123 1234" />
          <Input type="email" name="correoTutor" label="Correo Electrónico" placeholder="ej. tutor@gmail.com" className="col-start-1 col-end-3 md:col-auto" />
        </div>
      </Section>

      <Section>
        <Title text="Información Académica">
          <FaSchool size={20} />
        </Title>

        <div>
          <BelongSchool />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          { isBelong ? (
            <>
              <Radio label="¿Es Repitente?" name="repitente" items={[
                { label: 'Sí' },
                { label: 'No' }
              ]} />
              
              <Select name="curso" label="Curso, División y Ciclo">
                {
                  courses.map((course) => (
                    <option key={course.id}>{course.curso}° {course.division}° {course.ciclo === 'Basico' ? 'Básico' : course.ciclo}</option>
                  ))
                }
              </Select>
            </>
          ) : (
            <Select name="turno" label="Turno" className="col-start-1 col-end-3">
              <option value="Mañana">Mañana</option>
              <option value="Tarde">Tarde</option>
            </Select>
          ) }
        </div>
      </Section>
    </form>
  )
}