function Layout({ children }) {
  return (
    <>
      <div className="w-screen h-screen bg-neutral-900 text-neutral-100 overflow-hidden">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </div>
    </>
  );
}

export default Layout;
