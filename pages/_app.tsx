import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Sora } from '@next/font/google'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400','700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={sora.className}>
      <Component {...pageProps} />
    </main>
  )
}
