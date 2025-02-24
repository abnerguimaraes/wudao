import Image from "next/image";
import fer1 from '@/public/fernando1.jpg';
import fer2 from '@/public/fernando2.jpg';

function fotos() {
  return (
    <section>
      <Image src={fer1} alt='fernando'/>
      <Image src={fer2} alt='fernando'/>
    </section>
  )
}

export default fotos;