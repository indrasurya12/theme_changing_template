import { Card } from "../ui/card"

const StepCard = ({
    n,
    title,
    desc,
}: {
    n: string
    title: string
    desc: string
}) => {
    return (
        <Card
            tabIndex={0}
            role="group"
            className="
        group relative cursor-pointer select-none
        p-6 bg-card/50 backdrop-blur
        border-primary/20 outline-none
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-lg
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        active:translate-y-0 active:shadow-md
      "
        >
            <div
                className="
          mb-4 inline-flex h-10 w-10 items-center justify-center
          rounded-full bg-primary/10 text-primary
          transition-transform duration-200
          group-hover:scale-110
        "
            >
                {n}
            </div>

            <h3 className="mb-2 text-xl font-semibold transition-colors duration-200 group-hover:text-foreground">
                {title}
            </h3>

            <p className="text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">
                {desc}
            </p>
        </Card>
    )
}

export default StepCard

