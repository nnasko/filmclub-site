"use client"
import { NextUIProvider } from "@nextui-org/react"
import Navigation from "./components/Navigation"
import Main from "./components/Main"
export default function Home() {
  return (
    <NextUIProvider>
      <main className="dark">
        <Navigation />
        <Main />
      </main>
    </NextUIProvider>
  )
}
