import styled from './ProductsList.module.scss';
import { useMediaQuery } from 'react-responsive';

const ProductsList = ({ title, data }) => {
    const isTablet = useMediaQuery({ query: '(max-width: 1000px) and (min-width: 811px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 810px)' })
    let dataFilter = data

    if (isTablet === true) {
        dataFilter = data?.filter((item, index) => {
            if (index < 3) {
                return true
            } else {
                return false
            }
        })
    }

    if (isMobile === true) {
        dataFilter = data?.filter((item, index) => {
            if (index < 1) {
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
                {dataFilter?.map(item => {
                    return (
                        <li key={item.title}>
                            <div>
                                <img src={item.image} width='263' height='263' />
                                <div className={styled.textCard}>
                                    <p>{item.title}</p>
                                    <strong>${item.price}</strong>
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