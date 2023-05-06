import PopupWithForm from "./PopupWithForm.js";
import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const currentUser = React.useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [props.isOpen, currentUser]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDesc(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name: name,
            about: description,
        });
    }

    return (
        <PopupWithForm name="edit" title="Редактировать профиль" submitTitle={"Сохранить"} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
        >
            <input id="name-input" className="popup__input popup__input_name_name" name="name" type="text"
                placeholder="Имя" required minLength="2" maxLength="40" onChange={handleChangeName} />
            <span className="name-input-error popup__input-error"></span>
            <input id="about-input" className="popup__input popup__input_name_about" name="about" type="text"
                placeholder="О себе" required minLength="2" maxLength="200" onChange={handleChangeDesc} />
            <span className="about-input-error popup__input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup