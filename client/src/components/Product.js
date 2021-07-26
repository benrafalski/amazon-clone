import '../styles/Product.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';
import { useStateValue } from '../StateProvider';

const Product = ({ title, price, rating, image }) => {   
    const [{ cart }, dispatch] = useStateValue() 

    const addToCart = () => {
        //dispatch some action, item into data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                title: title,
                price: price,
                rating : rating,
                image: image,
            },
        })

    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <StarTwoToneIcon/>
                    ))}
                </div>
            </div>
            <img src={image}/>
            <button onClick={addToCart}>Add to Basket</button>
        </div>
    )
}

export default Product
