import { api } from "../utils/Api.js"
import Card from "../components/Card.js"
import React, { useState, useEffect } from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext.js"

function Main(props) {

    const profileData =  React.useContext(CurrentUserContext)

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__user">
                    <img className="profile__avatar" src="<%=require('./images/avatar.png')%>" alt="Ваш Аватар"
                        style=
                        {{
                            backgroundImage: `url(${profileData.avatar})`,
                            backgroundSize: "cover",
                            fontSize: 0
                        }} />
                    <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
                    <div className="profile__info">
                        <h1 className="profile__name">{profileData.name}</h1>
                        <button type="button" className="profile__button profile__edit-button" onClick={props.onEditProfile}></button>
                        <p className="profile__about">{profileData.about}</p>
                    </div>
                </div>
                <button type="button" className="profile__button profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                {props.cards.map((card) => (
                    <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
                ))}
            </section>
        </main>
    )
}

export default Main