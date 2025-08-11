"use client";

import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { AuthProvider } from "@/app/context/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    useEffect(() => {
        AOS.init({
            duration: 800, // animation duration in ms
            once: true,    // whether animation should happen only once
        });
    }, []);

    return (
        <html lang="fr">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-auto overflow-x-hidden`}
        >
        <AuthProvider>
            <Header />
            <main>{children}</main>
        </AuthProvider>
        </body>
        </html>
    );
}
