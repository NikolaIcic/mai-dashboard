import { createContext, useEffect, useState } from "react";
import { getAgentGroups } from "../services/agents";

const AgentsContext = createContext();

export function AgentsProvider({ children }) {
    const [agentGroups, setAgentGroups] = useState([]);
    const [agents, setAgents] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');

    const loadAgentGroups = async () => {
        if (agentGroups.length == 0) {
            const groups = await getAgentGroups();
            setAgentGroups(groups);
        }
    }

    useEffect(() => {
        loadAgentGroups();
    }, []);

    return (
        <AgentsContext.Provider value={{ agents, setAgents, selectedGroup, setSelectedGroup, agentGroups }}>
            {children}
        </AgentsContext.Provider>
    )
}

export default AgentsContext;