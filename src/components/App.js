import '../index.css';
import Header from '../components/Header.js';
import Main from "../components/Main.js";
import Footer from "../components/Footer.js"
import PopupWithForm from "../components/PopupWithForm.js"
import ImagePopup from "../components/ImagePopup.js"
import React, { useState } from 'react';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(false)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)

  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)

  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)

  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard(false)
  }

  return (

    <div className="app" >
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm name="edit" title="Редактировать профиль" submitTitle={"Сохранить"} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
      >
        <input id="name-input" className="popup__input popup__input_name_name" name="name" type="text"
          placeholder="Имя" required minLength="2" maxLength="40" />
        <span className="name-input-error popup__input-error"></span>
        <input id="about-input" className="popup__input popup__input_name_about" name="about" type="text"
          placeholder="О себе" required minLength="2" maxLength="200" />
        <span className="about-input-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="add" title="Новое место" submitTitle={"Сохранить"} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
      >
        <input id="place-name-input" className="popup__input popup__input_name_place-name" name="name"
          type="text" placeholder="Название" required minLength="2" maxLength="30" />
        <span className="place-name-input-error popup__input-error"></span>
        <input id="link-input" className="popup__input popup__input_name_link" name="link" type="url"
          placeholder="Ссылка на картику" required />
        <span className="link-input-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" submitTitle={"Да"}
      >

      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар" submitTitle={"Сохранить"} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
      >
        <input id="popup-avatar__input" className="popup__input popup__input_new-avatar" name="avatar"
          type="url" placeholder="Название" required />
        <span className="popup-avatar__input-error popup__input-error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>




      {/* <div className="popup popup-delete">
        <div className="popup__container popup-delete__container">
          <button type="button" className="popup__close"></button>
          <h2 className="popup__title popup-delete__title">Вы уверены?</h2>
          <button type="submit" className="popup__submit popup-delete__submit">Да</button>
        </div>
      </div> */}

      <template id="new-cards">
        <div className="element">
          <img className="element__delete" src="<%=require('./images/trash.svg')%>" />
          <img className="element__image" />
          <div className="element__item">
            <h2 className="element__name"></h2>
            <div className="element__like-area">
              <button type="button" className="element__button"></button>
              <p className="element__like-count"></p>
            </div>
          </div>
        </div>
      </template>
    </div >
  )
}


export default App;
