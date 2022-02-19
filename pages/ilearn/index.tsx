import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../../components/ILearn/Footer'
import Hero from '../../components/ILearn/Hero'
import Services from '../../components/ILearn/Services'
import Subscribe from '../../components/ILearn/Subscribe'
import Testimonial from '../../components/ILearn/Testimonial'

const ILearn: NextPage = () => {

    return <main>
        <Head>
            <title>Welcome Ti iLearn</title>
            <meta name="description" content="Welcome Ti iLearn" />

        </Head>
        <Hero />
        <Services />
        <Testimonial />
        <Subscribe />
        <Footer />
    </main>
}

export default ILearn
