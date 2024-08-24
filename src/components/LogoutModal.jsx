import React from 'react';
import './LogoutModal.css';

const LogoutModal = ({ visible, onConfirm, onCancel }) => {
    if (!visible) return null;

    return (
        <div className="logout-modal-overlay">
            <div className="logout-modal">
                <p>¿Estás seguro de que deseas salir?</p>
                <button onClick={onConfirm} className="confirm-button">Presiona para salir</button>
                <button onClick={onCancel} className="cancel-button">X</button>
            </div>
        </div>
    );
};

export default LogoutModal;
