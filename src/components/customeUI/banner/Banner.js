import Container from '@/components/common/Container'
import Image from 'next/image'
import Link from 'next/link'

export default async function Banner() {
  // Fetch categories from an API
  const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/banner/getbannerone`)
  const data = await res.json()

 
  return (
  <Container>
    {data.data.map((item, index) => (
      <Link href={`/${item.href}`}><Image src={item.image} alt="banner" width={1920} height={400} className={`w-full mt-6 `} /></Link>

    ))}
  </Container>
  )
}
