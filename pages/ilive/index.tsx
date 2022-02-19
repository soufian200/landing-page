import type { NextPage } from 'next'
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
    </main>
}

export default ILive
