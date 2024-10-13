import React from 'react';
import logo from '../../static/logo.svg'
import BurgerMenu from '../Burger'
import { useState } from 'react'
import css from './style.module.css'
import NavList from '../NavList';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const burgeHandler = () => {
		setIsOpen(!isOpen)
	}
	
	return (
		<header className={css.header}>
			<div className='container'>
				<div className={css.inner}>
					<a href='' className={css.logo}>
						<img src={logo} alt="logo" />
					</a>
					<BurgerMenu 
					isOpen={isOpen} 
					burgeHandler={burgeHandler}
					/>
					<NavList
					isOpen={isOpen}
					/>
				</div>
			</div>
		</header>
	)
}

export default Header