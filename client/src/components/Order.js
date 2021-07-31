import '../styles/Order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'

const Order = ({ order }) => {
    console.log(order.created)
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className='order__id'>
                <small>{order.clientSecret}</small>
            </p>
            {order.cart?.map((item) => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))}
        </div>
    )
}

export default Order
