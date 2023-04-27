import React from "react"
import { api } from "../utils/Api.js"
import Card from "../components/Card.js"

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

    const [userName, setUserName] = React.useState("")
    const [userDescription, setUserDescription] = React.useState("")
    const [userAvatar, setUserAvatar] = React.useState("")
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
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
    })

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
                    <button className="profile__avatar-button" onClick={() => onEditAvatar()}></button>
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__button profile__edit-button" onClick={() => onEditProfile()}></button>
                        <p className="profile__about">{userDescription}</p>
                    </div>
                </div>
                <button type="button" className="profile__button profile__add-button" onClick={() => onAddPlace()}></button>
            </section>
            <section className="elements">
                {cards.map((card, i) => (
                    <Card key={i} card={card} onCardClick={onCardClick}/>
                ))}
            </section>
        </main>
    )
}

export default Main