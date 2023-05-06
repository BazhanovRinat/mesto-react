import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext.js"

function Card(props) {

    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = (
        `element__button ${isLiked && 'element__button_active'}`
    );
    

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card)
    }

    function handleDeleteClick () {
        props.onCardDelete(props.card)
    }

    return (
        <div className="element">
            {isOwn && <div className="element__delete" onClick={handleDeleteClick}
                style=
                {{
                    backgroundImage: `url(${"<%=require('./images/trash.svg')%>"})`,
                }} />}
            <img className="element__image" onClick={handleClick}
                style=
                {{
                    backgroundImage: `url(${props.card.link})`,
                    backgroundSize: "cover",
                }} />
            <div className="element__item">
                <h2 className="element__name">{props.card.name}</h2>
                <div className="element__like-area">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <p className="element__like-count">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card