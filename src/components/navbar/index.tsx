const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-white/10 bg-neutral-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div>
          <h1 className="text-lg font-semibold text-white">Kanban Board</h1>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

