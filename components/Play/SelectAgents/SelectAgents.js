import { Fragment, useState } from 'react'
import MasterCheckbox from '../../Global/MasterCheckbox/MasterCheckbox'

const SelectAgents = ({ groups,callBack }) => {
    const [selected, setSelected] = useState(() => {
        let res = [];
        groups.forEach(group => {
            res.push({ name: group.name, checked: [false, false, false, false, false] })
        });
        return res;
    })

    const handleCallBack = (name, data) => {
        let temp = [...selected];
        let index = temp.findIndex(x => x.name == name);
        temp[index] = { ...temp[index], checked: data};
        callBack(temp);
        setSelected(temp);
    }

    return (
        <div className='w-100'>
            {groups.map(group =>
                <Fragment key={group.name}>
                    <MasterCheckbox name={group.name} data={group.agents}
                        callBack={(data) => handleCallBack(group.name, data)} />
                </Fragment>
            )}
        </div>
    )
}

export default SelectAgents