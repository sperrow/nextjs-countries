import type { Metadata } from 'next';
import Link from 'next/link';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import { MoonIcon } from '@radix-ui/react-icons';

const nunito = Nunito_Sans({ subsets: ['latin'] });
const classes = `${nunito.className} `;

export const metadata: Metadata = {
    title: 'Countries',
    description: 'REST Countries API with color theme switcher',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={classes}>
            <body>
                <main className="flex min-h-screen flex-col items-center bg-light-mode-background">
                    <nav className="w-full flex items-center justify-between flex-wrap bg-white shadow-md py-6 lg:px-8">
                        <div className="flex items-center flex-shrink-0 mr-6">
                            <Link href="/">
                                <span className="font-bold lg:text-2xl tracking-tight px-6">Where in the world?</span>
                            </Link>
                        </div>
                        <div className="">
                            <button className="flex items-center justify-center text-md px-6 py-2">
                                <MoonIcon />
                                &nbsp;&nbsp;Dark Mode
                            </button>
                        </div>
                    </nav>
                    <div className="max-w-screen-2xl w-full block lg:py-14 lg:px-16">{children}</div>
                    <footer className="flex w-full flex items-center justify-center p-12">
                        <Link
                            href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
                            target="_blank"
                        >
                            FM
                        </Link>
                    </footer>
                </main>
            </body>
        </html>
    );
}
