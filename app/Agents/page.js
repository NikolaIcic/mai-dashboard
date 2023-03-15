import AgentGroups from "@/components/Agents/AgentGroups/AgentGroups"
import Sidebar from "@/components/Global/Sidebar/Sidebar"
import { getAgentGroups } from "@/services/Agents";

const page = async () => {
    const agentGroups = await getAgentGroups();

    return (
        <div>
            <Sidebar><AgentGroups agentGroups={agentGroups} callBack={()=>{}} /></Sidebar>
        </div>
    )
}

export default page