// src/components/Experience.jsx
export default function Experience() {
    const experiences = [
        {
            company: "Yuhu MX",
            period: "Oct 2024 - Mar 2025",
            role: "Backend Developer Analyst Jr",
            description: "Developed integrations between the Vendor Management system and NetSuite ERP, improving data flow and process efficiency. I optimized SQL queries and data handling, and streamlined API integrations to ensure smooth communication between frontend and backend systems.",
            extra: "Python, Django, PostgreSQL, Netsuite, Bash"
        },
        {
            company: "Project - Data Acquisition and Transmission System for Oil Facilities, using LoRaWAN and BLE",
            period: "Jan 2024 - Sep 2024",
            role: "Cloud Engineer",
            description: "Participated in the development of a sensor-based system for detecting temperature, humidity, pressure, and gas. Configured and orchestrated the cloud environment using AWS and Docker, integrating ChirpStack for sensor communication and Grafana for interactive data visualization.",
            extra: "IOT, LoRaWAN, BLE, AWS, Docker, Grafana, InfluxDB, Linux"
        },
        {
            company: "Caribbean Digital Group",
            period: "Mar 2021 - Jan 2023",
            role: "Backend Developer Jr",
            description: "Analyzed technical solutions to align with customer requirements and developed scalable, maintainable code to ensure long-term software stability. Collaborated with management and development partners on application design and project progress, while working on multiple projects with Python, Flask, Node.js, and React.",
            extra: "Python, Flask, React, MongoDB, NodeJS, Express, PostgreSQL, Linux"
        },
        {
            company: "Gignet",
            period: "May 2021 - Jun 2022",
            role: "Backend Developer Jr",
            description: "Designed and implemented backend architecture with Python and Flask to build a scalable, efficient data processing system. Developed RESTful APIs enabling seamless integration between IoT devices, Odoo ERP, and cloud infrastructure. Established reliable connections for financial transactions in cloud environments and built APIs and data clients to support smooth data consumption.",
            extra: "Python, Flask, PostgreSQL, Odoo"
        },
    ];

    return (
        <section
            id="experience"
            className="relative min-h-screen flex flex-col items-center justify-center px-6"
        >
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 text-center">
                Experience
            </h2>

            {/* Timeline */}
            <div className="mt-16 w-full max-w-5xl grid grid-cols-[1fr_auto_1fr] gap-8">
                {experiences.map((exp, i) => (
                    <div key={i} className="contents">
                        {/* Left */}
                        <div className="text-right pr-6">
                            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                                {exp.company}
                            </h3>
                            {exp.extra ? (
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{exp.extra}</p>
                            ) : null}
                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{exp.period}</p>
                        </div>

                        {/* Middle (line + dot) */}
                        <div className="relative flex flex-col items-center">
                            {i < experiences.length - 1 && (
                                <span className="absolute top-8 bottom-0 w-px bg-slate-300 dark:bg-slate-700" />
                            )}
                            <span className="z-10 w-5 h-5 rounded-full border-2 border-slate-700 dark:border-slate-200 bg-white dark:bg-slate-900" />
                        </div>

                        {/* Right */}
                        <div className="pl-6">
                            <h4 className="text-2xl font-semibold text-slate-900 dark:text-white">
                                {exp.role}
                            </h4>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Responsive (columna única en móviles) */}
            <div className="mt-12 w-full max-w-3xl md:hidden">
                {experiences.map((exp, i) => (
                    <div key={`m-${i}`} className="relative pl-8 pb-10">
                        {/* vertical line */}
                        {i < experiences.length - 1 && (
                            <span className="absolute left-3 top-3 bottom-0 w-px bg-slate-300 dark:bg-slate-700" />
                        )}
                        {/* dot */}
                        <span className="absolute left-1.5 top-2 w-4 h-4 rounded-full border-2 border-slate-700 dark:border-slate-200 bg-white dark:bg-slate-900" />
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{exp.company}</h3>
                        {exp.extra ? (
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{exp.extra}</p>
                        ) : null}
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{exp.period}</p>
                        <h4 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">
                            {exp.role}
                        </h4>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
