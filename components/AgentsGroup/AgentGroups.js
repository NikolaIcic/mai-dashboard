import styles from './AgentGroups.module.css'
import { useContext, useState } from 'react'
import Sidebar from '../Global/Sidebar/Sidebar'
import AgentsContext from '../../context/AgentsContext'
import Loader from '../Global/Loader/Loader'
import { getAgents } from '../../services/agents'

const AgentGroups = () => {
    const { agentGroups, setSelectedGroup, setAgents } = useContext(AgentsContext);
    const [loading, setLoading] = useState(false);

    const handleSelect = async (group) => {
        setLoading(true);
        setSelectedGroup(group);
        let res = await getAgents(group);
        if (Array.isArray(res))
            setAgents(res);
        else
            console.log(res); // NOTIFICATION HERE
        setLoading(false);
    }

    return (
        <Sidebar>
            <div className={styles.container}>
                <h5>Agent groups</h5>
                {agentGroups.map(group => (
                    <div onClick={() => handleSelect(group)} key={group} className={styles.agentGroupItem}>{group}</div>
                ))}
                <button className='mt-3'>Add New</button>
            </div>
            <Loader visible={loading} />
        </Sidebar>
    )
}

export default AgentGroups