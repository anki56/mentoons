import React from 'react'
import yt from './yt.png'
import chan from './chan.png'
import './Home.css';
import lifeillus from './lifeillus.png'
import lifeicon from './lifeicon.png'
import workillus from './workillus.png'
import workicon from './workicon.png'
import musicillus from './musicillus.png'
import musicicon from './musicicon.png'
import Cover from '../cover/Cover';
import Contact from '../Contact/Contact';
import toonland from './toonland.png'
import mentoons from './mentoons.png'
export default function Home() {
    return (
        <div>
            <Cover />
            <div className='ytchannelpara'>
                <div className='coverbannerpara'>
                    <div className='para p1'>
                        <p>CHECK OUT MY</p>
                    </div>
                    <div className='yt'>
                        <a href="/"><img src={yt} alt='yticon' /></a>
                    </div>
                    <div className='para p2'>
                        <p>CHANNEL</p>
                    </div>
                </div>
                <div className='chanpic'>
                    <img src={chan} alt='' />

                </div>
            </div>

            <div className='life'>
                <div className='imgpartlife'>
                    <div className='lifeicon'>
                        <a href="/"><img src={lifeicon} alt='lifeicon' /></a>
                    </div>
                    <div className='lifeillus'>
                        <img src={lifeillus} alt='lifeillus' />
                    </div>
                </div>
                <div className='bodypartlife'>
                    <p className='parahomelife samepara'> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Tellus sed elementum sed tortor
                        sed. Egestas imperdiet malesuada malesuada
                        imperdiet faucibus
                    </p>
                    <p className='headinghome'>Facts About Me</p>
                    <p className='subheadinghome'>Hobbies</p>
                    <p className='parahomelife samepara'> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Tellus sed elementum sed tortor
                        sed. Egestas imperdiet malesuada malesuada
                        imperdiet faucibus
                    </p>
                </div>

            </div>
            <div className='work'>
                <div className='imgpartwork'>

                    <div className='workillus'>
                        <img src={workillus} alt='workillus' />
                    </div>


                    <div className='workicon'>
                        <a href="/"><img src={workicon} alt='workicon' /></a>
                    </div>


                </div>
                <div className='bodypartwork'>
                    <p className='samepara'> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Tellus sed elementum sed tortor
                        sed. Egestas imperdiet malesuada malesuada
                        imperdiet faucibus
                    </p>

                </div>

            </div>
            <div className='music'>
                <div className='imgpartmusic'>



                    <div className='musicicon'>
                        <a href="/"><img src={musicicon} alt='musicicon' /></a>
                    </div>
                    <div className='musicillus'>
                        <img src={musicillus} alt='musicillus' />
                    </div>


                </div>
                <div className='bodypartmusic'>
                    <p className='samepara'> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Tellus sed elementum sed tortor
                        sed. Egestas imperdiet malesuada malesuada
                        imperdiet faucibus
                    </p>

                </div>

            </div>

            <div className='bannerbrand'>
                <div className='toonland'>
                    <img src={toonland} alt=''/>
                    <p className='bannerpara'> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Tellus sed elementum sed tortor
                        sed. Egestas imperdiet malesuada malesuada
                        imperdiet faucibus</p>
                </div>
                <div className='mentoons'>
                    <img src={mentoons} alt=''/>
                    <p className='bannerpara'> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Tellus sed elementum sed tortor
                        sed. Egestas imperdiet malesuada malesuada
                        imperdiet faucibus</p>
                </div>
            </div>
            <div className='brandinghome'>
                <div className='brand'>
                    <p className='brandhead'>Mentoring</p>
                    <p className='brandpara'>Lorem ipsum dolor sit amet, consectetur
                   adipiscing elit. Tellus sed elementum sed tortor
sed. Egestas imperdiet malesuada malesuada
imperdiet faucibus. Porta amet curabitur proin
augue venenatis sapien adipiscing nec. Et libero
fusce lectus netus vel vestibulum auctor.</p>
                </div>
                <div className='brand'>
                    <p className='brandhead'>CXO Branding</p>
                    <p className='brandpara'>Lorem ipsum dolor sit amet, consectetur
                   adipiscing elit. Tellus sed elementum sed tortor
sed. Egestas imperdiet malesuada malesuada
imperdiet faucibus. Porta amet curabitur proin
augue venenatis sapien adipiscing nec. Et libero
fusce lectus netus vel vestibulum auctor.</p>
                </div>
                <div className='brand'>
                    <p className='brandhead'>Personal Branding</p>
                    <p className='brandpara'>Lorem ipsum dolor sit amet, consectetur
                   adipiscing elit. Tellus sed elementum sed tortor
sed. Egestas imperdiet malesuada malesuada
imperdiet faucibus. Porta amet curabitur proin
augue venenatis sapien adipiscing nec. Et libero
fusce lectus netus vel vestibulum auctor.</p>
                </div>
            </div>
            <Contact/>
            
        </div>

    )
}
