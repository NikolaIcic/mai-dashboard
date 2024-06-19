import { useContext, useState } from 'react';
import { postStartLearning, postStopLearning } from '../../../services/learning';
import styles from './LearningGroups.module.css';
import AgentsContext from '../../../context/AgentsContext';
import Switch from '../../Global/Switch/Switch';

const LearningGroups = ({ learningGroups, callBack }) => {
    const { selectedGroup } = useContext(AgentsContext);
    const [newTraining, setNewTraining] = useState(false);
    let learningGroup = learningGroups.find(x => x.folderName == selectedGroup);

    const handleStartStop = async () => {
        if (!learningGroup)
            return;
        if (!learningGroup.learning)
            return await postStartLearning({ name: learningGroup.folderName, algorithm: learningGroup.fitnessAlgorithm, newTraining: newTraining })
                .then(res => res == 'success' ? callBack() : null);
        await postStopLearning(learningGroup.folderName)
            .then(res => res == 'success' ? callBack() : null);
    }

    return (
        <div>
            {(selectedGroup != '' && learningGroups.find(x => x.folderName == selectedGroup)) &&
                <div className={styles.learningGroup}>
                    <h2 className='text-center'>{selectedGroup}</h2>

                    <p><span>Group description:</span><br />
                        {learningGroup.description}
                    </p>
                    <div style={{ display: 'flex' }}>
                        <div className={styles.info}>
                            <h4>Algorithm: {learningGroup.fitnessAlgorithm}</h4>
                            <h4>Generation: {learningGroup.generation}</h4>
                        </div>
                        <div className={styles.info + ' text-center'}>
                            <h4 className='mb-1'>Learning: {learningGroup.learning ? 'In Progress' : 'Paused'}</h4>
                            <button className={learningGroup.learning ? styles.btnStop : styles.btnStart}
                                onClick={handleStartStop}>{learningGroup.learning ? 'STOP' : 'START'}</button>
                        </div>
                        <div className={styles.info + ' text-center'}>
                            <label>New training?</label>
                            <div className='mt-2'>
                                <Switch switchState={newTraining} callBack={setNewTraining} />
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default LearningGroups