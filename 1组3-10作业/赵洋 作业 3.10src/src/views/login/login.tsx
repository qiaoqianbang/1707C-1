import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../home/home.css'
export class Login extends Component {
    render() {
        return (
            <div>
               <header className='header'></header>
               <main className='main'> </main>
               <footer className='footer'>
               <NavLink to={'./home/first'} className='box1'>首页</NavLink>
                <NavLink to={'./home/my'} className='box2'>我的</NavLink>
               </footer>
               
            </div>
        );
    }
}

export default Login;
