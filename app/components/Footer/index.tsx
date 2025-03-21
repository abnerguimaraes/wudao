"use client";

import classes from './style.module.css';
import homeContent from '@/public/homeContent.png';

import facebook from '@/public/facebookWhite.png';
import instagram from '@/public/instagramWhite.png';
import whatsapp from '@/public/whatsappWhite.png';
import mail from '@/public/mailWhite.png';

import Image from 'next/image';

function Footer() {
  function openPage(destination) {
    let url = '';
    if(destination === 'whatsApp') {
      url = 'https://wa.me/+5511951535618';
    } else if (destination === 'facebook') {
      url = 'https://www.facebook.com/profile.php?id=100005911569047';
    } else if (destination === 'instagram') {
      url = 'https://www.instagram.com/shifu_fernando?igsh=Z3Qxd25wbTEyYnM0';
    } else {
      url = 'mailto:fernando.soarescamargoo@gmail.com?subject=Treino na Wu Guan'; 
    }

    window.open(url, '_blank');
  }

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <Image className={classes.image} src={homeContent} alt="Logo da academia" />
        <div className={classes.textContainer}>
          <div className={classes.text}>&quot;Desafie seus limites, transforme sua mente e corpo: o Kung Fu espera por você na academia!&quot;</div>
          <div className={classes.textSecondary}>(11) 951 535 618</div>
          <div className={classes.textSecondary}>Av Cesar Abraão, 211</div>
          <div className={classes.textSecondary}>Novo Osasco - Osasco/SP</div>
          <div className={classes.iconsCtn}>
          <div className={classes.iconItem} onClick={() => openPage('facebook')}>
            <Image alt="facebook" src={facebook} />
          </div>
          <div className={classes.iconItem} onClick={() => openPage('instagram')}>
            <Image alt="instagram" src={instagram} />
          </div>
          <div className={classes.iconItem} onClick={() => openPage('whatsApp')}>
            <Image alt="facebook" src={whatsapp} />
          </div>
          <div className={classes.iconItem} onClick={() => openPage('mail')}>
            <Image alt="facebook" src={mail} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;