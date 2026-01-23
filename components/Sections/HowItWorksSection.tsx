import StepCard from "@/components/Card/StepCard"

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="border-t bg-muted/40 min-h-screen flex items-center justify-center py-24">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-14 md:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-center md:text-4xl">Under the hood</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-center">
                        We use the View Transitions API to capture old/new UI snapshots, then reveal the new theme
                        using a circular clip-path expanding from the toggle button.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <StepCard n="1" title="Capture view" desc="The browser snapshots the current UI before the theme updates." />
                    <StepCard n="2" title="Switch theme" desc="next-themes updates the class + CSS variables for the new theme." />
                    <StepCard n="3" title="Reveal smoothly" desc="A clip-path circle expands from the toggle button to cover the screen." />
                </div>
            </div>
        </section>
    )
}
