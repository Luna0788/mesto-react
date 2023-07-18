import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


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

  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(
        (err) => {
          console.log(err);
      }
      );
  }

  function handleCardDelete(card) {
    api
    .deleteCard(card._id)
    .then(() => {
      setCards((cards) => cards.filter((c) => c._id !== card._id));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
        api
            .getInitialCards()
            .then((initialCards) => {
                setCards(initialCards);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

  React.useEffect(() => {
    api
        .getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
            console.log(err);
        });
  },[]);


  return (
    
  <div>
    <CurrentUserContext.Provider value={currentUser}>
      <Header/>
      <Main
        onEditProfile = { handleEditProfileClick }
        onAddPlace = { handleAddPlaceClick }
        onEditAvatar = { handleEditAvatarClick }
        onCardClick={ handleCardClick }
        onCardLike={ handleCardLike }
        onCardDelete={handleCardDelete}
        cards={ cards }
      />
      <Footer/>

      <PopupWithForm
        title = {'Редактировать профиль'}
        name = {'profile-edit'}
        buttonText = {'Сохранить'}
        isOpen={ isEditProfilePopupOpen }
        onClose={ closeAllPopups }
        >
          <label className="popup__field">
              <input type="text" id="name-input" className="popup__input popup__input_type_name" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
              <span className="popup__input-error name-input-error"></span>
            </label>
            <label className="popup__field">
                <input type="text" id="about-input" className="popup__input popup__input_type_additional" name="additional" placeholder="О себе" required minLength="2" maxLength="200" />
                <span className="popup__input-error about-input-error"></span>
            </label>
        </PopupWithForm>

      <PopupWithForm
        title = {'Новое место'}
        name = {'new-place'}
        buttonText = {'Создать'}
        isOpen={ isAddPlacePopupOpen }
        onClose={ closeAllPopups }
        >
          <label className="popup__field">
              <input type="text" id="place-name-input" className="popup__input popup__input_type_place-name" name="place-name" placeholder="Название" required minLength="2" maxLength="30"/>
              <span className="popup__input-error place-name-input-error"></span>
            </label>
            <label className="popup__field">
              <input type="url" id="picture-ref-input" className="popup__input popup__input_type_picture-ref" name="picture-ref" placeholder="Ссылка на картинку" required/>
              <span className="popup__input-error picture-ref-input-error"></span>
            </label>
        </PopupWithForm>

      <PopupWithForm
        title = {'Обновить аватар'}
        name = {'avatar-edit'}
        buttonText = {'Сохранить'}
        isOpen={ isEditAvatarPopupOpen }
        onClose={ closeAllPopups }
        >
          <label className="popup__field">
            <input type="url" id="avatar-ref-input" className="popup__input popup__input_type_avatar-ref" name="avatar-ref" placeholder="Ссылка на картинку" required/>
            <span className="popup__input-error avatar-ref-input-error"></span>
          </label>
        </PopupWithForm>

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
    </CurrentUserContext.Provider>
  </div>
  
  );
}

export default App;
