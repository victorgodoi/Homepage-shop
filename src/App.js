import styled from './App.module.scss';
import Stylish from './images/Stylish.png';
import EmbaixoDoLogo from './images/embaixoDoLogo.png';
import Sacola from './images/sacola.png';
import Carrinho from './images/carrinho.png';
import Foto1Box3 from './images/Foto1Box3.jpg';
import Foto2Box3 from './images/Foto2Box3.jpg';

/*quando não está usando css ou scss Modulos só precisa importar o estilo dessa forma por exemplo:
"import './App.scss';"
<div id = "nomeDoId"></div>
*/

function App() {
  return (
    <div id={styled.page}>
      <div className={styled.conteudo}>
        <header>
          <div className={styled.divEsq}>
            <img src={Stylish} width='134' height='49' />
            <img src={EmbaixoDoLogo} width='133' height='13' />
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Men</li>
              <li>Women</li>
              <li>Trends</li>
              <li>Collections</li>
              <li>Sale</li>
              <li>Blog</li>
              <li><img src={Sacola} width='24' height='24' /></li>
              <li><img src={Carrinho} width='24' height='24' /></li>
            </ul>
          </nav>
        </header>
        <div id={styled.box1}>
          <div className={styled.divEsq}>
            <div>
              <h1>Stylish shoes for Women</h1>
              <p>Shop Now</p>
            </div>
          </div>
          <div className={styled.divDir}>
            <div className={styled.divDir1}>
              <div>
                <h2>Sports Wear</h2>
                <p>Shop Now</p>
              </div>
            </div>
            <div className={styled.divDir2}>
              <div>
                <h3>Fashion Shoes</h3>
                <p>Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styled.conteudo2}>
        <div id={styled.box2}>
          <div className={styled.divEsq}>
            <div>
              <p>10% OFF Discount Coupons</p>
              <p>Subscribe us to get 10% OFF on all the purchases</p>
            </div>
          </div>
          <div className={styled.divDir}>
            <div>
              <button>EMAIL ME</button>
            </div>
          </div>
        </div>
        <div id={styled.box3}>
          <div className={styled.titleBox3}>
            <p>FEATURED PRODUCTS</p>
            <p>View all</p>
          </div>
          <div className={styled.card}>
            <ul>
              <li>
                <div>
                  <img src={Foto1Box3} width='263' height='263' />
                  <p>Running shoes for men</p>
                  <p>$99</p>
                </div>
              </li>
              <li>
                <div>
                  <img src={Foto2Box3} width='263' height='263' />
                  <p></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div >
  );
}

export default App;
