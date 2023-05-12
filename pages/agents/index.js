import { useState } from 'react'
import AgentGroups from '../../components/Agents/AgentGroups/AgentGroups'
import AgentList from '../../components/Agents/AgentList/AgentList'
import MidArea from '../../components/Global/MidArea/MidArea'
import Sidebar from '../../components/Global/Sidebar/Sidebar'
import { getAgentGroups, getAgents } from '../../services/agents'
import Loader from '../../components/Global/Loader/Loader'

const Agents = ({ agentGroups }) => {

    const [agents, setAgents] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSelectAgentGroup = async (group) => {
        setLoading(true);
        setSelectedGroup(group);
        let res = await getAgents(group);
        if (Array.isArray(res))
            setAgents(res);
        else
            console.log(res);
        setLoading(false);
    }

    return (
        <div>
            <Loader visible={loading} />
            <Sidebar>
                <AgentGroups agentGroups={agentGroups} callBack={(group) => handleSelectAgentGroup(group)} />
            </Sidebar>
            <MidArea>
                <AgentList agents={agents} group={selectedGroup} />
            </MidArea>
        </div>
    )
}

export default Agents

export const getServerSideProps = async (ctx) => {
    const agentGroups = await getAgentGroups();

    return {
        props: {
            agentGroups: agentGroups
        }
    }
}