import '../styles/CheckoutProduct.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone'
import { useStateValue } from '../StateProvider'

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
    const [{ cart }, dispatch] = useStateValue()

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className='checkout__product'>
            <img src={image}/>
            <div className='checkout__product__info'>
                <p className='checkout__product__title'>{title}</p>
                <p className='checkout__product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkout__product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarTwoToneIcon/>
                        ))
                    }
                </div>
                {!hideButton && <button onClick={removeFromCart}>Remove from Cart</button>}
            </div>
        </div>
    )
}

export default CheckoutProduct
