import { useState, useEffect } from 'react'
import styles from './PopupModal.module.css'

const PopupModal = ({ openModal, closeModal, children, style = null }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const getExternalStyles = () => {
        if (style)
            return style;
    }

    useEffect(() => {
        if (showModal)
            document.body.classList.add(styles.activeModal);
        else {
            document.body.classList.remove(styles.activeModal);
            closeModal();
        }
    }, [showModal]);

    useEffect(() => {
        if (openModal)
            setShowModal(true);
        else
            setShowModal(false);
    }, [openModal])

    return (
        <>
            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.overlay} onClick={toggleModal}></div>
                    <div className={styles.content} style={getExternalStyles()}>
                        {children}
                        <button onClick={toggleModal} className={styles.closeModal}>X</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default PopupModal