import React from 'react';

const Rank = ({name, rank}) => {
    return (
        <div className='washed-yellow f3'>
            <div className='flex items-center flex-column'>
                {`${name} your current entry count is...`}
            </div>
            <div className='washed-yellow f1'>
                {rank}
            </div>
        </div>
        
    );
}

export default Rank;