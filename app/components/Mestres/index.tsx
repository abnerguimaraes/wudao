"use client";

import classes from './styles.module.css';

import { useState, useEffect } from "react";
import { useStore } from "../../context/StoreContext";

import routes from "../Navbar/routes";

import Title from "../Title";
import P from '../P';

function Mestres() {
  const { dispatch } = useStore();
  useEffect(() => {
    const updateEstiloFromHash = () => {
      const currentHash = window.location.hash || '#Cefas';
      const label = routes.find((route) => route.path === currentHash)?.label || "Roberto Cefas"
      setMestre(currentHash);
      dispatch({ type: "SET_ROUTE", payload: label });      
    };
    updateEstiloFromHash();

    window.addEventListener("hashchange", updateEstiloFromHash);
    
    return () => {
      window.removeEventListener("hashchange", updateEstiloFromHash);
    };
  }, [dispatch]);

  const [mestre, setMestre] = useState("#Cefas");

  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <Title text="MESTRES" altColor={true} />
      </div>
      <div className={classes.imgContentCtn}>
        <div className={classes.navContentCtn}>
          <div className={classes.navTitle}>
            <span
              id="fernando" data-section="fernando"
              className={`${classes.navItem} ${mestre !== "#cefas" && mestre !== "#melo" ? classes.active : ""}`}
              onClick={() => setMestre("#fernando")}
            >
              Shifu Fernando
            </span>
            <span
              id="melo" data-section="melo"
              className={`${classes.navItem} ${mestre == "#melo" ? classes.active : ""}`}
              onClick={() => setMestre("#melo")}
            >
              Luis Mello
            </span>
            <span
              id="cefas" data-section="cefas"
              className={`${classes.navItem} ${mestre === "#cefas" ? classes.active : ""}`}
              onClick={() => setMestre("#cefas")}
            >
              Cefas
            </span>
          </div>
          {mestre !== '#cefas' && mestre !== '#melo' && <div className={classes.contentTitle}>
            <P 
              text="Shifu Fernando – A Jornada de um Mestre"
            />
            <P
              text="O Shifu Fernando iniciou sua trajetória no Kung Fu ainda criança, aos 8 anos
              de idade, na Escola União Tonlon Kung Fu do Brasil, sob a orientação do respeitado
              Mestre Wagner Irineu. Desde o início, seu treinamento foi focado no poderoso estilo
              Louva-a-Deus 7 Estrelas (Qi Xing Tang Lang Quan, 七星螳螂拳), um dos mais refinados e
              estratégicos sistemas de combate dentro do Kung Fu tradicional."
            />
            <P
              text="Com anos de dedicação e disciplina, Shifu Fernando aprimorou suas habilidades e
              expandiu seus conhecimentos em outras vertentes do Kung Fu Tradicional. Hoje, ele é o
              fundador da Wǔguǎn 武馆 Kung Fu Tradicional, uma escola criada para preservar e transmitir
              o conhecimento adquirido ao longo de sua jornada marcial. Seu compromisso vai além do
              ensino técnico, valorizando os princípios da tradição, da filosofia e da cultura chinesa."
            />
            <P
              text="A Linhagem e os Mestres que Guiaram Seu Caminho: Shifu Fernando sempre buscou aprender
              com os melhores mestres, mantendo-se fiel à tradição e ao legado do Kung Fu. Sua formação é 
              marcada por grandes referências no meio marcial:"
            />
            <P 
              text="Mestre Wagner Irineu 師父 (Shifu) – Mestre Pai Seu primeiro mentor, responsável por sua
              iniciação no Louva-a-Deus 7 Estrelas e por plantar a semente de sua paixão pelas artes marciais."
            />
            <P 
              text="Mestre Luís Mello 師父 (Shifu) – Mestre Pai Atualmente, Shifu Fernando segue os ensinamentos
              do Mestre Luís Mello, que o auxilia no aprimoramento técnico e filosófico, especialmente no Shaolin
              do Norte (Bei Shaolin Quan, 北少林拳) e em outras tradições do Kung Fu."
            />
            <P 
              text="Mestre Teddy Lai 師公 (Shīgōng) – Mestre Avô Herdeiro de uma linhagem tradicional e mestre do
              Louva-a-Deus 7 Estrelas, Mestre Teddy Lai é uma das grandes influências na jornada de Shifu Fernando.
              Além do Louva-a-Deus, ele também lhe transmitiu os fundamentos do raro e poderoso Macaco de Ferro
              (Tie Hou Quan, 铁猴拳)."
            />
            <P 
              text="O Legado que Continua: Atualmente, Shifu Fernando segue a linhagem tradicional do Louva-a-Deus 7
              Estrelas, mantendo viva a herança transmitida por Mestre Teddy Lai. Além disso, ele se dedica ao estudo
              e aperfeiçoamento de outras técnicas, como o Macaco de Ferro e os sistemas do Shaolin do Norte, sob a
              orientação de Mestre Luís Mello."
            />
            <P 
              text="Seu compromisso é compartilhar com seus alunos não apenas a parte técnica do Kung Fu, mas também 
              seus ensinamentos filosóficos, promovendo o desenvolvimento físico, mental e espiritual. Na Wǔguǎn 武馆
              Kung Fu Tradicional, Shifu Fernando mantém viva a tradição do Kung Fu, transmitindo os valores de seus mestres
              para as próximas gerações. Aqui, cada treino é um passo na jornada do autoconhecimento e da evolução marcial."
            />
          </div>}
          {mestre == '#melo' && <div className={classes.contentTitle}>
            <P 
              text="Shifu Luis Mello (Shì Xíng Luó 释行羅)"
            />
            <P
              text="Minha jornada nas artes marciais começou aos 7 anos, inspirado pelos 
              filmes de Bruce Lee, Shaw Brothers e Golden Harvest. A combinação de movimentos
              poderosos e narrativas dramáticas moldou a minha vida. Aos 11 anos, iniciei no
              Karatê, mas foi aos 12 que encontrei minha verdadeira paixão no Kung Fu Wing Chun,
              treinando na lendária escola de Marco Natali."
            />
            <P
              text="Durante a juventude, explorei diversas artes marciais, incluindo Hung Gar,
              Louva-a-deus, Garra de Águia, Sanda, Boxe, Jiu Jitsu, Tae Kwon Do e Muay Thai, na
              histórica Academia Combat Sport. Minha formação foi enriquecida por estudos de filosofia
              clássica, medicina tradicional chinesa, caligrafia, xadrez, e cerimônia do chá."
            />
            <P
              text="Ao longo de três décadas, dediquei-me às armas do Kung Fu, aprofundando-me nos seus
              segredos e histórias. Tornei-me também especialista em Qigong. No campo espiritual, fui
              iniciado no Budismo no Templo Tzon Kwan e estudei no Templo Zulai, culminando como discípulo
              direto do Venerável Mestre Shideyang do Templo Shaolin e de Sifu Teddy Lai de Hong Kong."
            />
          </div>}
          {mestre == '#cefas' && <div className={classes.contentTitle}>
            <P 
              text="Mestre Roberto Cefas 師父 ( Shifu) - Mestre Pai"
            />
            <P 
              text="Roberto Cefas hoje é o principal responsável por ensinar o
              louva deus 7 estrelas da linhagem tradicional e também o louva deus 
              de Taiji para o Shifu Fernando, mantendo viva a tradição e conhecimento 
              das técnicas de louva"
            />
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Mestres;
