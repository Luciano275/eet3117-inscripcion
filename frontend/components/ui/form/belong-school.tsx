import { useBelong } from "@/components/providers/belong-provider";
import { Radio } from "./form-utils";

export default function BelongSchool () {

  const { setBelong } = useBelong();

  return (
    <Radio label="¿Pertenece a la Institución?" name="pertenece" items={[
      { label: 'Sí', onClick: () => setBelong(true) },
      { label: 'No', onClick: () => setBelong(false), defaultChecked: true }
    ]} />
  )
}