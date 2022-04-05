import './Video.css';
import portfolio_BusyBee from '../assets/portfolio_BusyBee.png'
import portfolio_CSOSummer2022 from '../assets/portfolio_CSOSummer2022.png'
import portfolio_CalStateActiveShooter from '../assets/portfolio_CalStateActiveShooter.png'
import portfolio_LegallySpeaking from '../assets/portfolio_LegallySpeaking.png'

function Video() {
    return (
        <div className='AllVideos'>

          {/* CAL STATE ONLINE SUMMER 2022 */}
          <div className='VideoWrapper'>
              <div className='VideoImg'>
                  <a href='https://youtu.be/r8IfKcmJR88' target='_blank' rel='noopener noreferrer'>
                      <img src={portfolio_CSOSummer2022} alt='anime-style drawing of Cal State student at home, seated in front of laptop, taking notes at their desk'/> 
                  </a>
              </div>
              <div className='TextBox'>
                  <h1>ROLE</h1>
                  <p>animation / concept</p> 
                  <h1>CLIENT</h1>
                  <p><a href='https://www.dentagency.com/' target='_blank' rel='noopener noreferrer'>DENT Agency</a></p>
              </div>
          </div>

          {/* BUSY BEE */}
          <div className='VideoWrapper'>
              <div className='VideoImg'>
                  <a href='https://youtu.be/VjsvBFznJfo' target='_blank' rel='noopener noreferrer'>
                      <img src={portfolio_BusyBee} alt='cartoon bee wearing glasses checking off boxes on a clipboard as he oversees construction of a beehive; soldier bees lounge on the scaffolding, smoking cigarettes, while childlike drones vandalize the hive with a game of tic-tac-toe'/> 
                  </a>
              </div>
              <div className='TextBox'>
                  <h1>ROLE</h1>
                  <p>animation</p> 
                  <h1>CLIENT</h1>
                  <p><a href='https://pacificlegal.org/' target='_blank' rel='noopener noreferrer'>Pacific Legal Foundation</a></p>
              </div>
          </div>

          {/* CAL STATE ACTIVE SHOOTER SAFETY */}
          <div className='VideoWrapper'>
              <div className='VideoImg'>
                  <a href='https://youtu.be/VUErkf3XEEs' target='_blank' rel='noopener noreferrer'>
                      <img src={portfolio_CalStateActiveShooter} alt='drawing of four students looking at the viewer with determined expressions'/> 
                  </a>
              </div>
              <div className='TextBox'>
                  <h1>ROLE</h1>
                  <p>animation / voiceover</p> 
                  <h1>CLIENT</h1>
                  <p><a href='https://www.dentagency.com/' target='_blank' rel='noopener noreferrer'>DENT Agency</a></p>              </div>
          </div>

          {/* LEGALLY SPEAKING */}
          <div className='VideoWrapper'>
              <div className='VideoImg'>
                  <a href='https://youtube.com/playlist?list=PLNfeyqXaRNagTTdNn-3V2CA1IXGp3dHsj' target='_blank' rel='noopener noreferrer'>
                      <img src={portfolio_LegallySpeaking} alt='drawing of the show host, Lou Perez, dressed as Lady Justice, hairy chest exposed, speaking into a microphone labeled "WTI"'/> 
                  </a>
              </div>
              <div className='TextBox'>
                  <h1>ROLE</h1>
                  <p>illustration</p> 
                  <h1>CLIENT</h1>
                  <p><a href='https://www.youtube.com/c/WeTheInternetTV' target='_blank' rel='noopener noreferrer'>We The Internet TV</a></p>
              </div>
          </div>

        </div>
    );
}


export default Video;