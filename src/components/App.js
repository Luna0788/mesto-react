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
  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard();
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  return (
  <div>
    <Header/>
    <Main
      onEditProfile = { handleEditProfileClick }
      onAddPlace = { handleAddPlaceClick }
      onEditAvatar = { handleEditAvatarClick }
      onCardClick={ handleCardClick }
    />
    <Footer/>

    <PopupWithForm
      title = {'Редактировать профиль'}
      name = {'profile-edit'}
      buttonText = {'Сохранить'}
      children={(
        <>
          <label className="popup__field">
            <input type="text" id="name-input" className="popup__input popup__input_type_name" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
            <span className="popup__input-error name-input-error"></span>
          </label>
          <label className="popup__field">
              <input type="text" id="about-input" className="popup__input popup__input_type_additional" name="additional" placeholder="О себе" required minLength="2" maxLength="200" />
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
            <input type="text" id="place-name-input" className="popup__input popup__input_type_place-name" name="place-name" placeholder="Название" required minLength="2" maxLength="30"/>
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

    <ImagePopup
      card={ selectedCard }
      onClose={ closeAllPopups }
    />

</div>

    
  );
}

export default App;
