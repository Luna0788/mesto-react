import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
  <div>
    <Header/>
    <Main/>
    <Footer/>

    

    <div className="popup popup_type_profile-edit">
      <div className="popup__container">
        <h2 className='popup__heading'>Редактировать профиль</h2>
        <form name="edit-form" className="popup__edit-form" novalidate>
          <fieldset className="popup__input-container">
            <label className="popup__field">
              <input type="text" id="name-input" className="popup__input popup__input_type_name" name="name" placeholder="Имя" required minlength="2" maxlength="40"/>
              <span className="popup__input-error name-input-error"></span>
            </label>
            <label className="popup__field">
              <input type="text" id="about-input" className="popup__input popup__input_type_additional" name="additional" placeholder="О себе" required minlength="2" maxlength="200"/>
              <span className="popup__input-error about-input-error"></span>
            </label>
          </fieldset>
          <button className="button popup__button button_type_save" type="submit">Сохранить</button>
        </form>
        <button type="button" aria-label="Закрыть" className="button popup__toggle"></button>
      </div>
    </div>

    <div className="popup popup_type_new-place">
      <div className="popup__container">
        <h2 className='popup__heading'>Новое место</h2>
        <form name="new-place-form" className="popup__edit-form" novalidate>
          <fieldset className="popup__input-container">
            <label className="popup__field">
              <input type="text" id="place-name-input" className="popup__input popup__input_type_place-name" name="place-name" placeholder="Название" required minlength="2" maxlength="30"/>
              <span className="popup__input-error place-name-input-error"></span>
            </label>
            <label className="popup__field">
              <input type="url" id="picture-ref-input" className="popup__input popup__input_type_picture-ref" name="picture-ref" placeholder="Ссылка на картинку" required/>
              <span className="popup__input-error picture-ref-input-error"></span>
            </label>
          </fieldset>
          <button className="button popup__button button_type_save" type="submit">Создать</button>
        </form>
        <button type="button" aria-label="Закрыть" className="button popup__toggle"></button>
      </div>
    </div>

    <div className="popup popup_type_avatar-edit">
      <div className="popup__container popup__container_type_avatar">
        <h2 className='popup__heading'>Обновить аватар</h2>
        <form name="avatar-edit-form" className="popup__edit-form" novalidate>
          <fieldset className="popup__input-container">
            <label className="popup__field">
              <input type="url" id="avatar-ref-input" className="popup__input popup__input_type_avatar-ref" name="avatar-ref" placeholder="Ссылка на картинку" required/>
              <span className="popup__input-error avatar-ref-input-error"></span>
            </label>
          </fieldset>
          <button className="button popup__button button_type_save" type="submit">Сохранить</button>
        </form>
        <button type="button" aria-label="Закрыть" className="button popup__toggle"></button>
      </div>
    </div>

    <div className="popup popup_type_image">
      <div className="popup__container popup__container_type_image">
        <img src="#" alt="'." className="popup__image"/>
        <h2 className='popup__heading popup__heading_type_image'></h2>
        <button type="button" aria-label="Закрыть" className="button popup__toggle"></button>
      </div>
    </div>

    <div className="popup popup_type_confirmation">
      <div className="popup__container popup__container_type_confirmation">
        <h2 className='popup__heading'>Вы уверены?</h2>
          <form name="confirmation-form" className="popup__confirmation-form popup__edit-form" novalidate>
            <fieldset className="popup__input-container">
              <button className="button popup__button button_type_confirmation button_type_save" type="submit">Да</button>
          </fieldset>
        </form>
        <button type="button" aria-label="Закрыть" className="button popup__toggle"></button>
      </div>
    </div>

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
