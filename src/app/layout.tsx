import '@/styles/globals.css'
import {ThemeProvider} from '@/components/providers/theme-provider'
import React from "react";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}

