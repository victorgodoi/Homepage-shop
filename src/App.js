import styled from './App.module.scss';

/*quando não está usando css ou scss Modulos só precisa importar o estilo dessa forma por exemplo:
"import './App.scss';"
<div id = "nomeDoId"></div>
*/

function App() {
  return (
    <div id={styled.page}>
      <header>
        <div className={styled.conteudo}>
          <div className={styled.divEsq}>
            <img src='/images/Stylish.png' width='134' height='59' />
            <img src='/images/embaixoDoLogo.png' wdtch='133' height='20' />
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
              <li><img src='/images/carrinho.png' widtc='24' height='24' /></li>
              <li><img src='/images/sacola.png' widtc='24' height='24' /></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
