import styles from './Navigation.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>MAI</div>
            <div className={styles.navigation}>
                <ul>
                    <li><Link href='/'>Dashboard</Link></li>
                    <li><Link href='/agents'>Agents</Link></li>
                    <li><Link href='/learning'>Learning</Link></li>
                    <li><Link href='/play'>Play</Link></li>
                </ul>
            </div>
            <div className={styles.profile}>
                profile
            </div>
        </nav>
    )
}

export default Nav