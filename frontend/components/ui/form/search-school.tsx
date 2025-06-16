'use client'

import { PadronResponse } from "@/types";
import { Input } from "./form-utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

export default function SearchSchool(
  {schools}
  : {
    schools: null | PadronResponse
  }
) {

  const [school, setSchool] = useState<string>('');

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("school", value);
    }else {
      params.delete("school");
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false
    });
  }, 500)

  return (
    <Input
      type="text"
      placeholder="ej. Escuela Profesor Alejandro Gauffin"
      label="Escuela de Procedencia"
      name="escuelaProcedencia"
      list="escuelaProcedencia-items"
      onChange={(e) => {setSchool(e.target.value);handleChange(e.target.value)}}
      value={school}
    >
      <ul className="py-2 flex flex-col gap-2">
        {
          schools?.padrones.map((school) => (
            <li key={school.id} className="flex items-center gap-2">
              <span className="grow">
                {school.nombreEstablecimiento} - <b>{school.localidad}</b>
              </span>
              <button className="btn btn-primary" type="button" onClick={() => { setSchool(school.nombreEstablecimiento); handleChange(school.nombreEstablecimiento) }}>Elegir</button>
            </li>
          ))
        }
      </ul>
    </Input>
  );
}
