import classes from './styles.module.css';
import Title from '../Title';
import Image from 'next/image';
import fernando1 from '@/public/galeria/fernando1.jpg';
import fernando2 from '@/public/galeria/box.jpg';
import fernando3 from '@/public/galeria/mestre.jpg';
import fernando4 from '@/public/galeria/mestrealuno.jpg';
import fernando5 from '@/public/galeria/preta.jpg';
import fernando6 from '@/public/galeria/tonlon.jpg';
import fernando7 from '@/public/galeria/newHouse1.jpeg';
import fernando8 from '@/public/galeria/newHouse2.jpeg';


function Galeria() {
  const fotos = [
    fernando1,
    fernando2,
    fernando3,
    fernando4,
    fernando5,
    fernando6,
    fernando7,
    fernando8,
  ];

  return (
    <div className={classes.main}>
      <Title text="GALERIA DE FOTOS" altColor={true} />
      <div className={classes.fotoContainer}>
        {fotos.map((foto, index) => (
          <div key={index} className={classes.fotoItem}>
            <Image 
              src={foto}
              alt={`Foto ${index + 1}`}
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;
