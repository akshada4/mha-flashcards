import {ReactComponent as Sprite} from './icons.svg'

const Button = ({ id, className, page, setPage, disable }) => {
	const changePage = () => {
		if (id === 'previous') {
			setPage(page-1);
		}
		else if (id === 'next') {
			setPage(page+1);
		}
		let a = className;
		console.log(a)
	}

	return (		
		<button className={className} 
			onClick={changePage}
			disabled={disable}>
		<Sprite />
			<svg>
				<use xlinkHref='#arrow-down-sign-to-navigate' />
			</svg>			
		</button >
	)
}

export default Button;