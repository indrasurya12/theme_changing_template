import { Card } from "../ui/card"

const FeatureItem = ({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode
    title: string
    desc: string
}) => {
    return (
        <Card
            tabIndex={0}
            role="button"
            className="
        group relative cursor-pointer select-none p-6
        outline-none transition-all duration-200
        hover:-translate-y-1 hover:shadow-lg
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        active:translate-y-0 active:shadow-md
      "
        >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors duration-200 group-hover:bg-primary/10">
                <div className="transition-transform duration-200 group-hover:scale-110">
                    {icon}
                </div>
            </div>

            <h3 className="mb-2 font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
        </Card>
    )
}

export default FeatureItem

