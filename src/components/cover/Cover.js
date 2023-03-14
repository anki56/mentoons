import React from 'react'
import mentor from './mentor.png'
import life from './life.png'
import work from './work.png'
import music from './music.png'

import './Cover.css';

export default function Cover() {
  return (
    <div className='cover'>
        <div className='firstcover'>
        <img src={mentor} alt='' />

        </div>
        <div className='coverbanner'>
            <div className='lifeCover'>
            <a href="/life"><img src={life} alt='lifeicon' /></a>
            </div>
            <div className='workCover'>
            <a href="/work"><img src={work} alt='workicon' /></a>
            </div>
            <div className='musicCover'>
            <a href="/music"><img src={music} alt='musicicon'/></a>
            </div>

        </div>
        
       
    </div>
  )
}
