export default function Hero() {
    return (
        <section id="hero"
            className="
          relative min-w-screen min-h-screen
        "
        >
            <div className="container mx-auto px-6 md:px-10">
                <div
                    className="
    min-h-screen     
    flex flex-col md:flex-row items-center justify-center 
    gap-10 md:gap-20 lg:gap-40
  "
                >

                    {/* Left — Text */}
                    <div className="max-w-xl md:max-w-2xl">
                        <h1
                            className="
                  text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight
                  text-slate-900
                  dark:text-white
                "
                        >
                            Hi i’m Jesus
                            <br />
                            Alayon
                        </h1>

                        <p
                            className="
                  mt-4 text-2xl sm:text-3xl font-semibold
                  text-slate-700
                  dark:text-slate-300
                "
                        >
                            Backend Developer
                        </p>

                        <p
                            className="
                  mt-4 text-base sm:text-lg leading-relaxed
                  text-slate-600
                  dark:text-slate-400
                "
                        >
                            I’m from Tabasco (not the sauce), Mexico and this is a little bit
                            about me!
                        </p>

                        <div className="mt-8">
                            <a
                                href="https://docs.google.com/document/d/1HJAfVnebq23gd5FPrdZA-IC4Ti9uwBup/edit?usp=sharing&ouid=102753054862664015286&rtpof=true&sd=true"
                                className="
                    inline-flex items-center justify-center rounded-sm
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
                                Check my resume!
                            </a>
                        </div>
                    </div>

                    {/* Right — Photo */}
                    <div className="shrink-0">
                        <div
                            className="
                  w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80
                  rounded-full overflow-hidden
                  ring-1 ring-slate-200 shadow-2xl
                  dark:ring-white/10
                "
                        >
                            {/* Reemplaza src por tu imagen */}
                            <img
                                src="/me.jpg"
                                alt="Jesus Alayon portrait"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sutil viñeta en dark para simular el degradado de tu mock */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-radial from-transparent via-transparent to-transparent dark:from-transparent dark:via-transparent"
            />
        </section>
    );
}
