function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
    
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__main">
                    <img src="<%=require('./images/avatar.jpg')%>" alt="Аватар пользователя" className="profile__avatar"/>
                    <div className="profile__avatar-overlay" onClick={ onEditAvatar }></div>
                    <div className="profile__info">
                        <div className="profile__name-wrapper">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button className="button button_type_edit" aria-label="Редактировать" type="button" onClick={ onEditProfile }></button>
                        </div>
                        <p className="profile__additional">Исследователь океана</p>
                    </div>
                </div>
                <button className="button button_type_add" aria-label="Добавить" type="button" onClick={ onAddPlace }></button>
            </section>

            <section className="elements">
                <ul className="element-list"></ul>
            </section>
        </main>
    );
}

export default Main;