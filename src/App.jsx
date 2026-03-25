import Layout from "./Layout.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Section from "./components/Section.jsx";

import Donations from "./pages/Donations.jsx";

function App() {
  return (
    <>
      <Layout>
        <Section
          title="Sistema de Gestão de Doações – Nota Fiscal Paulista"
          titleAlign="center"
          className="bg-transparent border-none"
        />
        <div className="flex gap-4">
          <Sidebar />
          <Donations />
        </div>
      </Layout>
    </>
  );
}

export default App;
