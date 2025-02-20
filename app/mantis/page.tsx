import classes from './style.module.css';
import Title from '@/app/components/Title';
import P from '@/app/components/P';

function mantis() {
  return (
    <section className={classes.main}>
      <div className={classes.content}>
        <Title text='O Estilo Louva-a-Deus e Wang Lang'/>
        <P text='O Kung Fu do Louva-a-Deus (Tang Lang Quan, 螳螂拳) é um dos estilos
                 mais icônicos do Kung Fu, criado pelo lendário mestre Wang Lang, um
                 monge e artista marcial que viveu durante a Dinastia Ming.'
        />
        <P text='Segundo a tradição, Wang Lang desenvolveu esse sistema após observar
                 os movimentos rápidos, precisos e letais de um louva-a-deus caçando
                 sua presa. Impressionado pela eficiência do inseto, ele incorporou
                 suas técnicas ao Kung Fu, criando um estilo que combina velocidade, 
                 ataques diretos e defesas estratégicas.'
        />
        <P text='O Tang Lang Quan é conhecido por sua ênfase em golpes rápidos e curtos,
                 agarramentos, desvios e contra-ataques ágeis. Seu treinamento fortalece
                 a resistência física e mental, aprimorando a capacidade de resposta e a
                 percepção no combate. '
        />
      </div>
    </section>
  )
}

export default mantis;