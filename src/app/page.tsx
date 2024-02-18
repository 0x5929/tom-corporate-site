import Hero from '@/components/ui/Hero'
import Content from '@/components/features/Content'

export default function Home(): JSX.Element {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-black">
            <Hero />
            <Content />
        </main>
    )
}
