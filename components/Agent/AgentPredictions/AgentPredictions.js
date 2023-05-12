import styles from './AgentPredictions.module.css'

const AgentPredictions = ({predictions}) => {

    return (
        <div className={styles.container}>
            <h4>Prediction rates</h4>
            {predictions.map(prediction => (
                <div key={prediction.name}>
                    {prediction.name} : {prediction.count}
                </div>
            ))}
        </div>
    )
}

export default AgentPredictions