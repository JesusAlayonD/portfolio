// src/components/AboutMe.tsx
export default function AboutMe() {
    return (
        <section
            id="about"
            className="
          relative
          min-h-screen
          flex flex-col items-center justify-center
          px-6
        "
        >
            {/* Título */}
            <h2
                className="
            text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight
            text-slate-900 dark:text-slate-100
            text-center
          "
            >
                About me
            </h2>

            {/* Descripción */}
            <p
                className="
            mt-8 max-w-4xl text-base sm:text-lg md:text-xl leading-8
            text-slate-600 dark:text-slate-400
            text-center
          "
            >
                I am Jesus Alayon Dominguez, a developer with a deep passion for technology and
                innovation. With experience in web application development and cloud-based solutions,
                I’m always eager to embrace new challenges that push the boundaries of my skills.
                I’m excited to explore opportunities that let me make a meaningful impact in the
                tech industry.
            </p>

            {/* Social / Contacto */}
            <div className="mt-14 grid grid-cols-3 gap-12 sm:gap-30">
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/jesusalayond/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="
              group inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center
              rounded-2xl border
              border-slate-300/70 dark:border-white/20
              text-slate-700 dark:text-slate-200
              shadow-sm
              transition-transform hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-indigo-500/50
            "
                >
                    {/* ícono LinkedIn (SVG) */}
                    <svg
                        viewBox="0 0 24 24"
                        className="h-8 w-8 sm:h-9 sm:w-9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                    >
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <path d="M8 11v5M8 8h.01M12 11.5V16m0-3.5a2 2 0 1 1 4 0V16" />
                    </svg>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/JesusAlayonD"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="
              group inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center
              rounded-2xl border
              border-slate-300/70 dark:border-white/20
              text-slate-700 dark:text-slate-200
              shadow-sm
              transition-transform hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-indigo-500/50
            "
                >
                    {/* ícono GitHub (SVG) */}
                    <svg
                        viewBox="0 0 24 24"
                        className="h-8 w-8 sm:h-9 sm:w-9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                    >
                        <path d="M15 22v-3.2a3.6 3.6 0 0 0-1-2.8c3.3-.4 6.7-1.6 6.7-7.2A5.6 5.6 0 0 0 19 3.6 5.2 5.2 0 0 0 18.9 0C17.6 0 16 1 15.4 1.6A11.4 11.4 0 0 0 12 1a11.4 11.4 0 0 0-3.4.6C8 1 6.4 0 5.1 0A5.2 5.2 0 0 0 5 3.6 5.6 5.6 0 0 0 2.3 8.8c0 5.6 3.4 6.8 6.7 7.2a3.6 3.6 0 0 0-1 2.8V22" />
                    </svg>
                </a>

                {/* Email */}
                <a
                    href="mailto:jesusalayon@gmail.com"
                    aria-label="Email"
                    className="
              group inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center
              rounded-2xl border
              border-slate-300/70 dark:border-white/20
              text-slate-700 dark:text-slate-200
              shadow-sm
              transition-transform hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-indigo-500/50
            "
                >
                    {/* ícono @ (SVG) */}
                    <svg
                        viewBox="0 0 24 24"
                        className="h-8 w-8 sm:h-9 sm:w-9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                    >
                        <path d="M16.5 12a4.5 4.5 0 1 1-1.3-3.2M16.5 12v2a2 2 0 0 0 4 0V12a8.5 8.5 0 1 0-2.5 6.1" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
