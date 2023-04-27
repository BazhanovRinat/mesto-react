function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <div className="element">
            <div className="element__delete"
                style=
                {{
                    backgroundImage: `url(${"<%=require('./images/trash.svg')%>"})`,
                }} />
            <img className="element__image" onClick={handleClick}
                style=
                {{
                    backgroundImage: `url(${card.link})`,
                    backgroundSize: "cover",
                }} />
            <div className="element__item">
                <h2 className="element__name">{card.name}</h2>
                <div className="element__like-area">
                    <button type="button" className="element__button"></button>
                    <p className="element__like-count">{card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card