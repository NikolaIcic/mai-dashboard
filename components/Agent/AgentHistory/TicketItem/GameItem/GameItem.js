import styles from './GameItem.module.css'

const GameItem = ({ game,index }) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td>Test</td>
            <td>?</td>
        </tr>
    )
}

export default GameItem