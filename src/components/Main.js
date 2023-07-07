function Main() {
    function handleEditAvatarClick() {
        const popupFormEditAvatar = document.querySelector('.popup_type_avatar-edit');
        popupFormEditAvatar.classList.add('popup_opened');
    }

    function handleEditProfileClick() {
        const popupFormEditAvatar = document.querySelector('.popup_type_profile-edit');
        popupFormEditAvatar.classList.add('popup_opened');
    }

    function handleAddPlaceClick() {
        const popupFormEditAvatar = document.querySelector('.popup_type_new-place');
        popupFormEditAvatar.classList.add('popup_opened');
    }
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__main">
                    <img src="<%=require('./images/avatar.jpg')%>" alt="Аватар пользователя" classNameName="profile__avatar"/>
                    <div className="profile__avatar-overlay" onClick={handleEditAvatarClick}></div>
                    <div className="profile__info">
                        <div className="profile__name-wrapper">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button className="button button_type_edit" aria-label="Редактировать" type="button" onClick={handleEditProfileClick}></button>
                        </div>
                        <p className="profile__additional">Исследователь океана</p>
                    </div>
                </div>
                <button className="button button_type_add" aria-label="Добавить" type="button" onClick={handleAddPlaceClick}></button>
            </section>

            <section className="elements">
                <ul className="element-list"></ul>
            </section>
        </main>
    );
}

export default Main;