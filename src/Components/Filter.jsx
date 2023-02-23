import React, { useEffect } from 'react'
import axios from 'axios'
import './filter.css'
const Filter = ({ codeContest, setFiltered, platform, setPlatform }) => {
  useEffect(() => {
    const filtered = codeContest.filter(contest => {
      return contest.site === platform
    })

    // const filtered = JSON.parse(codeContest).filter(contest => {
    //   platform = contest.site
    // })

    setFiltered(filtered)
  }, [platform])

  async function getContests () {
    const data = await axios.get('https://kontests.net/api/v1/all')
    const allContests = data.data
    // setCodeContests(allContests)
    setFiltered(allContests)
  }
  return (
    <div className='filter-conatiner'>
      <button onClick={getContests} className='btn'>
        All
      </button>
      <button onClick={() => setPlatform('HackerRank')} className='btn'>
        Hacker Rank
      </button>
      <button onClick={() => setPlatform('HackerEarth')} className='btn'>
        Hacker Earth
      </button>
      <button onClick={() => setPlatform('CodeChef')} className='btn'>
        Code Chef
      </button>
      <button onClick={() => setPlatform('CodeForces')} className='btn'>
        Code Forces
      </button>
      <button onClick={() => setPlatform('LeetCode')} className='btn'>
        Leet Code
      </button>
      <button onClick={() => setPlatform('Kick Start')} className='btn'>
        Kick Start
      </button>
      <button onClick={() => setPlatform('AtCoder')} className='btn'>
        AtCoder
      </button>
    </div>
  )
}

export default Filter
