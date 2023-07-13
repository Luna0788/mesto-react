function ImagePopup() {
    return (
        <div className="popup popup_type_image">
            <div className="popup__container popup__container_type_image">
                <img src="#" alt="'." className="popup__image"/>
                <h2 className='popup__heading popup__heading_type_image'></h2>
                <button type="button" aria-label="Закрыть" className="button popup__toggle"></button>
            </div>
        </div>
    );
}

export default ImagePopup;