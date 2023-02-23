import React from 'react'
const HelpCards = ({contest}) => {
  return (
    <div className='singleCard'>
      <span>{contest.name}</span><br />
      <span>{contest.site}</span><br />
      <button > <a href={contest.url}>click Here</a></button>
    </div>
  )
}

export default HelpCards
