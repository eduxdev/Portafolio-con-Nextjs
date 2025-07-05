import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { RainbowButton } from "./magicui/rainbow-button";

interface Project {
  title: string;
  description: string;
  link: string;
  code: string;
  imagen: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    title: "Sistema de rifas",
    description:
      "Sistema encargado de la gestión correcta de rifas, así mismo como la asignación de boletos al azar, sistema de apartado de boletos, sistema de administración de boletos, sistema para gestionar la creacion de nuevas rifas",
    link: "https://elbulldogrifas.com/",
    code: "https://github.com/eduxdev/rifas.git",
    imagen: "/imagenes/rifas.png",
    technologies: ["Html", "Javascript", "Tailwind Css", "Php", "MySQL"],
  },
  {
    title: "Formulario de consentimiento",
    description:
      "Formulario desarollado para empresa medica con la finalidad de obtener el consentimiento de paciento y que paciente como profesional firmen",
    link: "https://form.vitaldropsinfusion.com/",
    code: "https://github.com/eduxdev/firma.git",
    imagen: "/imagenes/formulario.png",
    technologies: ["Html", "Javascript", "Css", "Php", "MySQL"],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Proyectos</h1>
      <div className="grid grid-cols-2 gap-4">
        {projectsData?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-300 rounded-md"
          >
            <Image
              src={item.imagen}
              alt={item.title}
              className="w-full h-[300px] object-cover rounded-t-md"
              width={500}
              height={300}
            />
            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
              <div className="flex gap-2 flex-wrap">
                {item.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex border border-gray-200 rounded-md px-2 py-1 text-sm bg-gray-200 text-gray-800"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <Link href={item.link} target="_blank">
                <RainbowButton variant="default">Ver</RainbowButton>
                </Link>
                <Link href={item.code} target="_blank">
                <Button variant="outline">Código</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
