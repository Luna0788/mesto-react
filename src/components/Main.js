import React from "react";
import api from "../utils/Api";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();

    React.useEffect(() => {
        api
            .getUserInfo()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch((err) => {
                console.log(err);
            })
    });

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__main">
                    <img src={ userAvatar } alt="Аватар пользователя" className="profile__avatar"/>
                    <div className="profile__avatar-overlay" onClick={ onEditAvatar }></div>
                    <div className="profile__info">
                        <div className="profile__name-wrapper">
                            <h1 className="profile__name">{ userName }</h1>
                            <button className="button button_type_edit" aria-label="Редактировать" type="button" onClick={ onEditProfile }></button>
                        </div>
                        <p className="profile__additional">{ userDescription }</p>
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