// src/components/Navbar.tsx
import { useState } from 'react'

export default function Navbar({ darkmode, setDarkmode }) {

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <nav className="relative w-full py-4">
                {/* Fondo translúcido */}
                <div
                    className="
              absolute inset-0
              backdrop-blur-md
              shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]
            "
                />

                {/* Contenido encima */}
                <div className="relative z-10 flex justify-center items-center">
                    <ul className="flex justify-center items-center gap-10 sm:gap-14 text-sm font-medium text-slate-800 dark:text-slate-200">
                        <li>
                            <a
                                href="#about"
                                className="transition-colors hover:text-indigo-600 dark:hover:text-cyan-300"
                            >
                                About me
                            </a>
                        </li>
                        <li>
                            <a
                                href="#experience"
                                className="transition-colors hover:text-indigo-600 dark:hover:text-cyan-300"
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a
                                href="#technologies"
                                className="transition-colors hover:text-indigo-600 dark:hover:text-cyan-300"
                            >
                                Technologies
                            </a>
                        </li>
                        <li>
                            <a
                                href="#funfacts"
                                className="transition-colors hover:text-indigo-600 dark:hover:text-cyan-300"
                            >
                                Fun facts
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="transition-colors hover:text-indigo-600 dark:hover:text-cyan-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Botón de tema */}
                    <button
                        onClick={() => setDarkmode(!darkmode)}
                        type="button"
                        aria-label="Toggle theme"
                        className="
                absolute right-6 top-1/2 -translate-y-1/2
                inline-flex h-9 w-9 items-center justify-center
                rounded-full border border-black/10 dark:border-white/10
                bg-white/70 dark:bg-white/10
                shadow-sm
                hover:opacity-90 active:scale-[.98]
                transition
              "
                    >
                        {darkmode ? (
                            // Icono de sol para cambiar a modo claro
                            <svg
                                className="w-5 h-5 text-slate-800 dark:text-slate-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
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
                            // Icono de luna para cambiar a modo oscuro
                            <svg
                                className="w-5 h-5 text-slate-800 dark:text-slate-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
        </header>
    );
}
