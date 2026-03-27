import Section from "../components/Section";
import Dropwdown from "./Dropdown";

function DonationsFilters() {
  return (
    <div className="w-full flex gap-4">
      <Section className="flex-1 py-4 px-4 !mb-0 overflow-visible z-10">
        <Dropwdown
          label="Ano"
          options={["2020", "2021", "2022", "2023", "2024", "2025", "2026"]}
          onSelect={(option) => console.log("Ano selecionado:", option)}
        />
      </Section>

      <Section className="flex-1 py-4 px-4 !mb-0 overflow-visible z-10">
        <Dropwdown
          label="Mês"
          options={[
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
          ]}
          onSelect={(option) => console.log("Mês selecionado:", option)}
        />
      </Section>

      <Section className="flex-1 py-4 px-4 !mb-0 overflow-visible z-10">
        <Dropwdown
          label="Demanda"
          options={["Todas as demandas", "Demanda 1", "Demanda 2", "Demanda 3"]}
          onSelect={(option) => console.log("Demanda selecionada:", option)}
        />
      </Section>
    </div>
  );
}

export default DonationsFilters;
