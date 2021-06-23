import FlashCard from './FlashCard'

const FlashCards = ({ loading, cards }) => {
	return (
		<div className="flash-cards">{loading ? 
			<p className="loading">Loading</p> : 
			cards.map((card, index) => ( 
			<FlashCard key={card.id}
			index={index}
			firstName={card.firstName}
			lastName={card.lastName}
			quirk={card.quirk}
			background={card.background}
			/>))}
		</div>
		)
}

export default FlashCards;