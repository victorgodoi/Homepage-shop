import styled from './ProductsList.module.scss';
import { useMediaQuery } from 'react-responsive';

const ProductsList = ({ title, images }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })
    let imagesFilter = images

    if (isMobile === true) {
        imagesFilter = images.filter((item, index) => {
            if (index < 3) {
                return true
            } else {
                return false
            }
        })
    }

    return (
        < div className={styled.box3} >
            <div className={styled.titleBox3}>
                <p>{title}</p>
                <p>View all</p>
            </div>
            <ul className={styled.card}>
                {imagesFilter.map(item => {
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