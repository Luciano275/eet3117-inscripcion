import { Ambito, Sector } from "@prisma/client";

export type PadronResponse = {
    cursor: string | null;
    length: number;
    padrones: {
        codigoJurisdiccional: string;
        id: string;
        departamento: string;
        municipio: string | null;
        cueAnexo: number;
        nombreEstablecimiento: string;
        ambito: Ambito;
        sector: Sector;
        ofertas: string;
        localidad: string;
        domicilio: string;
    }[];
}