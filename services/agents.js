const apiAgentGroups = process.env.API_ROUTE + 'agents/groups';
const apiAgentList = process.env.API_ROUTE + 'agents/list/';
const staticData = process.env.STATIC_DATA;

export async function getAgentGroups() {
    if (staticData)
        return getAgentGroupsStatic();
    const promise = await fetch(apiAgentGroups);
    return await promise.json();
}

export async function getAgents(group) {
    if (staticData)
        return getAgentsStatic(group);
    const promise = await fetch(apiAgentList + group);
    return await promise.json();
}

function getAgentGroupsStatic() {
    let data = ['Group1', 'Group2', 'Group3'];
    return data;
}

function getAgentsStatic(group) {
    let agents = [];
    for (let i = 0; i < 5; i++) {
        agents.push({
            name: 'Agent' + (i + 1),
            totalTicketsPlayed: 5,
            correctTicketsPredicted: 2
        })
    }
    return agents;
}