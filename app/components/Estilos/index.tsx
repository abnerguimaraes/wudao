"use client";

import { useState, useEffect } from "react";
import { useStore } from "../../context/StoreContext";

import classes from './style.module.css';
import logoPB from '@/public/logoBW.png';
import routes from "../Navbar/routes";

import Title from "../Title";
import P from '../P';
import Image from "next/image";

function Estilos() {
  const { dispatch } = useStore();
  const [estilo, setEstilo] = useState("#mantis");

  useEffect(() => {
    // Atualiza o estado baseado no hash da URL
    const updateEstiloFromHash = () => {
      const currentHash = window.location.hash || '#mantis';
      const label = routes.find((route) => route.path === currentHash)?.label || "Louva a Deus"
      setEstilo(currentHash);
      dispatch({ type: "SET_ROUTE", payload: label });
      console.log('rodou' + label)
    };
    updateEstiloFromHash();

    window.addEventListener("hashchange", updateEstiloFromHash);
    
    return () => {
      window.removeEventListener("hashchange", updateEstiloFromHash);
    };
  }, [dispatch]);



  return (
    <div className={classes.main}>
      <Title text="ESTILOS" />
      <div className={classes.imgContentCtn}>
        <Image className={classes.imgLogoPB} src={logoPB} alt="logo preto e branco" />
        <div className={classes.navContentCtn}>
          <div className={classes.navTitle}>
            <span
              id="mantis" data-section="mantis"
              className={`${classes.navItem} ${estilo !== "#monkey" ? classes.active : ""}`}
              onClick={() => setEstilo("#mantis")}
            >
              Louva Deus
            </span>
            <span
              id="monkey" data-section="monkey"
              className={`${classes.navItem} ${estilo === "#monkey" ? classes.active : ""}`}
              onClick={() => setEstilo("#monkey")}
            >
              Macaco de Ferro
            </span>
          </div>
          {estilo !== '#monkey' && <div className={classes.contentTitle}>
            <span className={classes.title}>O estilo Louva-a-Deus e Wang Lang</span>
            <P 
              text="O Kung Fu do Louva-a-Deus (Tang Lang Quan, 螳螂拳) é um dos estilos
              mais icônicos do Kung Fu, criado pelo lendário mestre Wang Lang, um monge
              e artista marcial que viveu durante a Dinastia Ming. Segundo a tradição,
              Wang Lang desenvolveu esse sistema após observar os movimentos rápidos,
              precisos e letais de um louva-a-deus caçando sua presa. Impressionado
              pela eficiência do inseto, ele incorporou suas técnicas ao Kung Fu,
              criando um estilo que combina velocidade, ataques diretos e defesas
              estratégicas."
            />
            <P
              text="O Tang Lang Quan é conhecido por sua ênfase em golpes
              rápidos e curtos, agarramentos, desvios e contra-ataques ágeis. Seu
              treinamento fortalece a resistência física e mental, aprimorando a
              capacidade de resposta e a percepção no combate."
            />
          </div>}
          {estilo == '#monkey' && <div className={classes.contentTitle}>
            <span className={classes.title}>O Macaco de Ferro</span>
            <P 
              text="A China é um vasto país, com uma das maiores jurisdições em todo
              o mundo e seus muitos territórios  possuem áreas montanhosas onde vivem
              muitas espécies de macacos. Os mais conhecidos são os macacos de Emei Shan
              em Sichuan, mas também possuem incomuns macacos dourados Shaanxi, por esse
              motivo não é surpreendente ver muitas formas, técnicas e estilos associado
              com esses animais nas artes marciais chinesas. No folclore tradicional Chinês,
              também podemos ver muitas referencias a essa incomum forma de combate através
              do conto Wu Cheng 'In 'Journey to the West' divulgando o personagem principal
              o Rei Macaco Sun Wu Kong  e seus companheiros, em sua busca para recuperar os
              ensinamentos de Buda."
            />
            <P 
              text="Hoje, embora muitos tenham desaparidos,  ainda há alguns estilos, bastante
              raros, ministrados de forma mais tradicional e confidencial. Este é o caso do nosso
              estilo, Tit Hau Moon  'O macaco da porta de ferro'."
            />
            <P
              text="Esse estilo do macaco é nativo de Hubei  e, mais especificamente, da montanha
              da famosa heroína Mulan (Mulan Shan ). E foi lá, no berço do estilo que Mestre Tse
              Wing Ming foi aprender o estilo como o próprio nome sugere, o estilo é uma utilização
              das atitudes e características utilizadas pelos macacos para se defender de predadores.
              Na sua aplicação tradicional, ele não deve ser confundido com as formas  mais modernas
              do Wu Shu. O Tit Hau Moon é um sistema de combate com aplicações reais, pragmáticas e
              eficazes. É portanto, a imitar certas atitudes e utilizar de artifícios do macaco sem
              ser ridículo."
            />
            <P 
              text="Tecnicamente, este estilo é caracterizado por uma grande obra de convulsões e chaves,
              golpes nas pernas e em áreas elevadas, utilização de chutes, aplicação de quedas e técnicas
              de luta de chão. Os conceitos e estratégia em combate são simples: acertar onde dói! O
              macaco não hesita em usar as técnicas mais enganosas, e os seus objetivos são predominantemente,
              os olhos, a garganta e virilha. Seus movimentos são rápidos e ágeis, e a preferencia é por 
              utilizar as laterais e áreas menos obvias para o ataque evitando o centro e esquivando-se ao
              invés de lidar diretamente."
            />
            <P
              text="O estilo consiste em conjunto de técnicas de mãos livre, incluindo técnicas do macaco bêbado
              e cinco armas diferentes. Cada tipo de arma tem em sua aplicação a grande utilização de técnicas de
              mãos com conceitos próprios do macaco, o que aumenta a riqueza do sistema."
            />
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Estilos;
