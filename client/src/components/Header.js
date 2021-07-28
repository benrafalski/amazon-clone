import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'

const Header = ({ user }) => {
    const [{ cart }, dispatch] = useStateValue()


    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className='header__logo' 
                    src='https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png'
                />
            </Link>
            <div className='header__search'>
                <input className='header__search__input' type='text'/>
                <SearchIcon className='header__search__icon'/>
            </div>
            <div className='header__nav'>
            <Link to='/login' style={{ textDecoration: 'none' }}>
                <div className='header__option'>
                    <span className='header__option__line__one'>Hello { user.email ? user.email : 'Guest'}</span>
                    <span className='header__option__line__two' style={{ textDecoration: 'none' }}>Sign In</span>
                </div>
            </Link>
                <div className='header__option'>
                    <span className='header__option__line__one'>Returns</span>
                    <span className='header__option__line__two'>& Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__option__line__one'>Your</span>
                    <span className='header__option__line__two'>Prime</span>
                </div>
                <Link to='/checkout' style={{ textDecoration: 'none' }}>
                    <div className='header__option__basket'>
                        <ShoppingCartOutlinedIcon fontSize='large'/>
                        <span className='header__option__line__two header__basket__count'>{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
