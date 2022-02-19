import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../../components/ilive/Footer'
import GetStarted from '../../components/ilive/GetStarted'
import Hero from '../../components/ilive/Hero'
import HowItWorks from '../../components/ilive/HowItWorks'
import LatestHouses from '../../components/ilive/LatestHouses'
import Properties from '../../components/ilive/Properties'

const ILive: NextPage = () => {

    return <main>
        <Head>
            <title>Welcome Ti iLive</title>
            <meta name="description" content="Welcome Ti iLive" />
        </Head>
        <Hero />
        <Properties />
        <HowItWorks />
        <LatestHouses />
        <GetStarted />
        <Footer />
    </main>
}

export default ILive
