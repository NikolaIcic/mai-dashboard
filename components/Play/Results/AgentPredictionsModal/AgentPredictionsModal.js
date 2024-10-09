import React from 'react'
import PopupModal from '../../../Global/PopupModal/PopupModal'
import styles from '../../../Agent/AgentHistory/TicketItem/GameItem/GameDetails/GameDetails.module.css';

const AgentPredictionsModal = ({ openModal, closeModal, predictions, games }) => {

    const modalStyles = {
        maxWidth: '60%',
        minWidth: '500px',
        height: '720px'
    }

    return (
        <PopupModal openModal={openModal} closeModal={closeModal} style={modalStyles}>
            {(predictions && games) && <div>
                <div className='text-center mb-2'>
                    <h2>Agent predictions</h2>
                </div>
                <div className={styles.tableContainer}>
                    <table className={'table text-center ' + styles.table}>
                        <thead>
                            <tr>
                                <th>Game</th>
                                <th>Prediction</th>
                                <th>Quote</th>
                            </tr>
                        </thead>
                        <tbody>
                            {predictions.map((prediction, index) =>
                                <tr key={'prediction' + index}>
                                    <td>{games[index].name}</td>
                                    <td>{prediction.Name}</td>
                                    <td>{prediction.Quote}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>}
        </PopupModal>
    )
}

export default AgentPredictionsModal