import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'
import axios from '../axios.js'

const Login = ({ setCurrentUser, user }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get('/users')
            setUsers(res.data)
            //console.log(users)
        }

        fetchUsers()
    }, [])

    const addUser = async () => {
        const res = await axios.post('/users', { email: email, password: password })
    }

    const signIn = (e) => {
        e.preventDefault()
        for(let i = 0; i < users.length; i++){
            if(users[i].email === email){
                if(users[i].password === password){
                    setCurrentUser(users[i])
                    console.log('Signed in successfully')
                    return
                }else{
                    alert('incorrect password...try again')
                    return
                }
            }
        }
        alert('email is not registered')
    }

    const register = (e) => {
        e.preventDefault()
        for(let i = 0; i < users.length; i++){
            if(users[i].email === email){
                alert('Email already registered! Try signing in')
                return
            }
        }
        addUser()
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png' 
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input 
                        type='text' 
                        data-lpignore='true' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                        type='password' 
                        data-lpignore='true' 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button 
                        className='login__signin__button'
                        type='submit'
                        onClick={signIn}
                    >Continue</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button 
                    className='login__register__button'
                    onClick={register}
                >Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
