import '../styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'

const Subtotal = () => {
    const [{ cart, user }, dispatch] = useStateValue()

    const getTotal = () => {
        let total = 0
        for(let i = 0; i < cart.length; i++){
            total += cart[i].price
        }
        return `$${total}`
    }
    
    console.log(cart.map((item) => item.price))
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items) :
                            <strong>{getTotal()}</strong> {/* // change this */}
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0} // change this
                displayType={'text'}
                thousandSeparator="true"
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
