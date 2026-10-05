import { Link } from "react-router-dom";

export const HomePage = () => {
  const modules = [
    {
      id: 1,
      title: "Introduccion a TypeScrip",
      desc: "Tipos basicos, inferencia, arrays",
      path: "/modulo1",
    },
    {
      id: 2,
      title: "props y estados",
      desc: "props opcionales, defaults y useState tipado",
      path: "/modulo2",
    },
    {
      id: 3,
      title: "Objetos y Clases",
      desc: "Tipos basicos, inferencia, arrays",
      path: "/modulo3",
    },
    {
      id: 4,
      title: "Manejo de errores",
      desc: "Tipos basicos, inferencia, arrays",
      path: "/modulo4",
    },
    {
      id: 5,
      title: "Patrones de diseno",
      desc: "Tipos basicos, inferencia, arrays",
      path: "/modulo5",
    },
    {
      id: 6,
      title: "Buenas practicas",
      desc: "Tipos basicos, inferencia, arrays",
      path: "/modulo6",
    },
  ];
  return (
    <main className = "min-h-screen bg-neutral-950 text-neutral-100">
      <section className = "mx-auto max-w-3xl px-6 py-12">
        <header className = "mb-8">
            <h1 className = "text-2xl md:text-3xl font-semibold text-shadow-amber-400 text-blue-400">
                React + TypeScript
            </h1>
            <p className = "text-sm text-neutral-400">
                Navega por los módulos del curso
            </p>
        </header> 
        <nav className = "space-y-3">
            {modules.map( (item) => (
                <Link to = {item.path} key = {item.id} className = "group block rounder-xl border border-neutral-800 bg-neutral-900/60 px-5 rounded-lg py-4 transition hover:border-blue-500/40 hover:bg-neutral-900">
                    <div className = "flex items-center justify-between gap-3">
                        <div>
                            <span className = "text-[10px] tracking-widest uppercase text-nuetral-500">
                                Modulo
                            </span>
                            <h2 className = "mt-1 text-lg font-medium text-neutral-100">
                                {item.title}
                            </h2>
                            <p className="text-sm text-neutral-400">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </nav>

      </section>
    </main>
  );
};
