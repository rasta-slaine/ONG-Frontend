

import BlogLayoutSection from "./BlogLayoutSection"
import Eventos from "./EventosSection"
import ContactSection from "./ContactSection"
import HeroSection from "./HeroSection"



const Home = () => {
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