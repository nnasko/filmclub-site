"use client"
import { NextUIProvider } from "@nextui-org/react"
import Navigation from "./components/Navigation"
import Main from "./components/Main"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <NextUIProvider>
      <main className="dark">
        <Navigation />
        <Main />
        <Footer />
      </main>
    </NextUIProvider>
  )
}
