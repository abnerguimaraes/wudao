import Title from '@/app/components/Title';
import P from './components/P';
import classes from './style.module.css';

export default function Home() {
  return (<section className={classes.main}>
    <div className={classes.content}>
      <Title text={'História da Escola Wǔguǎn 武馆 Kung Fu Tradicional'}/>
      <P text='A Wǔguǎn 武馆 Kung Fu Tradicional nasceu de um sonho, um desejo profundo de preservar e 
              transmitir a essência do verdadeiro Kung Fu. Desde a infância, a paixão pelas artes marciais
              chinesas e pelo legado milenar do Templo Shaolin serviu como inspiração para a criação de
              uma escola que honrasse as tradições, a filosofia e os valores dessa arte.'
      />
      <P text='Mais do que um espaço de treinamento, a Wǔguǎn 武馆 é um refúgio para aqueles que buscam 
              desenvolver não apenas a técnica, mas também o espírito e a disciplina que o Kung Fu ensina.
              Nossa escola se dedica ao ensino das técnicas tradicionais do Kung Fu, abrangendo estilos 
              internos e externos, além do domínio de armas clássicas chinesas, defesa pessoal, condicionamento
              físico e alongamento.'
      />
      <P text='Porém, o Kung Fu vai além do combate. Ele é uma jornada de autoconhecimento e superação,
              onde corpo e mente se alinham para alcançar um estado de equilíbrio e harmonia. Por isso,
              na Wǔguǎn 武馆, também valorizamos a riqueza cultural que envolve essa arte, ensinando a
              história, a filosofia e os princípios morais que moldaram os grandes mestres do passado.'
      />
      
      <P text='Seja você um praticante iniciante ou experiente, nossa escola está aberta para todos que 
              desejam trilhar esse caminho com dedicação, respeito e perseverança.'
      />
      
      <P text='Bem-vindos à Wǔguǎn 武馆 Kung Fu Tradicional, onde tradição, técnica e cultura se unem para
              formar verdadeiros artistas marciais.'
      />
    </div>
  </section>);
}
