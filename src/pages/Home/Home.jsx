import { Main, Svg } from './Home.styled';
import bird from '../../assets/bird.svg';

function Home() {
  return (
    <Main>
      <Svg src={bird} width="50%" alt="bird" />
    </Main>
  );
}

export default Home;
