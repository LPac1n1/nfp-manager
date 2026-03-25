import Section from "../components/Section";

function DonationsFilters() {
  return (
    <div className="w-full flex gap-4">
      <Section className="flex-1 py-4 !mb-0">Demandas</Section>
      <Section className="flex-1 py-4 !mb-0">Ano</Section>
      <Section className="flex-1 py-4 !mb-0">Mês</Section>
    </div>
  );
}

export default DonationsFilters;
