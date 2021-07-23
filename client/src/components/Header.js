import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

const Header = () => {
    return (
        <div className='header'>
            <img
                className='header__logo' 
                src='https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png'
            />
            <div className='header__search'>
                <input className='header__search__input' type='text'/>
                <SearchIcon className='header__search__icon'/>
            </div>
            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__option__line__one'>Hello Guest</span>
                    <span className='header__option__line__two'>Sign In</span>
                </div>
                <div className='header__option'>
                    <span className='header__option__line__one'>Returns</span>
                    <span className='header__option__line__two'>& Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__option__line__one'>Your</span>
                    <span className='header__option__line__two'>Prime</span>
                </div>
                <div className='header__option__basket'>
                    <ShoppingBasketIcon/>
                    <span className='header__option__line__two header__basket__count'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header