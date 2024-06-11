import { useContext } from 'react';
import { postStartLearning } from '../../../services/learning';
import styles from './LearningGroups.module.css';
import AgentsContext from '../../../context/AgentsContext';

const LearningGroups = ({ learningGroups }) => {
    const { selectedGroup } = useContext(AgentsContext);

    const handleStartStop = async () => {
        const group = learningGroups.find(x => x.folderName == selectedGroup);
        if (!group)
            return;
        await postStartLearning({ name: group.folderName, algorithm: group.fitnessAlgorithm });
    }

    return (
        <div>
            {(selectedGroup != '' && learningGroups.find(x => x.folderName == selectedGroup)) &&
                <div className={styles.learningGroup}>
                    <h2 className='text-center'>{selectedGroup}</h2>

                    <p><span>Group description:</span><br />
                        This a learning group description.
                        These agents will try to learn very well and make me money, i rly hope they make me money.
                        Latest game data will be used. No choice but to learn.
                        It is hard living a poor life. It is also easy.
                        In the end it is not fun...
                        Would it be different otherwise?
                    </p>
                    <div className={styles.info}>
                        <h4>Algorithm: {learningGroups.find(x => x.folderName == selectedGroup).fitnessAlgorithm}</h4>
                        <h4>Generation: 0</h4>
                        <h4>Learning: In Progress</h4>
                    </div>
                    <div className={styles.info + ' text-end'}>
                        <button onClick={handleStartStop}>START</button>
                    </div>
                </div>}

        </div>
    )
}

export default LearningGroups