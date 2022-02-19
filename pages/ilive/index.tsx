import type { NextPage } from 'next'
import Footer from '../../components/ilive/Footer'
import GetStarted from '../../components/ilive/GetStarted'
import Hero from '../../components/ilive/Hero'
import HowItWorks from '../../components/ilive/HowItWorks'
import LatestHouses from '../../components/ilive/LatestHouses'
import Properties from '../../components/ilive/Properties'

const ILive: NextPage = () => {

    return <main>
        <Hero />
        <Properties />
        <HowItWorks />
        <LatestHouses />
        <GetStarted />
        <Footer />
    </main>
}

export default ILive
