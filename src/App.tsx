import Board from "./components/board";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-50">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 pb-12 pt-6">
        <div className="rounded-3xl border border-white/10 bg-neutral-900/80 p-6 shadow-2xl shadow-black/50">
          <Board />
        </div>
      </main>
    </div>
  );
}

export default App;
