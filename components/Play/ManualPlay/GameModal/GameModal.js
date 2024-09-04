import { useEffect, useState } from 'react'
import styles from '../../../Agent/AgentHistory/TicketItem/GameItem/GameDetails/GameDetails.module.css'
import PopupModal from '../../../Global/PopupModal/PopupModal'

const GameModal = ({ openModal, closeModal, game, callBack }) => {
    const [name, setName] = useState(game.name);
    const [predictions, setPredictions] = useState(game.predictions);

    const modalStyles = {
        maxWidth: '36%',
        minWidth: '500px',
        height: '720px'
    }

    const handleSave = () => {
        callBack({
            name: name,
            predictions: predictions
        });
        closeModal();
    }

    useEffect(() => {
        setName(game.name);
        setPredictions(game.predictions);
    }, [game])
    

    return (
        <PopupModal openModal={openModal} closeModal={closeModal} style={modalStyles}>
            <div>
                <div className='text-center'>
                    <input type='text' value={name} onChange={() => setName(event.target.value)} className={styles.textInput} />
                </div>
                <div className={styles.tableContainer}>
                    <p className='mt-3 ms-1 text-center mb-2'>Predictions:</p>
                    <table className={'table text-center ' + styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quote</th>
                            </tr>
                        </thead>
                        <tbody>
                            {predictions.map((prediction, index) => (
                                <tr key={prediction.Name}>
                                    <td>{prediction.Name}</td>
                                    <td><input type='number' value={prediction.Quote}
                                        onChange={() => {
                                            let temp = [...predictions];
                                            temp[index].Quote = event.target.value;
                                            setPredictions(temp)
                                        }}
                                        className={styles.numInput} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='text-center mt-2'><button onClick={handleSave}>Save</button></div>
            </div>
        </PopupModal>
    )
}

export default GameModal