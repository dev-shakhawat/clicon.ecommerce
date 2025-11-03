import Container from '@/components/common/Container'
import Image from 'next/image'
import bannerimg from "../../../../public/images/banner.png"

export default async function Banner() { 




  
 
  return (
  <Container> 
       <Image src={bannerimg} alt="banner"   className={`w-full mt-6  `} /> 
  </Container>
  )
}
