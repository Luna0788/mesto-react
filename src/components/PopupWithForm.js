function PopupWithForm({ title, name, buttonText, children, isOpen, onClose }) {
    return (
        <div className={`popup popup_type_${name}${isOpen ? ' popup_opened' : ''}`}>
            <div className={`popup__container popup__container_type_${name}`}>
                <h2 className='popup__heading'>{ title }</h2>
                <form name={`${name}-form`} className={`popup__${name}-form popup__edit-form`} noValidate>
                    <fieldset className="popup__input-container">
                        { children }
                        <button className={`button popup__button button_type_save`} type="submit">{ buttonText }</button>
                    </fieldset>
                </form>
                <button type="button" aria-label="Закрыть" className="button popup__toggle" onClick={ onClose }></button>
            </div>
        </div>
    );
}

export default PopupWithForm;