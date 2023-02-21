import React from 'react'
import "./styles.css"

function LargeDescription({ data }) {
    return (
        <div>
            <div className='title-description'>
                <p>Descripción</p>
            </div>
            <div className='body-description'>
            {data.largeDescription}
            </div>
        </div>
    )
}

export default LargeDescription