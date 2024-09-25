import { useState } from 'react'
import styles from './Results.module.css'
import AgentPredictionsModal from './AgentPredictionsModal/AgentPredictionsModal';

const Results = ({ results, games }) => {
    const [agentPredictions, setAgentPredictions] = useState();
    const [openPredictionsModal, setOpenPredictionsModal] = useState(false);

    const handleViewPredictions = (predictions) => {
        setAgentPredictions(predictions);
        setOpenPredictionsModal(true);
    }

    return (
        <div className={styles.container}>
            {results ?
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Group</th>
                                <th>Agent</th>
                                <th>Predictions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((res, index) =>
                                <tr key={'pred' + index}>
                                    <td>{res.name}</td>
                                    <td>{res.group}</td>
                                    <td><button onClick={() => handleViewPredictions(res.predictions)} className={styles.showBtn}>View</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <AgentPredictionsModal openModal={openPredictionsModal} closeModal={() => setOpenPredictionsModal(false)} predictions={agentPredictions} games={games} />
                </div> :
                <h4 className='text-center mt-2'>
                    Play a ticket first to see results here
                </h4>}
        </div>
    )
}

export default Results