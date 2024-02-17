import Hero from '@/components/ui/Hero'

export default function Home(): JSX.Element {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-16 bg-black">
            <Hero />
        </main>
    )
}
