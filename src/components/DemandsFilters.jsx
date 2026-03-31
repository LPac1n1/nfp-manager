import Section from "../components/Section";
import Dropwdown from "./Dropdown";

function DemandsFilters() {
  return (
    <div className="w-full flex gap-4">
      <Section className="flex-1 py-4 px-4 !mb-0 overflow-visible z-10">
        <Dropwdown
          label="Nome"
          options={["Nomes"]}
          onSelect={(option) => console.log("Nome selecionado:", option)}
        />
      </Section>
    </div>
  );
}

export default DemandsFilters;
