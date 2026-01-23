"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/Theme/theme-control"
import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"

const GITHUB_URL = "https://github.com/Rjk-Jami"
const LINKEDIN_URL = "https://www.linkedin.com/in/raihanjamikhan"

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <Link href="#hero" className="flex items-center gap-2">
                    <span className="text-base font-semibold tracking-tight">KhanDevs</span>
                </Link>

                <div className="flex items-center gap-3">
                    <NavigationMenu className="hidden md:block">
                        <NavigationMenuList>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground" href="#how-it-works">
                                        How it works
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground" href="#features">
                                        Features
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
                            <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>

                        <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
                            <Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </Button>

                        <ModeToggle />

                    </div>
                </div>
            </div>
        </header>
    )
}
