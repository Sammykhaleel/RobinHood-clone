import React from 'react'
import './Stats.css'

function Stats() {
  return (
    <div className='stats'>
      <div className='stats__container'>

        <div className='stats__header'>
          <p>Stocks</p>
        </div>
        {/* current stocks */}
        <div className='stats__content'>
          <div className='stats__rows'>

          </div>
        </div>

        <div className='stats__header'>
          <p>Lists</p>
        </div>
        {/* stocks availble tp purchase */}
        <div className='stats__content'>
          <div className='stats__rows'>
            
          </div>
        </div>
     </div>
    </div>
    
  )
}

export default Stats