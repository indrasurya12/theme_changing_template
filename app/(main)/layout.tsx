import { ThemeProvider } from "@/components/Theme/theme-provider"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >{children}</ThemeProvider>
    )
}

export default layout