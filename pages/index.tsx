import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return <main>
    <Head>
      <title>Landing Page</title>
      <meta name="description" content="Landing Page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='flex p-20'>
      {
        [
          {
            title: "iLive",
            href: "ilive",
            img: {
              src: '/page1.png',
              alt: "iLive"
            }
          },
          {
            title: "iLearn",
            href: "ilearn",
            img: {
              src: '/page2.png',
              alt: "iLearn"
            }
          }
        ].map((page, index) => {
          return <Link key={index} href={page.href} passHref >
            <div className={`border hover:shadow-md cursor-pointer rounded-md mr-8`}>
              <div className='border-b' >
                <Image
                  alt={page.img.alt}
                  src={page.img.src}
                  height={300}
                  width={470}

                />
              </div>
              <div className='p-5'>
                <h1 className='font-bold text-3xl capitalize text-slate-700' >{page.title}</h1>
              </div>
            </div>
          </Link>
        })
      }
    </div>
  </main>
}

export default Home
