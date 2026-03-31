import Section from "../components/Section";
import Dropwdown from "./Dropdown";

function DonatorsFilters() {
  return (
    <div className="w-full flex gap-4">
      <Section className="flex-1 py-4 px-4 !mb-0 overflow-visible z-10">
        <Dropwdown
          label="Nome"
          options={["Nomes"]}
          onSelect={(option) => console.log("Nome selecionado:", option)}
        />
      </Section>

      <Section className="flex-1 py-4 px-4 !mb-0 overflow-visible z-10">
        <Dropwdown
          label="CPF"
          options={["CPFs"]}
          onSelect={(option) => console.log("CPF selecionado:", option)}
        />
      </Section>

      <Section className="flex-1 py-4 px-4 !mb-0 overflow-visible z-10">
        <Dropwdown
          label="Demanda"
          options={["Todas as demandas", "Demanda 1", "Demanda 2", "Demanda 3"]}
          onSelect={(option) => console.log("Demanda selecionada:", option)}
        />
      </Section>

      <Section className="flex-1 py-4 px-4 !mb-0 overflow-visible z-10">
        <Dropwdown
          label="Início das doações"
          options={["Calendário"]}
          onSelect={(option) =>
            console.log("Início das doações selecionado:", option)
          }
        />
      </Section>
    </div>
  );
}

export default DonatorsFilters;
