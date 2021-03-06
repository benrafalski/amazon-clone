import '../styles/Order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

const Order = ({ order }) => {
    return (
        <div className='order'>
            <h3>Order:</h3>
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
                    hideButton={true}
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h2 className='order__total'>Order - Total: {value}</h2>
                    </>
                )}
                decimalScale={2}
                value={order.amount}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
        </div>
    )
}

export default Order
