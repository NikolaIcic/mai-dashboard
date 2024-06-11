import React from 'react'
import AgentGroups from '../components/AgentsGroup/AgentGroups'
import MidArea from '../components/Global/MidArea/MidArea'
import LearningGroups from '../components/Learning/LearningGroups/LearningGroups'
import { getLearningGroups } from '../services/learning'

const Learning = ({ groups }) => {
    return (
        <div>
            <AgentGroups />
            <MidArea>
                <LearningGroups learningGroups={groups} />
            </MidArea>
        </div>
    )
}

export default Learning

export const getServerSideProps = async (ctx) => {
    const groups = await getLearningGroups();

    return {
        props: {
            groups: groups
        }
    }
}