import Section from "./Section";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <Section className="w-164 m-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            ✕
          </button>
        </div>

        <div className="py-2">{children}</div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-500 rounded-md border-1 border-neutral-600 hover:bg-neutral-600 hover:border-neutral-700 transition"
          >
            Fechar
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md border-1 border-blue-700 hover:bg-blue-700 transition">
            Confirmar
          </button>
        </div>
      </Section>
    </div>
  );
};

export default Modal;
