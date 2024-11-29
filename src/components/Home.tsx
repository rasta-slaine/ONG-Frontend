


import BlogLayoutSection from "./BlogLayoutSection"
import Eventos from "./EventosSection"
import ContactSection from "./ContactSection"
import HeroSection from "./HeroSection"




type Props = {}

const Home = (props:Props) => {
  return (
    <div>
        <HeroSection />
        <Eventos />
        <BlogLayoutSection/>        
        <ContactSection />

    </div>
  )
}

export default Home