import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  return (
  <div>
    <Header/>
    <Main
      onEditProfile = { handleEditProfileClick }
      onAddPlace = { handleAddPlaceClick }
      onEditAvatar = { handleEditAvatarClick }
    />
    <Footer/>

    <PopupWithForm
      title = {'Редактировать профиль'}
      name = {'profile-edit'}
      buttonText = {'Сохранить'}
      children={(
        <>
          <label className="popup__field">
            <input type="text" id="name-input" className="popup__input popup__input_type_name" name="name" placeholder="Имя" required minlength="2" maxlength="40" />
            <span className="popup__input-error name-input-error"></span>
          </label>
          <label className="popup__field">
              <input type="text" id="about-input" className="popup__input popup__input_type_additional" name="additional" placeholder="О себе" required minlength="2" maxlength="200" />
              <span className="popup__input-error about-input-error"></span>
          </label>
        </>
      )}
      isOpen={ isEditProfilePopupOpen }
      onClose={ closeAllPopups }
    />

    <PopupWithForm
      title = {'Новое место'}
      name = {'new-place'}
      buttonText = {'Создать'}
      children={(
        <>
          <label className="popup__field">
            <input type="text" id="place-name-input" className="popup__input popup__input_type_place-name" name="place-name" placeholder="Название" required minlength="2" maxlength="30"/>
            <span className="popup__input-error place-name-input-error"></span>
          </label>
          <label className="popup__field">
            <input type="url" id="picture-ref-input" className="popup__input popup__input_type_picture-ref" name="picture-ref" placeholder="Ссылка на картинку" required/>
            <span className="popup__input-error picture-ref-input-error"></span>
          </label>
        </>
      )}
      isOpen={ isAddPlacePopupOpen }
      onClose={ closeAllPopups }
    />

    <PopupWithForm
      title = {'Обновить аватар'}
      name = {'avatar-edit'}
      buttonText = {'Сохранить'}
      children={(
        <>
          <label className="popup__field">
            <input type="url" id="avatar-ref-input" className="popup__input popup__input_type_avatar-ref" name="avatar-ref" placeholder="Ссылка на картинку" required/>
            <span className="popup__input-error avatar-ref-input-error"></span>
          </label>
        </>
      )}
      isOpen={ isEditAvatarPopupOpen }
      onClose={ closeAllPopups }
    />

    <PopupWithForm
      title = {'Вы уверены?'}
      name = {'confirmation'}
      buttonText = {'Да'}
      isOpen={ false }
      onClose={ closeAllPopups }
    />    

    <ImagePopup/>

    <template id="elementTemplate">
      <li className="element">
        <img src="#" alt="." className="element__photo"/>
        <div className="element__description">
          <p className="element__name"></p>
          <div className="element__like-container">
            <button className="button element__like-button" type="button"></button>
            <p className="element__like-counter"></p>
          </div>
        </div>
        <button type="button" aria-label="Удалить" className="button element__delete-button"></button>
      </li>
    </template>
</div>

    
  );
}

export default App;
