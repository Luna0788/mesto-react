function Card ({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    };

    return (
        <li  className="element">
            <img src={ card.link } alt={`Фотография ${ card.name }`} className="element__photo" onClick={ handleClick }/>
            <div className="element__description">
                <p className="element__name">{ card.name }</p>
                <div className="element__like-container">
                    <button className="button element__like-button" type="button"></button>
                    <p className="element__like-counter">{ card.likes && card.likes.length ? card.likes.length : ''}</p>
                </div>
            </div>
            <button type="button" aria-label="Удалить" className="button element__delete-button"></button>
        </li>
    )
}

export default Card;