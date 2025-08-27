// src/components/Experience.jsx
export default function Experience() {
    const experiences = [
        {
            company: "Yuhu MX",
            period: "Oct 2024 - Mar 2025",
            role: "Backend Developer Analyst Jr",
            description:
                "Developed integrations between the Vendor Management system and NetSuite ERP, improving data flow and process efficiency. I optimized SQL queries and data handling, and streamlined API integrations to ensure smooth communication between frontend and backend systems.",
            extra: "Python, Django, PostgreSQL, Netsuite, Bash",
        },
        {
            company:
                "Project - Data Acquisition and Transmission System for Oil Facilities, using LoRaWAN and BLE",
            period: "Jan 2024 - Sep 2024",
            role: "Cloud Engineer",
            description:
                "Participated in the development of a sensor-based system for detecting temperature, humidity, pressure, and gas. Configured and orchestrated the cloud environment using AWS and Docker, integrating ChirpStack for sensor communication and Grafana for interactive data visualization.",
            extra: "IOT, LoRaWAN, BLE, AWS, Docker, Grafana, InfluxDB, Linux",
        },
        {
            company: "Caribbean Digital Group",
            period: "Mar 2021 - Jan 2023",
            role: "Backend Developer Jr",
            description:
                "Analyzed technical solutions to align with customer requirements and developed scalable, maintainable code to ensure long-term software stability. Collaborated with management and development partners on application design and project progress, while working on multiple projects with Python, Flask, Node.js, and React.",
            extra: "Python, Flask, React, MongoDB, NodeJS, Express, PostgreSQL, Linux",
        },
        {
            company: "Gignet",
            period: "May 2021 - Jun 2022",
            role: "Backend Developer Jr",
            description:
                "Designed and implemented backend architecture with Python and Flask to build a scalable, efficient data processing system. Developed RESTful APIs enabling seamless integration between IoT devices, Odoo ERP, and cloud infrastructure. Established reliable connections for financial transactions in cloud environments and built APIs and data clients to support smooth data consumption.",
            extra: "Python, Flask, PostgreSQL, Odoo",
        },
    ];

    return (
        <section
            id="experience"
            className="relative min-h-screen flex flex-col items-center justify-center px-6 mb-16 md:mb-0"
        >
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 text-center">
                Experience
            </h2>

            {/* Timeline */}
            <div className="mt-16 w-full max-w-5xl flex flex-col gap-12">
                {experiences.map((exp, i) => (
                    <div key={i} className="relative flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8">
                        {/* Left (company + extra) */}
                        <div className="text-left md:text-right md:pr-6">
                            <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">
                                {exp.company}
                            </h3>
                            {exp.extra && (
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                    {exp.extra}
                                </p>
                            )}
                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                                {exp.period}
                            </p>
                        </div>

                        {/* Middle (line + dot) */}
                        <div className="relative flex justify-center md:flex-col items-center md:items-center">
                            {/* line */}
                            {i < experiences.length - 1 && (
                                <span className="absolute md:top-8 md:bottom-0 md:left-1/2 md:-translate-x-1/2 w-px md:w-px h-full md:h-auto bg-slate-300 dark:bg-slate-700" />
                            )}
                            {/* dot */}
                            <span className="z-10 w-4 h-4 rounded-full border-2 border-slate-700 dark:border-slate-200 bg-white dark:bg-slate-900" />
                        </div>

                        {/* Right (role + description) */}
                        <div className="mt-4 md:mt-0 md:pl-6">
                            <h4 className="text-lg md:text-2xl font-semibold text-slate-900 dark:text-white">
                                {exp.role}
                            </h4>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
