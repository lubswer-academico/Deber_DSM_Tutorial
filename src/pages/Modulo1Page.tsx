import { calculateDamage } from "../utils/CalcularDamage";
import { Link } from "react-router-dom";
export const Modulo1Page = () => {
    const saga = "Saiyan Saga";
    const HorasDeEntranmiento: number = 36;
    const gerrero : string = "Goku";
    const ki: number = 9600;
    const enCombate: boolean = true;
    const gerrerosZ: Array<string> = ["Goku", "Veggeta", "Gohan", "Piccoro"]
    const cordenadas: [number , number, string] = [34, 56, "hola"]
    /*const calculateDamage = (base : number, multiplicador : number) : number => {
        return base * multiplicador;
    } */
    let tranformation: string | null = null;
    tranformation = "SSJ 7"
    let strategy : string | undefined = undefined;
    strategy = "Gionazo"
    let freeVariable: any = "Semilla del Ermitaño";
    freeVariable = 2;
    const event: unknown = "Refuerzo"
    let eventMayus: string | undefined = undefined;
    if(typeof event === "string"){
        eventMayus = event.toLocaleUpperCase()
    }




  return (
    <main className = "h-screen bg-neutral-900 text-neutral-100 antialiased">
      <div className = "mx-auto max-w-3xl p-8">
        <header className = "mb-8 border-b border-neutral-800 pb-4">
            <Link
            to= "/"
            className= "px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md">
                Volver al Home
            </Link>
        <h1 className = "text-3xl fond-semibold text-blue-500 py-4">
            React + TypeScript - Módulo 1
        </h1>
        <p className = "text-sm text-neutral-400 py-4">
            Fundamentos: tipos básicos, arrays y tuplas
        </p>
        </header>
        <section className = "mb-8">
            <h2 className = "text-xl font-medium text-blue-300">
                Inferencia y tipos básicos
            </h2>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300 py-2">
                <div>
                    Saga : {saga}
                </div>
                <div>
                    Horas de entranmiento : {HorasDeEntranmiento}
                </div>
                <div>Gerrero: {gerrero}</div>
                <div>Ki : {ki}</div>
                <div>En combate: {enCombate ? "Si" : "No"}</div>
            </div>
        </section>
        <section className = "mb-8">
            <h2 className = "text-xl font-medium text-blue-300">
                Arrays  
            </h2>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300 py-2">
                <div>
                    Equipo : {gerrerosZ.join(" , ")}
                </div>
            </div>
        </section>
        <section className = "mb-8">
            <h2 className = "text-xl font-medium text-blue-300">
                Tuplas 
            </h2>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300 py-2">
                <div>
                    Coordenadas: {`x= ${cordenadas[0]} y= ${cordenadas[1]} saludo= ${cordenadas[2]}`}
                </div>
            </div>
        </section>
        <section className = "mb-8">
            <h2 className = "text-xl font-medium text-blue-300">
                Funciones Tipadas
            </h2>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300 py-2">
                <p>Daño (base 450 x mult. 2)</p>
                <span>{calculateDamage(450, 2)}</span>
            </div>
        </section> 
        <section className = "mb-8">
            <h2 className = "text-xl font-medium text-blue-300">
                Any and Unknow
            </h2>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300 py-2">
                <div>Any : {freeVariable}</div>
                <div>Evento : {eventMayus}</div>
            </div>
        </section>        
      </div>
    </main>
  );
};
