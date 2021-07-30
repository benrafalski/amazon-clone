import { Link } from 'react-router-dom'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from '../reducer'
import { useStateValue } from '../StateProvider'
import '../styles/Payment.css'
import CheckoutProduct from './CheckoutProduct'
import axios from '../axios.js'
import { useHistory } from 'react-router'

const Payment = () => {
    const history = useHistory()
    const [{ cart, user }, dispatch] = useStateValue()
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState(true)
    const stripe = useStripe()
    const elements = useElements()

    useEffect(() => {
        const getClientSecret = async () => {
            // stripe expects payment method in cents
            try {
                const res = await axios.post('/payments/create', { total: Math.ceil(getCartTotal(cart) * 100) })
                setClientSecret(res.data.clientSecret)
            } catch(err){
                console.log(err)
            }
        }

        getClientSecret()
    }, [cart])

    console.log(clientSecret)

    const handleSubmit = async (e) => {
        // stipe stuff here 
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // payment intent = payment confirmation
            setSucceeded(true)
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        }) 
    }

    const handleChange = (e) => {
        // listen for changes in card element
        // display any errors as the customer types thier card details
        setDisabled(e.empty)
        setError(e.error && e.error.message)
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout ({cart?.length} items) - 
                    <Link to='/checkout' style={{ textDecoration:'none', color: '#000000' }}>
                        &#160;Back to Cart
                    </Link>
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 react lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {cart.length > 0 ? (cart.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))) : <p>No Items In Cart</p>}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment__price__container'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
