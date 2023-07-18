import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        })
    }

    return (
        <PopupWithForm
            title = {'Редактировать профиль'}
            formName = {'profile-edit'}
            buttonText = {'Сохранить'}
            isOpen={ isOpen }
            onClose={ onClose }
            onSubmit={ handleSubmit }
            >
            <label className="popup__field">
                <input type="text" value={name} onChange={e => setName(e.target.value)}  id="name-input" className="popup__input popup__input_type_name" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
                <span className="popup__input-error name-input-error"></span>
            </label>
            <label className="popup__field">
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} id="about-input" className="popup__input popup__input_type_additional" name="additional" placeholder="О себе" required minLength="2" maxLength="200" />
                <span className="popup__input-error about-input-error"></span>
            </label>
        </PopupWithForm>
    );
}