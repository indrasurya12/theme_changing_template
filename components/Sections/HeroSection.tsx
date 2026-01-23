import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
    return (
        <section id="hero" className="relative flex-1 overflow-hidden min-h-screen flex items-center justify-center">
            <div className="pointer-events-none absolute inset-0 z-0 select-none">
                <div
                    className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-[110px] opacity-25"
                    style={{ background: "radial-gradient(circle, hsl(var(--accent) / .55) 0%, transparent 70%)" }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
                <div className="mb-6 flex justify-center">
                    <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                        Theme Changing Template • KhanDevs
                    </Badge>
                </div>

                <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-center lg:text-6xl 2xl:text-7xl">
                    Production-ready{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                        theme architecture
                    </span>
                </h1>

                <p className="mx-auto mb-10 max-w-4xl text-sm text-muted-foreground text-center md:text-lg leading-relaxed">
                    A reference Next.js implementation for theme switching.
                    Uses CSS variables, class-based theming, and View Transitions to avoid
                    flicker, hydration issues, and inconsistent UI states.
                </p>


                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base shadow-sm transition-transform hover:scale-105" asChild>
                        <a href="#how-it-works">How it works</a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
