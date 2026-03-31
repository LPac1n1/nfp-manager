import Section from "../components/Section";
import DonatorsFilters from "../components/DonatorsFilters";
import AddDonator from "../components/AddDonator";

import { useState } from "react";

function Donators() {
  const [users] = useState([
    {
      name: "Lindsay Waltone",
      cpf: "000.000.000-00",
      begin: "01/2024",
      demand: "São Lucas A",
      totalDonations: "95",
      wasPaid: false,
    },
    {
      name: "Courtney Henry",
      cpf: "111.111.111-11",
      begin: "02/2024",
      demand: "São Lucas B",
      totalDonations: "567",
      wasPaid: false,
    },
    {
      name: "Tom Cook",
      cpf: "222.222.222-22",
      begin: "03/2024",
      demand: "Luiz Gama 554",
      totalDonations: "890",
      wasPaid: false,
    },
  ]);

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-4">
          <DonatorsFilters />
          <AddDonator />
        </div>

        <Section className="w-full !p-0">
          <table className="w-full text-left overflow-x-auto table-fixed6">
            <thead className="border-b border-neutral-800">
              <tr className="">
                <th className="w-[40%] text-sm font-medium pl-8 py-4">NOME</th>
                <th className="w-[15%] text-sm font-medium py-4">CPF</th>
                <th className="w-[15%] text-sm font-medium py-4">INÍCIO</th>
                <th className="w-[15%] text-sm font-medium py-4">DEMANDA</th>
                <th className="w-[15%] text-sm font-medium py-4">
                  TOTAL DE DOAÇÕES
                </th>
              </tr>
            </thead>

            <tbody className="text-neutral-300">
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="bg-neutral-900 border-b border-neutral-800 last:border-b-0 hover:bg-neutral-700/50 transition-colors"
                >
                  <td className="py-4 px-8 font-medium">{user.name}</td>
                  <td className="py-4">{user.cpf}</td>
                  <td className="py-4">{user.begin}</td>
                  <td className="py-4">{user.demand}</td>
                  <td className="py-4">{user.totalDonations}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      </div>
    </>
  );
}

export default Donators;
