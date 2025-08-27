import { useEffect, useState } from "react";

export default function Navbar({ darkmode, setDarkmode }) {
    const [open, setOpen] = useState(false);

    // Cerrar con ESC y al navegar
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const closeMenu = () => setOpen(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <nav className="relative w-full py-4">
                {/* Fondo translúcido (glass) */}
                <div
                    className="
            absolute inset-0
            backdrop-blur-xl
          "
                />

                {/* Contenido */}
                <div className="relative z-10 flex md:mt-0 mt-4 items-center justify-center">
                    {/* Botón hamburguesa (solo móvil) */}
                    <button
                        type="button"
                        aria-label="Open menu"
                        aria-controls="mobile-menu"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                        className="
              md:hidden absolute left-4 top-1/2 -translate-y-1/2
              inline-flex h-10 w-10 items-center justify-center
              rounded-full border border-black/10 dark:border-white/10
              bg-white/70 dark:bg-white/10
              shadow-sm hover:opacity-90 active:scale-[.98] transition
              text-slate-800 dark:text-slate-200
            "
                    >
                        {/* ícono hamburguesa / close */}
                        {open ? (
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 6h18M3 12h18M3 18h18" />
                            </svg>
                        )}
                    </button>

                    {/* Links centrados (desktop) */}
                    <ul className="hidden md:flex justify-center items-center gap-10 lg:gap-14 text-sm font-medium text-slate-800 dark:text-slate-200">
                        <li><a href="#about" className="transition-colors hover:text-indigo-600 dark:hover:text-cyan-300">About me</a></li>
                        <li><a href="#experience" className="transition-colors hover:text-indigo-600 dark:hover:text-cyan-300">Experience</a></li>
                        <li><a href="#technologies" className="transition-colors hover:text-indigo-600 dark:hover:text-cyan-300">Technologies</a></li>
                        <li><a href="#funfacts" className="transition-colors hover:text-indigo-600 dark:hover:text-cyan-300">Fun facts</a></li>
                        <li><a href="#contact" className="transition-colors hover:text-indigo-600 dark:hover:text-cyan-300">Contact</a></li>
                    </ul>

                    {/* Botón darkmode (siempre visible, derecha) */}
                    <button
                        onClick={() => setDarkmode((v) => !v)}
                        type="button"
                        aria-label="Toggle theme"
                        className="
              absolute right-4 top-1/2 -translate-y-1/2
              inline-flex h-10 w-10 items-center justify-center
              rounded-full border border-black/10 dark:border-white/10
              bg-white/70 dark:bg-white/10
              shadow-sm hover:opacity-90 active:scale-[.98] transition
              text-slate-800 dark:text-slate-200
            "
                    >
                        {darkmode ? (
                            // sol
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        ) : (
                            // luna
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Menú móvil desplegable */}
                <div
                    id="mobile-menu"
                    className={`
            md:hidden absolute inset-x-0 top-full origin-top
            ${open ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0 pointer-events-none"}
            transition transform duration-200
          `}
                >
                    <div
                        className="
              mx-3 mt-2 rounded-2xl
              bg-white/80 dark:bg-slate-900/70
              backdrop-blur-lg border border-black/10 dark:border-white/10
              shadow-xl
            "
                    >
                        <ul className="flex flex-col py-2 text-base font-medium text-slate-800 dark:text-slate-200">
                            {[
                                { href: "#about", label: "About me" },
                                { href: "#experience", label: "Experience" },
                                { href: "#technologies", label: "Technologies" },
                                { href: "#funfacts", label: "Fun facts" },
                                { href: "#contact", label: "Contact" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="block px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
