// src/components/FunFacts.jsx
import { useEffect, useRef, useState } from "react";

const ITEMS = [
    {
        title: "My best friend",
        text: `She's Luna! The crazy husky that changed my life.`,
        img: "/luna.jpg",
        imgRight: false,
    },
    {
        title: "Startup World Cup",
        text: "I was part of the regional final of Startup World Cup with Caribbean Digital Group. Where i manage to learn a lot form other startups and the judges. And manage to pitch in front of a lot of important people!",
        img: "/startup.jpg", // pon tu ruta
        imgRight: true,
    },
    {
        title: "I love TCG’s",
        text: `When i was a kid my cousins show me Yu-Gi-Oh and the rest is history. I’m really involve into card games like Pokemon and Yu-Gi-Oh. I love all the process behind try to win in a game where every match is totally different. Is like a puzzle with cute cards!`,
        img: "/tcg.jpg",
        imgRight: false,
    },
    // agrega más…
];

export default function FunFacts() {
    const [index, setIndex] = useState(0);
    const len = ITEMS.length;
    const touchStartX = useRef(null);
    const autoplayRef = useRef(null);

    // teclado
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // autoplay (opcional: comenta si no lo quieres)
    useEffect(() => {
        autoplayRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % len);
        }, 6000);
        return () => clearInterval(autoplayRef.current);
    }, [len]);

    const go = (i) => setIndex((i + len) % len);
    const next = () => go(index + 1);
    const prev = () => go(index - 1);

    // swipe
    const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
    const onTouchEnd = (e) => {
        if (touchStartX.current == null) return;
        const diff = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(diff) > 50) diff < 0 ? next() : prev();
        touchStartX.current = null;
    };

    return (
        <section
            id="funfacts"
            className="relative min-h-screen flex flex-col items-center justify-center px-6"
        >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 text-center">
                Fun facts
            </h2>

            {/* Carrusel */}
            <div
                className="relative mt-10 w-full max-w-6xl overflow-hidden rounded-2xl"
                onMouseEnter={() => clearInterval(autoplayRef.current)}
                onMouseLeave={() => {
                    clearInterval(autoplayRef.current);
                    autoplayRef.current = setInterval(() => setIndex((i) => (i + 1) % len), 6000);
                }}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                {/* Slides wrapper */}
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {ITEMS.map((it, i) => (
                        <Slide key={i} {...it} />
                    ))}
                </div>

                {/* Flechas */}
                <button
                    aria-label="Previous"
                    onClick={prev}
                    className="hover:cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:opacity-90"
                >
                    ‹
                </button>
                <button
                    aria-label="Next"
                    onClick={next}
                    className="hover:cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:opacity-90"
                >
                    ›
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {ITEMS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => go(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2.5 rounded-full transition-all ${index === i
                                ? "w-6 bg-slate-900 dark:bg-slate-100"
                                : "w-2.5 bg-slate-300 dark:bg-slate-600"
                                }`}
                        />
                    ))}
                </div>
            </div>
            {/* Reserva espacio por navbar fixed si la tienes */}
            {/* <div className="h-16" /> */}
        </section>
    );
}

function Slide({ title, text, img, imgRight }) {
    return (
        <article className="shrink-0 w-full">
            <div
                className={`
          grid items-center gap-8 md:gap-12
          md:grid-cols-2
        `}
            >
                {/* Texto */}
                <div className={`${imgRight ? "order-1" : "order-2"} px-2 md:px-6`}>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                        {title}
                    </h3>
                    <p className="mt-4 text-base md:text-lg leading-7 md:leading-8 text-slate-600 dark:text-slate-300">
                        {text}
                    </p>
                </div>

                {/* Imagen */}
                <div className={`${imgRight ? "order-2" : "order-1"} px-2 md:px-6`}>
                    <div className="aspect-[16/10] md:aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-slate-200/60 dark:ring-white/10 shadow-xl">
                        <img
                            src={img}
                            alt=""
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}
