import Modal from "./Modal";

import { useState } from "react";

function AddDonator() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-64 bg-emerald-500/20 backdrop-blur-lg border border-emerald-500 rounded-2xl text-emerald-500 flex items-center justify-center cursor-pointer hover:bg-emerald-500/30 transition-colors"
      >
        Adicionar doador
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Adicionar Doador"
      >
        <p>
          <form action="">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="pl-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-neutral-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cpf" className="pl-1">
                  CPF
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  required
                  className="w-full border border-neutral-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="demand" className="pl-1">
                  Demanda
                </label>
                <input
                  type="text"
                  id="demand"
                  name="demand"
                  required
                  className="w-full border border-neutral-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="demand" className="pl-1">
                  Início das doações
                </label>
                <input
                  type="date"
                  id="demand"
                  name="demand"
                  required
                  className="w-full border border-neutral-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                />
              </div>
            </div>
          </form>
        </p>
      </Modal>
    </>
  );
}

export default AddDonator;
