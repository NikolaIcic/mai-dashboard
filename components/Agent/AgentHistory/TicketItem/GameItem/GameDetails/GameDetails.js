import { useState } from 'react';
import PopupModal from '../../../../../Global/PopupModal/PopupModal';
import styles from './GameDetails.module.css';

const GameDetails = ({ game }) => {
    const [openModal, setOpenModal] = useState(false);
    const modalStyles = {
        width:'50%',
    }

    return (
        <>
            <button onClick={() => setOpenModal(true)} className={styles.viewButton}>View</button>

            <PopupModal openModal={openModal} closeModal={() => setOpenModal(false)} style={modalStyles}>

            </PopupModal>
        </>
    )
}

export default GameDetails