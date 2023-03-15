import AgentGroups from '../components/Agents/AgentGroups/AgentGroups'
import Sidebar from '../components/Global/Sidebar/Sidebar'
import { getAgentGroups } from '../services/agents'

const Agents = ({agentGroups}) => {
    return (
        <div>
            <Sidebar><AgentGroups agentGroups={agentGroups} callBack={(group) => console.log(group)} /></Sidebar>
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