import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/box.scss';
import "@/styles/app.scss";
import "@/styles/layout.main.scss";
import "@/styles/layout.foot.scss";
import "@/styles/layout.head.scss";
import "@/styles/portfolio.scss";
import "@/styles/profile.scss";
import "@/styles/ui.scss";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
