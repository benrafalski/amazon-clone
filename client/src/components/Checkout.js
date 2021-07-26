import '../styles/Checkout.css'
import Subtotal from '../components/Subtotal'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'

const Checkout = () => {
    const [{ cart }, dispatch] = useStateValue()

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'/>
                <div>
                    <h2 className='checkout__title'>
                        Shopping Cart
                    </h2>
                    <div>
                        {cart.length > 0 ? 
                            (cart.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            )))
                            : (<p className='checkout__empty'>Cart Is Empty</p>)   
                        }
                    </div>
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
