import React from 'react'
import css from "./style.module.css"
import { navList } from './utils'

const NavList = ({isOpen}) => {
	return (
		<nav className={isOpen? css.navigation+ " "+css.active:css.navigation}>
			<ul className={css.navigation__list}>

				{navList.map(({ id, name, slug }) => (
					<li className={css.navigation__item}>
						<a className={css.navigation__link} href={slug}>{name}</a>
					</li>
				))}

			</ul>
		</nav>
	)
}

export default NavList