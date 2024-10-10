import { useState } from 'react'
import styles from './Results.module.css'
import AgentPredictionsModal from './AgentPredictionsModal/AgentPredictionsModal';
import GamesBarChart from './GamesBarChart/GamesBarChart';
import GamePieChart from './GamePieChart/GamePieChart';

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
                <>
                    <div className='w-50 d-inline-block p-1'>
                        <table className={'table ' + styles.agentTable}>
                            <thead>
                                <tr>
                                    <th>Agent</th>
                                    <th>Group</th>
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
                    </div>
                    <div className='w-50 d-inline-block p-1' style={{height:'342px'}}>
                        <GamePieChart results={results} games={games} />
                    </div>
                    <div className='w-100' style={{height:'500px',marginTop:'0px'}}>
                        <GamesBarChart results={results} games={games} />
                    </div>
                    <AgentPredictionsModal openModal={openPredictionsModal} closeModal={() => setOpenPredictionsModal(false)} predictions={agentPredictions} games={games} />
                </> :
                <h4 className='text-center mt-2'>
                    Play a ticket first to see results here
                </h4>}
        </div>
    )
}

export default Results