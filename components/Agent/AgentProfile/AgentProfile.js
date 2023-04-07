import styles from './AgentProfile.module.css'
import Image from 'next/image'

const AgentProfile = ({name,index,group}) => {
    return (
        <div>
            <div style={{paddingTop:'20px'}}></div>
            <div className={styles.imageContainer}>
                <Image src={'/images/ai/ai1.png'} fill alt='agent profile picture' />
            </div>
            <h2 className='text-center mt-3'>{name}</h2>
            <div className={styles.info}>
                <h3 className='mt-2'><span style={{color:'yellow'}}>#{index}</span> in {group}</h3>
                <h4 className='mt-2'>Title: Gambling addict</h4>
                <h4 className='mt-2'>Favorite qoute: Play smart</h4>
            </div>
        </div>
    )
}

export default AgentProfile