import styled from './Menu.module.scss';
import Sacola from '../../images/sacola.svg';
import Carrinho from '../../images/carrinho.svg';


const Menu = ({ menuOpen, onClick }) => {
    return (
        <div className={styled.menu}>
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
            <div onClick={onClick} className={`${styled.icone} ${menuOpen ? styled.open : ''}`}>
                <div className={styled.iconLeft}></div>
                <div className={styled.iconRight}></div>
            </div>
        </div>
    )
}

export default Menu