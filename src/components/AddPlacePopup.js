import React, { useState, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup(props) {

    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    function handleName(e) {
        setName(e.target.value);
    }

    function handleLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: name,
            link: link
        });
    }

    return (
        <PopupWithForm name="add" title="Новое место" submitTitle={"Сохранить"} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
        >
            <input id="place-name-input" className="popup__input popup__input_name_place-name" name="name"
                type="text" placeholder="Название" required minLength="2" maxLength="30" onChange={handleName}/>
            <span className="place-name-input-error popup__input-error"></span>
            <input id="link-input" className="popup__input popup__input_name_link" name="link" type="url"
                placeholder="Ссылка на картику" required onChange={handleLink}/>
            <span className="link-input-error popup__input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup