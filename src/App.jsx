import { useState } from "react";

import Layout from "./Layout.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Section from "./components/Section.jsx";

import Donations from "./pages/Donations.jsx";
import Donators from "./pages/Donators.jsx";
import Demands from "./pages/Demands.jsx";
import Reports from "./pages/Reports.jsx";

function App() {
  const [activePage, setActivePage] = useState("donations");

  return (
    <Layout>
      <Section
        title="Sistema de Gestão de Doações – Nota Fiscal Paulista"
        titleAlign="center"
        className="bg-transparent border-none"
      />

      <div className="flex gap-4">
        <Sidebar onNavigate={setActivePage} activePage={activePage} />

        {activePage === "donations" && <Donations />}
        {activePage === "donators" && <Donators />}
        {activePage === "demands" && <Demands />}
        {activePage === "reports" && <Reports />}
      </div>
    </Layout>
  );
}

export default App;
