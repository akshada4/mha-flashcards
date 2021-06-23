const FlashCard = ({ firstName, lastName, quirk, background }) => {
	const backgroundImage = require('../images/'+ background).default;
	const style = {backgroundImage: `url(${backgroundImage})`};

	return (
		<div className="flash-card" style={style}>
			<div>
				<h3>{lastName} {firstName}</h3>
				<p>Quirk: {quirk}</p>
			</div>
		</div>
		)
};


export default FlashCard;