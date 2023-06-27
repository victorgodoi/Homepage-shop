import styled from './App.module.scss';

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
            <img src='/images/Stylish.png' width='134' height='49' />
            <img src='/images/embaixoDoLogo.png' width='133' height='13' />
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
              <li><img src='/images/sacola.png' width='24' height='24' /></li>
              <li><img src='/images/carrinho.png' width='24' height='24' /></li>
            </ul>
          </nav>
        </header>
        <div id={styled.box1}>
          <img src='/images/FotoBox1.png' width='837' height='722' />
          <div>
            <img src='/images/Foto2Box1.png' width='808' height='342' />
            <img src='/images/Foto3Box1.png' width='808' height='309' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
