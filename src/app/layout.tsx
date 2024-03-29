import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './layout.module.css'
import Header from '@/components/features/Header'
import Footer from '@/components/features/Footer'
import ScrollToTop from '@/components/features/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Tom Yu Law',
    description: 'Elemental Software Solutions',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html data-theme="dark" lang="en">
            <body className={`${inter.className} bg-black`}>
                <Header />
                <main className="w-full">
                    <div className={styles.mainContainer}>{children}</div>
                </main>
                <ScrollToTop />
                <Footer />
            </body>
        </html>
    )
}
