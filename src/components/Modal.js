import React from 'react'
import '../index.css'

const Modal = ({closeModal}) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className="title">
                    <h1>Are you sure?</h1>
                </div>
                <div className="body">
                    <p>The next page is awesome</p>
                </div>
                <div className="footer">
                    <button>Purchace</button>
                    <button onClick={() => closeModal(false)} id="cancelBtn">Cancel all</button>
                </div>
            </div>
        </div>
    )
}

export default Modal