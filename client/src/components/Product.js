import '../styles/Product.css'
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';

const Product = ({ title, price, rating, image }) => {    
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
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
