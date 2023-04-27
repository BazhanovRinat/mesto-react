import { api } from "../utils/Api.js"
import Card from "../components/Card.js"
import React, { useState, useEffect } from 'react';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

    const [userName, setUserName] = useState("")
    const [userDescription, setUserDescription] = useState("")
    const [userAvatar, setUserAvatar] = useState("")
    const [cards, setCards] = useState([])

    useEffect(() => {
        api.profileDataInstall()
            .then((data) => {
                setUserName(data.name)
                setUserDescription(data.about)
                setUserAvatar(data.avatar)
            })
            .catch((error) => {
                console.log(`${error}`);
            })

        api.getInitialCards()
            .then((data) => {
                setCards(data)
            })
            .catch((error) => {
                console.log(`${error}`);
            })
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__user">
                    <img className="profile__avatar" src="<%=require('./images/avatar.png')%>" alt="Ваш Аватар"
                        style=
                        {{
                            backgroundImage: `url(${userAvatar})`,
                            backgroundSize: "cover",
                            fontSize: 0
                        }} />
                    <button className="profile__avatar-button" onClick={onEditAvatar}></button>
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__button profile__edit-button" onClick={onEditProfile}></button>
                        <p className="profile__about">{userDescription}</p>
                    </div>
                </div>
                <button type="button" className="profile__button profile__add-button" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card) => (
                    <Card key={card._id} card={card} onCardClick={onCardClick} />
                ))}
            </section>
        </main>
    )
}

export default Main