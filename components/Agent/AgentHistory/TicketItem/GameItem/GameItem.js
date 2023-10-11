import styles from './GameItem.module.css'

const GameItem = ({ game, index, prediction }) => {

    const getResultText = (value) => {
        if (value)
            return '✅';
        return '❌';
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{prediction.Name}</td>
            <td>{prediction.Quote.toFixed(2)}</td>
            <td>{getResultText(prediction.Result)}</td>
            <td><button className={styles.viewButton}>View</button></td>
        </tr>
    )
}

export default GameItem