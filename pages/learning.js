import React, { useState } from 'react'
import AgentGroups from '../components/AgentsGroup/AgentGroups'
import MidArea from '../components/Global/MidArea/MidArea'
import LearningGroups from '../components/Learning/LearningGroups/LearningGroups'
import { getLearningGroups } from '../services/learning'

const Learning = ({ groups }) => {
    const [learningGroups, setLearningGroups] = useState(groups);
    const reloadGroups = async () => {
        const res = await getLearningGroups();
        setLearningGroups(res);
    }

    return (
        <div>
            <AgentGroups />
            <MidArea>
                <LearningGroups learningGroups={learningGroups} callBack={reloadGroups} />
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