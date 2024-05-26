import { createContext, useEffect, useState } from "react";
import { getAgentGroups, getAgents } from "../services/agents";

const AgentsContext = createContext();

export function AgentsProvider({ children }) {
    const [agentGroups, setAgentGroups] = useState([]);
    const [agents, setAgents] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');
    const reloadIntervalMilliseconds = 5000;
    let reloadAgentsID;

    const loadAgentGroups = async () => {
        if (agentGroups.length == 0) {
            const groups = await getAgentGroups();
            setAgentGroups(groups);
        }
    }

    const reloadAgents = () => {
        if (reloadAgentsID)
            clearInterval(reloadAgentsID);
        reloadAgentsID = setInterval(async () => {
            if (selectedGroup) {
                let res = await getAgents(selectedGroup);
                if (Array.isArray(res))
                    setAgents(res);
                else
                    console.log(res);
            }
        }, reloadIntervalMilliseconds);
    }

    useEffect(() => {
        loadAgentGroups();
    }, []);

    useEffect(() => {
        reloadAgents();
    }, [selectedGroup]);

    return (
        <AgentsContext.Provider value={{ agents, setAgents, selectedGroup, setSelectedGroup, agentGroups }}>
            {children}
        </AgentsContext.Provider>
    )
}

export default AgentsContext;