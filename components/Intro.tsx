'use client'

import Image from "next/image";

const Intro = () =>{
    return(
        <div className="flex gap-4 flex-col-reverse sm:flex-row justify-center items-center">
        <div className="flex flex-col gap-4 md:w-9/12 sm:w-full">
            <h1 className="text-4xl font-bold">Hola! Soy Edu</h1>
            <p className="text-base text-gray-700 dark:text-gray-300">
                Desarrollador Fullstack con 1 año de experiencia en strartups. Excelente para trabajar diseñanado aplicaciones que resuelvan problemas de un forma agil y sencilla. Mi experiencia esta basada en le desarrollo de aplicaciones backend como de frontend.
            </p>
        </div>
        <div className="md:w-3/12 sm:w-full">
            <Image 
            src="/imagenes/EduG.png"
            alt="Edu" 
            width={100} 
            height={100}
            className="rounded-full border border-b-gray-100 h-36 w-36"
            />
        </div>
        </div>

    )
}

export default Intro;