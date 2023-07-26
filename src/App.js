import styled from './App.module.scss';
import Stylish from './images/Stylish.png';
import EmbaixoDoLogo from './images/embaixoDoLogo.png';
import Sacola from './images/sacola.png';
import Carrinho from './images/carrinho.png';
import ProductsList from './components/ProductsList';
import FashionStore from './images/FashionStore.png';
import { useState, useEffect } from 'react';

/*quando não está usando css ou scss Modulos só precisa importar o estilo dessa forma por exemplo:
"import './App.scss';"
<div id = "nomeDoId"></div>
*/

function App() {

  const [featured, atualizarFeatured] = useState([])
  const [latest, atualizarLatest] = useState([])
  const [menuOpen, atualizarMenu] = useState(false)


  const fetchData = () => {
    fetch('https://mabkxpvmoabhozufruai.supabase.co/rest/v1/featured', {
      headers: {
        'apikey': process.env.REACT_APP_APIKEY,
        'Authorization': `Bearer ${process.env.REACT_APP_SECRET}`
      }
    }).then(async response => {
      const responseJson = await response.json()
      atualizarFeatured(responseJson)
    }).catch(erro => {
      console.log(erro.message)
    })

    fetch('https://mabkxpvmoabhozufruai.supabase.co/rest/v1/latest', {
      headers: {
        'apikey': process.env.REACT_APP_APIKEY,
        'Authorization': `Bearer ${process.env.REACT_APP_SECRET}`
      }
    }).then(async response => {
      const responseJson = await response.json()
      atualizarLatest(responseJson)
    }).catch(erro => {
      console.log(erro.message)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div id={styled.page}>
      <div className={styled.conteudo}>
        <header>
          <div className={styled.divEsq}>
            <img src={Stylish} width='134' height='49' />
            <img src={EmbaixoDoLogo} width='133' height='13' />
          </div>
          <div id={styled.mobileMenu} className={menuOpen ? styled.open : ''}>
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
          </div>
          <nav>
            <ul>
              <li className={styled.navMobile}>Home</li>
              <li>Men</li>
              <li>Women</li>
              <li className={styled.navMobile}>Trends</li>
              <li>Collections</li>
              <li>Sale</li>
              <li>Blog</li>
              <li><img src={Sacola} width='24' height='24' /></li>
              <li><img src={Carrinho} width='24' height='24' /></li>
            </ul>
          </nav>
          <div onClick={() => {
            atualizarMenu(valor => !valor)
          }} className={`${styled.menu} ${menuOpen ? styled.open : ''}`}>
            <div className={styled.iconLeft}></div>
            <div className={styled.iconRight}></div>
          </div>
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
        <ProductsList title='FEATURED PRODUCTS' data={featured} />
        <div id={styled.box4}>
          <div className={styled.divEsq}>
            <div>
              <h4>Minimal Collection</h4>
              <p>Shop Now</p>
            </div>
          </div>
          <div className={styled.divDir}>
            <div>
              <h5>Sneakers</h5>
              <p>Shop Now</p>
            </div>
          </div>
        </div>
        <ProductsList title='Latest Products' data={latest} />
        <div id={styled.box6}>
          <ul>
            <li>Info</li>
            <li>Track Your Order</li>
            <li>Our Blog</li>
            <li>Privacy policy</li>
            <li>Shipping</li>
            <li>Contact Us</li>
            <li>Help</li>
            <li>Community</li>
          </ul>
          <ul>
            <li>About Jatra</li>
            <li>Our Story</li>
            <li>Job Opportunities</li>
            <li>Wholesale</li>
            <li>Affiliates</li>
          </ul>
          <ul>
            <li>Women Clothing</li>
            <li>Intimates</li>
            <li>Accessories</li>
            <li>Shoes</li>
            <li>Beauty + Wellness</li>
            <li>Swim</li>
            <li>Activewear</li>
            <li>Sale</li>
          </ul>
          <ul>
            <li>Jeans</li>
            <li>Shop All Jeans</li>
            <li>New Jeans</li>
            <li>Flare Jeans</li>
            <li>High-Rise Jeans</li>
            <li>Skinny Jeans</li>
            <li>Wide-Leg Jeans</li>
            <li>Boyfriend Jeans</li>
            <li>Straight-Leg Jeans</li>
          </ul>
          <ul>
            <li>Mens Shoes</li>
            <li>Heels + Wedges</li>
            <li>Sandals</li>
            <li>Slippers</li>
            <li>Socks + Tights</li>
            <li>Top Rated</li>
            <li>Sale</li>
          </ul>
          <ul>
            <li>Mens Clothing</li>
            <li>T-Shirts</li>
            <li>Shirts</li>
            <li>Shorts</li>
            <li>Jeans</li>
            <li>Trousers</li>
            <li>Clothing Sets</li>
            <li>Ethnic Wear</li>
            <li>Sweatshirts</li>
            <li>Innerwear</li>
          </ul>
        </div>
      </div>
      <footer>
        <div>
          <p>© JATRA Copyrights 2021. Designed by <strong>Templates Jungle</strong></p>
          <img src={FashionStore} width='100%' height='auto' />
        </div>
      </footer>
    </div >
  );
}

export default App;
