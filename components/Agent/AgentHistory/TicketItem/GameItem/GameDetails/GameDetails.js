import { useState } from 'react';
import PopupModal from '../../../../../Global/PopupModal/PopupModal';
import styles from './GameDetails.module.css';

const GameDetails = ({ game }) => {
    const [openModal, setOpenModal] = useState(false);
    const modalStyles = {
        maxWidth: '36%',
        minWidth:'500px',
        height:'720px'
    }

    const getResultText = (value) => {
        if (value)
            return '✅';
        return '❌';
    }

    return (
        <>
            <button onClick={() => setOpenModal(true)} className={styles.viewButton}>View</button>

            <PopupModal openModal={openModal} closeModal={() => setOpenModal(false)} style={modalStyles}>
                <div>
                    <h2>{game.Name ? game.Name : 'Team 1 - Team 2'}</h2>
                    <h3 className='text-gray-3 mt-1'>[{game.resultHT[0]} - {game.resultHT[1]}] </h3>
                    <h3>[{game.result[0]} - {game.result[1]}]</h3>
                    <div className={styles.tableContainer}>
                        <p className='mt-3 ms-1'>Predictions:</p>
                        <table className={'table text-center ' + styles.table}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quote</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {game.predictions.map(prediction => (
                                    <tr key={prediction.Name}>
                                        <td>{prediction.Name}</td>
                                        <td>{prediction.Quote.toFixed(2)}</td>
                                        <td>{getResultText(prediction.Result)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </PopupModal>
        </>
    )
}

export default GameDetails