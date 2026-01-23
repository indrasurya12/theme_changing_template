"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

type ThemeValue = "light" | "dark"

function canVT() {
    return typeof document !== "undefined" && "startViewTransition" in document
}

export function ModeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme()
    const btnRef = React.useRef<HTMLButtonElement | null>(null)

    const toggleThemeCircle = React.useCallback(() => {
        const current = (resolvedTheme ?? theme) as ThemeValue | "system" | undefined
        const next: ThemeValue = current === "dark" ? "light" : "dark"

        if (!canVT() || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setTheme(next)
            return
        }

        const rect = btnRef.current?.getBoundingClientRect()
        const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 24
        const y = rect ? rect.top + rect.height / 2 : 24

        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        )

        const vt = document.startViewTransition(() => setTheme(next))

        vt.ready.then(() => {
            document.documentElement.animate(
                [
                    { clipPath: `circle(0px at ${x}px ${y}px)` },
                    { clipPath: `circle(${endRadius}px at ${x}px ${y}px)` },
                ],
                {
                    duration: 800,
                    easing: "cubic-bezier(.2,.8,.2,1)",
                    pseudoElement: "::view-transition-new(root)",
                }
            )
        })
    }, [resolvedTheme, theme, setTheme])

    return (
        <Button
            ref={btnRef}
            variant="outline"
            size="icon"
            onClick={toggleThemeCircle}
            aria-label="Toggle theme"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
    )
}
