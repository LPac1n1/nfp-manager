function Sidebar() {
  return (
    <aside className="w-64 h-full bg-neutral-800/50 backdrop-blur-lg rounded-3xl border border-neutral-600/60 overflow-hidden">
      <nav>
        <ul className="flex flex-col">
          <li className="px-8 py-4 border-b border-neutral-600/60 hover:bg-neutral-800/50 transition-colors cursor-pointer">
            <a href="#">Doações</a>
          </li>
          <li className="px-8 py-4 border-b border-neutral-600/60 hover:bg-neutral-800/50 transition-colors cursor-pointer">
            <a href="#">Doadores</a>
          </li>
          <li className="px-8 py-4 hover:bg-neutral-800/50 transition-colors cursor-pointer">
            <a href="#">Relatórios</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
