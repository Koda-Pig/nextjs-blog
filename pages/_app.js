// This is the only place you can export global CSS from
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}