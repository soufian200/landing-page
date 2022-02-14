import type { NextPage } from 'next'
import Hero from '../../components/ILearn/Hero'
import Services from '../../components/ILearn/Services'
import Testimonial from '../../components/ILearn/Testimonial'

const ILearn: NextPage = () => {

    return <main>
        <Hero />
        <Services />
        <Testimonial />
    </main>
}

export default ILearn
