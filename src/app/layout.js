import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { AuthProvider } from "@/app/context/AuthContext";
import { headers } from "next/headers";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "NoorAI - Plateforme d’éducation AI",
    description:
        "Rejoignez NoorAI, la révolution pédagogique avec l'intelligence artificielle pour un apprentissage innovant.",
};

export default function RootLayout({ children }) {
    // Get the current URL path on the server side
    const headersList = headers();
    const referer = headersList.get("referer") || "";
    // Extract pathname from referer or default to "/"
    const url = referer ? new URL(referer) : null;
    const currentPathname = url ? url.pathname : "/";

    return (
        <html lang="fr">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-auto overflow-x-hidden`}
        >
        <AuthProvider>
            {/* Pass pathname as prop to Header */}
            <Header currentPathname={currentPathname} />
            <main>{children}</main>
        </AuthProvider>
        </body>
        </html>
    );
}
