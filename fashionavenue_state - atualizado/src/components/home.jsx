
import '../css/styles.css';
import Carrossel from './carrossel';
import Destaques from './destaques';
import Galeria from './galeriaHome';


export default function Home(){
  return (
    <div className="App">

      <div className="carrossel">
      <Carrossel/>
      </div>
      <Destaques/>
    </div>
  );
}

