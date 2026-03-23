function Layout({ children }) {
  return (
    <>
      <div className="w-screen h-screen bg-neutral-800 text-neutral-100">
        <div className="max-w-[1440px] mx-auto p-8">{children}</div>
      </div>
    </>
  );
}

export default Layout;
