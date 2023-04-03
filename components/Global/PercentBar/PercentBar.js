import styles from './PercentBar.module.css'

const PercentBar = ({won,total}) => {

    const getWonPercent = () => {
        return (won / total * 100).toFixed(0);
    }

    const getLostPercent = () => {
        return ((total-won) / total * 100).toFixed(0)
    }

    const getWonWidth = () => {
        return getWonPercent() - 1 + '%';
    }

    const getLostWidth = () => {
        return getLostPercent() - 1 + '%';
    }

    return (
        <div className={styles.container}>
            <div className={styles.won} style={{width:getWonWidth()}}>{getWonPercent()}%</div>
            <div className={styles.lost} style={{width:getLostWidth()}}>{getLostPercent()}%</div>
        </div>
    )
}

export default PercentBar