import React from 'react'
import  "../style/HeroSection.css"


type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className='Hero-section'>
          <h2>Biomedicina Ação Social </h2>
      <div className='Hero-section-ImageCover'></div>
        <div className='Hero-section-container'>
            <h3><strong className=''>Conheça Um Pouco  </strong> A Nossa  Historia </h3> 
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus purus, semper a tristique eget, dignissim vitae justo. 
                  Curabitur dignissim lacus augue, sed feugiat est fringilla ac. Donec libero nulla, maximus ac ipsum hendrerit, aliquam viverra risus. 
                  Aenean vitae molestie nisi. Cras blandit tortor id massa dignissim, quis aliquam justo scelerisque. Praesent id mi ut justo tempus ullamcorper quis et tellus. Vivamus a sapien arcu.
                  Curabitur libero nibh, cursus dictum nunc sit amet, scelerisque pretium odio. Nullam convallis dolor nisi, vel accumsan felis tincidunt volutpat. Nullam cursus nisi vel tellus cursus, eget pharetra ex tincidunt. 
                  Integer quis faucibus massa. Sed a tellus sit amet velit tempus placerat et quis enim. Maecenas porttitor velit in odio ornare hendrerit. Curabitur scelerisque sapien in mi pellentesque fringilla. Suspendisse potenti.
                  Donec nec turpis vel dolor commodo pulvinar vitae non tortor. Proin viverra consectetur imperdiet. Donec et lorem nec sapien lacinia laoreet in id turpis. Proin ultricies quam eu ex rutrum, ut porttitor augue condimentum. D
                  uis orci nulla, fringilla rutrum eleifend ut, malesuada a ex.  
            </p>
        </div>
    </div>
  )
}

export default HeroSection