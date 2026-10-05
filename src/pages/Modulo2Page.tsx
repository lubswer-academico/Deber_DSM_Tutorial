import { useState } from "react";
type ContadorProps = {
    initial?:number;
    step?:number
}
export const Modulo2Page = ({initial = 0, step = 1}: ContadorProps)=>{
    const [count , setCount] = useState <number>(initial)
    const inc  = () : void => setCount((c)=> c + step)
    const dec  = () : void => setCount((c)=> c - step)
    //inferences
    const [cup, setCup] = useState<number>(1)
    //explicito union - literal
    const [intensidadUI, setIntensidadUI] = useState<BrewedCoffee["intensity"]>("suave")
    //explicito nulos
    const [ultimoCafe, setUltimoCafe] = useState <BrewedCoffee | null>(null)
    // valores undefined
    const [azucarIn, setAzucarIn] = useState <number | undefined>( undefined)

    type ingredients = "agua" | "café" | "azucar"
    type CoffeeRecipe = {
        water: number,
        coffee: number,
        sugar?: number
    };   
    type BrewedCoffee = {
        message: string,
        intensity: "suave" | "fuerte" 
    }
    const makeCoffee = (receta : CoffeeRecipe): BrewedCoffee => {
        const intensity = receta.coffee > 10 ? "fuerte" : "suave";
        return{
            message: `Cafe listo con ${receta.coffee}g de café , ${receta.water}ml  de agua y ${receta.sugar? `${receta.sugar}g de azucar`: "sin azucar"}`,
            intensity
        }
    }
    const OnCoffee = (): void => {

        const resultado : BrewedCoffee = makeCoffee({water : 12,  coffee : 11 , sugar : null}) 

        alert(resultado.message + " con instensidad: " + resultado.intensity)
    }
    /*
    type CardProps = {title: string}
    interface CardPropsI {
        title: string
    }
    interface Battle {arena: string}
    interface Battle {ki: number}
    const peleaOk: Battle = {arena: "Namek", ki: 1500}
    */ 
   interface RecipeBase {water: number, coffee : number}
   interface RecipeWithSugar extends RecipeBase {sugar :number}
   interface CoffeeMachine {model: string}
   interface CoffeeMachine {maxWater: number}
   const machine : CoffeeMachine = {model: "Kame-500", maxWater : 2000}
   interface CafePreparadoI {message: string, intensidad: "suave" | "fuerte"}
   function prepararCafeI ( {water = 0, coffee = 0, sugar = 0}: RecipeWithSugar): CafePreparadoI{
        const intensidad = coffee > 10? "fuerte" : "suave"
        return{
            message: "Café listo (INTF) con " + coffee + "g de café, "+ sugar + "g de azucar, " + water + "ml de agua ",
            intensidad
        }
   }
   const onCoffeeWithInterface   = () : void =>{
    const resultado = prepararCafeI({water: 24, coffee: 34, sugar : 12})
    alert(resultado.message + "con intensidad: " + resultado.intensidad)
   }
   //intersecciones
   type A = {nombre: string}
   type B = {edad: number}
   type C = {state?: boolean}
   type Persona = A & B & C
   const mikiObject: Persona = {nombre: "Milku", edad: 20, state: true}

    return(
        <div className = "h-screen bg-amber-300 text-black flex flex-col">
            <span>Modulo 2 Page</span>
            <button onClick={OnCoffee} className="border-md bg-amber-950 text-white rounded-2xl">
                Hacer café con Type
            </button>
            
            <span>Interface</span>
            <button onClick={onCoffeeWithInterface} className="border-md bg-black text-white rounded-2xl">
                Hacer café con interface
            </button>
            <span> state tipados </span>
            {intensidadUI}
            <button onClick = {()=>{if(intensidadUI === "suave"){setIntensidadUI("fuerte")}else{setIntensidadUI("suave")}}}> cambiar State</button>
            {/*peleaOk.arena + " " + peleaOk.ki*/}
            <span>Contador</span>
            <button onClick={inc} className="rounded-md border border-neutral-700 bg-neutral-800 px-3 hover:bg-neutral-700 text-amber-50 "> 
                + 
            </button>
            <span className="min-w-[3ch] text-center text-2xl font-semibold text-black">
                {count}
            </span>
            <button onClick={dec} className="rounded-md border border-neutral-700 bg-neutral-800 px-3 hover:bg-neutral-700 text-amber-50 ">
                - 
            </button>
            <h2>Intersecciones (&)</h2>
            {mikiObject.nombre } - {mikiObject.edad}
            <pre> {JSON.stringify(mikiObject, null, 2)}</pre>
        </div>
    )
}