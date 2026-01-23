import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const GITHUB_URL = "https://github.com/Rjk-Jami"
const LINKEDIN_URL = "https://www.linkedin.com/in/raihanjamikhan"

export default function Footer() {
    return (
        <footer className="border-t bg-background/50 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">Theme Changing Template by KhanDevs</p>
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} KhanDevs
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </footer>
    )
}
