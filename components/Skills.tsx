

const skillsData: string [] = [
    "Html",
    "Css",
    "Javascript",
    "Php",
    "Tailwind",
    "Git",
    "GitHub",
    "MySQL",
    "Python",
    "React",
    "Next.js"
]

const Skills = () => {
    return <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Skills</h1>
        <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
            <div key={index} className="flex border-gray-200 rounded-md px-2 py-1 p-4 text-sm bg-gray-500 text-white">
                {skill}
            </div>
        ))}
        </div>
    </div>
}

export default Skills