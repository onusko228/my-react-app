
import css from './style.module.css'

const BurgerMenu = ({isOpen,burgeHandler}) => {
	return (
		<>
			<button className={css.burger__icon} onClick={burgeHandler}>Menu
				<span className={isOpen ? css.open : css.closed}></span>
			</button>
		</>

	)

}

export default BurgerMenu;
