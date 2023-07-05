import styled from './ProductsList.module.scss';

const ProductsList = ({ title, images }) => {
    return (
        < div id={styled.box3} >
            <div className={styled.titleBox3}>
                <p>{title}</p>
                <p>View all</p>
            </div>
            <ul className={styled.card}>
                {images.map(item => {
                    return (
                        <li>
                            <div>
                                <img src={item} width='263' height='263' />
                                <div className={styled.textCard}>
                                    <p>Running shoes for men</p>
                                    <strong>$99</strong>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default ProductsList