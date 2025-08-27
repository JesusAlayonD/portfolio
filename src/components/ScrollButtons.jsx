// src/components/ScrollNav.jsx
import { useEffect, useRef, useState } from "react";

export default function ScrollButtons() {
    const [sections, setSections] = useState([]);
    const [index, setIndex] = useState(0);
    const observerRef = useRef(null);

    // Observar qué sección está visible
    useEffect(() => {
        const secs = Array.from(document.querySelectorAll("section[id]"));
        setSections(secs);

        const opts = { root: null, threshold: 0.5, rootMargin: "-20% 0px -20% 0px" };
        observerRef.current = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((e) => e.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (!visible) return;
            const i = secs.findIndex((s) => s === visible.target);
            if (i !== -1) setIndex(i);
        }, opts);

        secs.forEach((s) => observerRef.current.observe(s));
        return () => observerRef.current?.disconnect();
    }, []);

    const go = (i) => {
        if (!sections.length) return;
        const next = Math.min(Math.max(i, 0), sections.length - 1);
        sections[next].scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const up = () => go(index - 1);
    const down = () => go(index + 1);

    const atFirst = index <= 0;
    const atLast = index >= sections.length - 1;

    return (
        <div
            className="
        fixed bottom-6 right-6 z-50
        hidden md:flex flex-col items-center gap-4
      "
        >
            {/* Arriba (oculto en la primera sección) */}
            {!atFirst && (
                <button
                    onClick={up}
                    aria-label="Go to previous section"
                    className="
            w-14 h-14 md:w-16 md:h-16
            rounded-full
            bg-indigo-500 text-white
            shadow-xl border border-black/10
            hover:opacity-90 active:scale-[.98]
            hover:cursor-pointer
            transition
          "
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="mx-auto w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M6 15l6-6 6 6" />
                    </svg>
                </button>
            )}

            {/* Abajo (oculto en la última sección) */}
            {!atLast && (
                <button
                    onClick={down}
                    aria-label="Go to next section"
                    className="
            w-14 h-14 md:w-16 md:h-16
            rounded-full
            bg-indigo-500 text-white
            shadow-xl border border-black/10
            hover:opacity-90 active:scale-[.98]
            hover:cursor-pointer
            transition
          "
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="mx-auto w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M18 9l-6 6-6-6" />
                    </svg>
                </button>
            )}
        </div>
    );
}
