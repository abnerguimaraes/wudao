"use client";

import classes from './styles.module.css';
import Title from '../Title';
import P from '../P';

import facebook from '@/public/facebookBlack.png';
import instagram from '@/public/instagramBlack.png';
import whatsapp from '@/public/whatsappBlack.png';
import mail from '@/public/mailBlack.png';

import Image from 'next/image';
import { useState } from 'react';

function Contato() {
  const [active, setActive] = useState('hor')

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
    <div className={classes.titleDesk}>
      <Title  text="VENHA TREINAR COM A GENTE"/>
    </div>
    <div className={classes.titleMobile}>
      <Title text="VENHA TREINAR"/>
    </div>
    <div className={classes.navigation}>
      <span className={`${classes.navigationItem} ${active === 'hor' ? classes.active : null}`} onClick={() => setActive('hor')}>Horários</span>
      <span className={`${classes.navigationItem} ${active === 'pac' ? classes.active : null}`} onClick={() => setActive('pac')}>Pacote de aulas</span>
      <span className={`${classes.navigationItem} ${active === 'con' ? classes.active : null}`} onClick={() => setActive('con')}>Contato</span>
    </div>
    <div className={classes.contentCtn}>
      <div className={`${classes.itemContent} ${active === 'hor' ? classes.mobShow : classes.mobHide }`}>
        <h2 className={classes.h2}>Horários</h2>
        <h3 className={classes.h3}>Segunda a Sexta</h3>
        <P text="08h - Kung Fu Tradicional" />
        <P text="09h - Kung Fu Tradicional" />
        <P text="17h - Kung Fu Tradicional" />
        <P text="18h - Kung Fu Tradicional" />
        <P text="19h - Kung Fu Tradicional" />
        <P text="20h - Kung Fu Tradicional" />
      </div>
      <div className={`${classes.itemContent} ${active === 'pac' ? classes.mobShow : classes.mobHide }`}>
        <h2 className={classes.h2}>Pacote de Aulas</h2>
        <h3 className={classes.h3}>Anual</h3>
        <P text="1x por semana" />
        <P text="2x por semana" />
        <P text="Treino livre" />
        <h3 className={classes.h3}>Anual</h3>
        <P text="1x por semana" />
        <P text="2x por semana" />
        <P text="Treino livre" />
      </div>
      <div className={`${classes.itemContent} ${active === 'con' ? classes.mobShow : classes.mobHide }`}>
        <h2 className={classes.h2}>Contato</h2>
        <P text="(11) 951 535 618" />
        <div className={classes.space}/>
        <P text="Av Cesar Abraão, 211" />
        <P text="Novo Osasco - Osasco/SP" />
        <div className={classes.space} />
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

export default Contato;