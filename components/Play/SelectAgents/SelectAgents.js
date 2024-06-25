import { Fragment } from 'react'
import MasterCheckbox from '../../Global/MasterCheckbox/MasterCheckbox'

const SelectAgents = ({ groups }) => {
    let agents = ['Agent1','Agent2','Agent3','Agent4','Agent5'];

    return (
        <div>
            {groups.map(group =>
                <Fragment key={group.folderName}>
                    <MasterCheckbox name={group.folderName} data={agents} callBack={(data)=>console.log(data)} />
                </Fragment>
            )}
        </div>
    )
}

export default SelectAgents