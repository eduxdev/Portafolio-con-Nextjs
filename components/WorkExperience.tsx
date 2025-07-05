interface WorkExperienceItem {
  startDate: string;
  endDate: string;
  companyName: string;
  jobTitle: string;
  description: string[];
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "Enero 2024",
    endDate: "Presente",
    companyName: "Morfos Digital",
    jobTitle: "FullStack Developer",
    description: ["Lider de equipo de desarrollo, encargado de la gestión de proyectos",
      "Aportando soluciones rapidas"
    ],
  },
 
];

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Experiencia</h1>
      <div className="p-1">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {workExperienceData.map((item, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.startDate} - {item.endDate}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.companyName} en {item.jobTitle}
            </h3>
            <ol className="text-base text-gray-700">
              {item.description.map((desc, index) =>(
                <li key={index}>{desc}</li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
      </div>
    </div>
  );
};

export default WorkExperience;
