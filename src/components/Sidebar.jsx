function Sidebar({ onNavigate, activePage }) {
  const menuItems = [
    { id: "donations", label: "Doações" },
    { id: "donators", label: "Doadores" },
    { id: "demands", label: "Demandas" },
    { id: "reports", label: "Relatórios" },
  ];

  return (
    <aside className="w-64 flex-shrink-0 h-full bg-neutral-800/50 backdrop-blur-lg rounded-3xl border border-neutral-600/60 overflow-hidden">
      <nav>
        <ul className="flex flex-col">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-8 py-4 border-b border-neutral-600/60 transition-colors cursor-pointer 
                ${activePage === item.id ? "bg-neutral-700/50 text-neutral-100" : "hover:bg-neutral-700/50 text-neutral-400"}`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
