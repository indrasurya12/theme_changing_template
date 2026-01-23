import FeatureItem from "@/components/Card/FeatureItem"
import { CheckCircle2, Laptop, Sun } from "lucide-react"

export default function FeaturesSection() {
    return (
        <section id="features" className="border-t bg-muted/40 min-h-screen flex items-center justify-center py-24">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-12 text-3xl font-bold tracking-tight text-center md:text-4xl">
                    Why use this template?
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <FeatureItem icon={<CheckCircle2 className="h-5 w-5 text-green-500" />} title="Production-ready" desc="Clean layout, tokens, and sensible defaults." />
                    <FeatureItem icon={<Laptop className="h-5 w-5 text-blue-500" />} title="Responsive" desc="Mobile-first sections that scale nicely." />
                    <FeatureItem icon={<Sun className="h-5 w-5 text-orange-500" />} title="Dark mode perfected" desc="No flicker, smooth transition, system support." />
                    <FeatureItem icon={<div className="h-5 w-5 font-bold text-primary">TS</div>} title="Type-safe" desc="TypeScript-friendly patterns and structure." />
                    <FeatureItem icon={<div className="h-5 w-5 font-bold text-primary">UI</div>} title="shadcn/ui" desc="Robust components with Tailwind tokens." />
                    <FeatureItem icon={<div className="h-5 w-5 font-bold text-primary">VT</div>} title="View transitions" desc="Premium switching animation built-in." />
                </div>
            </div>
        </section>
    )
}
