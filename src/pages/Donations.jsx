import Section from "../components/Section";
import DonationsFilters from "../components/DonationsFilters";
import ImportSpreadsheet from "../components/ImportSpreadsheet";

import { useState } from "react";

function Donations() {
  const [users, setUsers] = useState([
    {
      name: "Lindsay Waltone",
      cpf: "000.000.000-00",
      demand: "São Lucas A",
      totalForPayment: "123",
      wasPaid: false,
    },
    {
      name: "Courtney Henry",
      cpf: "111.111.111-11",
      demand: "São Lucas B",
      totalDonations: "567",
      totalForPayment: "124",
      wasPaid: false,
    },
    {
      name: "Tom Cook",
      cpf: "222.222.222-22",
      demand: "Luiz Gama 554",
      totalDonations: "890",
      totalForPayment: "125",
      wasPaid: false,
    },
  ]);

  const togglePaid = (index, value) => {
    const updatedUsers = [...users];
    updatedUsers[index].wasPaid = value;
    setUsers(updatedUsers);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-4">
          <DonationsFilters />
          <ImportSpreadsheet />
        </div>

        <Section className="w-full !p-4">
          <div className="py-4">
            <table className="w-full text-left overflow-x-auto table-fixed">
              <thead className="text-neutral-300 border-b border-neutral-800">
                <tr>
                  <th className="w-[40%] pb-3 pl-4">Nome</th>
                  <th className="w-[15%] pb-3">CPF</th>
                  <th className="w-[15%] pb-3">Demanda</th>
                  <th className="w-[15%] pb-3">Valor a ser pago</th>
                  <th className="w-[15%] pb-3">Foi pago?</th>
                </tr>
              </thead>

              <tbody className="text-neutral-300">
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b border-neutral-800 last:border-b-0 hover:bg-neutral-800/50 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-neutral-100">
                      {user.name}
                    </td>
                    <td className="py-4">{user.cpf}</td>
                    <td className="py-4">{user.demand}</td>
                    <td className="py-4">R${user.totalForPayment},00</td>
                    <td className="w-max py-4 pr-4 text-white">
                      <div className="w-full flex rounded-lg">
                        <button
                          onClick={() => togglePaid(index, true)}
                          className={`w-full px-4 py-2 rounded-l-lg cursor-pointer ${
                            user.wasPaid
                              ? "border border-emerald-500 bg-emerald-700 text-white"
                              : "border border-neutral-600/60 bg-transparent text-neutral-400"
                          }`}
                        >
                          Sim
                        </button>

                        <button
                          onClick={() => togglePaid(index, false)}
                          className={`w-full px-4 py-2 rounded-r-lg cursor-pointer ${
                            !user.wasPaid
                              ? "border border-rose-500 bg-rose-700 text-white"
                              : " border border-neutral-600/60 bg-transparent text-neutral-400"
                          }`}
                        >
                          Não
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </>
  );
}

export default Donations;
