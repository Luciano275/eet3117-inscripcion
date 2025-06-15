-- CreateEnum
CREATE TYPE "Sector" AS ENUM ('Privado', 'Estatal');

-- CreateEnum
CREATE TYPE "Ambito" AS ENUM ('Urbano', 'Rural_Aglomerado', 'Rural_Disperso');

-- CreateTable
CREATE TABLE "Padron" (
    "id" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "municipio" TEXT,
    "codigoJurisdiccional" TEXT NOT NULL,
    "cueAnexo" INTEGER NOT NULL,
    "nombreEstablecimiento" TEXT NOT NULL,
    "ambito" "Ambito" NOT NULL,
    "sector" "Sector" NOT NULL,
    "ofertas" TEXT NOT NULL,
    "localidad" TEXT NOT NULL,
    "domicilio" TEXT NOT NULL,

    CONSTRAINT "Padron_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Padron_id_key" ON "Padron"("id");
