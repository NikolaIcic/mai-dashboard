const apiAgentGroups = process.env.API_ROUTE + 'agents/groups';
const apiAgentList = process.env.NEXT_PUBLIC_API_ROUTE + 'agents/list/';
const apiAgentLoad = process.env.NEXT_PUBLIC_API_ROUTE + 'agents/load/';
const dataType = process.env.DATA_TYPE;

export async function getAgentGroups() {
    if (dataType == 'static')
        return getAgentGroupsStatic();
    const promise = await fetch(apiAgentGroups);
    return await promise.json();
}

export async function getAgents(group) {
    if (dataType == 'static')
        return getAgentsStatic();
    const promise = await fetch(apiAgentList + group);
    return await promise.json();
}

export async function getAgent(group, index) {
    const promise = await fetch(apiAgentLoad + group + '/' + index);
    return await promise.json();
}

function getAgentGroupsStatic() {
    let data = ['Group1', 'Group2', 'Group3'];
    return data;
}

function getAgentsStatic() {
    let agents = [];
    for (let i = 0; i < 5; i++) {
        agents.push({
            name: 'Agent' + (i + 1),
            totalTicketsPlayed: 5,
            correctTicketsPredicted: 2,
            correctGamesPredicted: 10,
            gamesNotPlayed: 5,
            totalGamesPlayed: 25
        })
    }
    return agents;
}