import Section from "../components/Section";
import DemandsFilters from "../components/DemandsFilters";
import AddDemand from "../components/AddDemand";

import { useState } from "react";

function Demands() {
  const [demands] = useState([
    {
      name: "São Lucas A",
      donators: "95",
    },
    {
      name: "São Lucas B",
      donators: "107",
    },
    {
      name: "Luiz Gama 554",
      donators: "50",
    },
  ]);

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-4">
          <DemandsFilters />
          <AddDemand />
        </div>

        <Section className="w-full !p-0">
          <table className="w-full text-left overflow-x-auto table-fixed6">
            <thead className="border-b border-neutral-800">
              <tr className="">
                <th className="w-[40%] text-sm font-medium pl-8 py-4">NOME</th>
                <th className="w-[15%] text-sm font-medium py-4">DOADORES</th>
              </tr>
            </thead>

            <tbody className="text-neutral-300">
              {demands.map((demand, index) => (
                <tr
                  key={index}
                  className="bg-neutral-900 border-b border-neutral-800 last:border-b-0 hover:bg-neutral-700/50 transition-colors"
                >
                  <td className="py-4 px-8 font-medium">{demand.name}</td>
                  <td className="py-4">{demand.donators}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      </div>
    </>
  );
}

export default Demands;
