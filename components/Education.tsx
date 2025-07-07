interface EducationItem{
    startDate: string
    endDate: string
    collegeName?: string
    schooldName?: string
    courseName: string
    address: string
}

const educationData: EducationItem[] = [
    
    {
        startDate: "Agosto 2017",
        endDate: "Agosto 2020",
        collegeName: "Colegio de Estudios Científicos y Tecnologicos del Estado de México", 
        courseName: "Técnico en Programación",
        address: "Santa Ana, Ixtlahuaca, Estado de México"
    },
    {
        startDate: "Septiembre 2022",
        endDate: "En curso",
        schooldName: "Tecnológico de Estudios Superiores de Jocotitlan",
        courseName: "Ingeníero en Sistemas Computacionales con Especialidad en Ciberserguridad",
        address: "Jocotitlán, Estado de México"
    }
]

const Education = () => {
    return <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Educación</h1>
        <div className="p-1">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {educationData.map((item, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.startDate} - {item.endDate}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.courseName} en {item?.collegeName || item?.schooldName}
            </h3>
           <p className="text-base text-gray-700 dark:text-gray-300">
            {item.address}
           </p>
          </li>
        ))}
      </ol>
      </div>
    </div>
}

export default Education