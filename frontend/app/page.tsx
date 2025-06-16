import Form from "@/components/ui/form/Form";
import { findSchoolsByName } from "@/lib/schools";

export default async function Home(
  {searchParams}
  : {
    searchParams: Promise<{
      school?: string | null;
    }>
  }
) {

  const { school = null } = await searchParams;

  const schools = school ? await findSchoolsByName(school) : null;

  return (
    <section className="container border border-neutral-200 rounded-lg mx-auto p-8">
      <h2 className="text-2xl font-bold text-center">
        Formulario de Inscripción
      </h2>

      <Form schools={schools} />
    </section>
  );
}
