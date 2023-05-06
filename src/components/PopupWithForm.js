function PopupWithForm(props) {
    return (
        <div className={props.isOpen ? `popup popup-${props.name} popup_opened` : `popup popup-${props.name}`}>
            <div className={`popup__container popup-${props.name}__container`}>
                <button type="button" className="popup__close popup-edit__close" onClick={() => props.onClose()}></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup-${props.name}__form`} noValidate onSubmit={props.onSubmit}>
                    <fieldset className="popup__item"
                    >
                        {props.children}
                        <button type="submit" className={`popup__submit popup-${props.name}__submit`}>{props.submitTitle}</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm