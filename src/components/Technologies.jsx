import nodeIcon from "../assets/node.svg";
import pythonIcon from "../assets/python.svg";
import reactIcon from "../assets/react.svg";
import mongoIcon from "../assets/mongo.svg";
import postgresIcon from "../assets/postgresql.svg";
import linuxIcon from "../assets/linux.svg";
import dockerIcon from "../assets/docker.svg";
import vueIcon from "../assets/vue.svg";
import gitIcon from "../assets/git.svg";
import djangoIcon from "../assets/django.svg";

export default function Technologies() {
    const techs = [
        { name: "Python", icon: pythonIcon },
        { name: "Django", icon: djangoIcon },
        { name: "NodeJS", icon: nodeIcon },
        { name: "React", icon: reactIcon },
        { name: "Docker", icon: dockerIcon },
        { name: "MongoSQL", icon: mongoIcon },
        { name: "PostgreSQL", icon: postgresIcon },
        { name: "Vue", icon: vueIcon },
        { name: "Linux", icon: linuxIcon },
        { name: "Git", icon: gitIcon },
    ];

    return (
        <section id="technologies" className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Technologies</h2>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
                {techs.map((tech, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="w-20 h-20 flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 shadow-md  text-slate-800 dark:text-slate-200">
                            <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                        </div>
                        <p className="mt-3 text-sm font-medium text-slate-800 dark:text-slate-200">{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
