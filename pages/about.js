import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import joshNnoodle from '../public/joshNnoodle.jpg'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      {/* <Head> = <head> */}
      <Head>
        <title>About us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className="title">About</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <Image
          src={joshNnoodle}
          height={144}
          width={144}
          alt="Josh Koter"
        />
    </Layout>
  )
}