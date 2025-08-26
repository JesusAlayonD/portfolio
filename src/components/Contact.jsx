// src/components/Contact.jsx
export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center px-6 lg:px-12"
        >
            <div className="mx-auto w-full max-w-6xl grid gap-10 md:gap-16 md:grid-cols-2">
                {/* Left — Copy */}
                <div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900 dark:text-slate-100">
                        Let’s make things
                        <br />
                        happen
                    </h2>

                    <a
                        href="mailto:jesusalayon@gmail.com"
                        className="mt-6 inline-flex items-center gap-3 text-slate-800 dark:text-slate-200"
                    >
                        {/* Mail icon */}
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                        >
                            <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
                            <path d="m3 7 9 6 9-6" />
                        </svg>
                        <span className="text-base">jesusalayon@gmail.com</span>
                    </a>
                </div>

                {/* Right — Form (solo UI) */}
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-5"
                >
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                            What’s your name?
                        </label>
                        <input
                            type="text"
                            placeholder="Luna"
                            className="mt-2 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                            What’s email?
                        </label>
                        <input
                            type="email"
                            placeholder="luna@email.com"
                            className="mt-2 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                            What’s the subject about?
                        </label>
                        <input
                            type="text"
                            placeholder="New Project"
                            className="mt-2 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                            What’s up?
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Hello!"
                            className="mt-2 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-sm
                    px-5 py-3 text-sm sm:text-base font-semibold 
                    shadow-lg shadow-slate-900/5
                    text-indigo-500
                    hover:opacity-95 active:scale-[.99]
                    border-2 border-indigo-500
                    dark:bg-indigo-500
                    dark:text-white
                    hover:cursor-pointer
                    "
                    >
                        Let’s get in touch
                    </button>
                </form>
            </div>
        </section>
    );
}
