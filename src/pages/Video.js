import './Video.css';
import portfolio_BusyBee from '../assets/portfolio_BusyBee.png';
import portfolio_CSOSummer2022 from '../assets/portfolio_CSOSummer2022.png';
import portfolio_CalStateActiveShooter from '../assets/portfolio_CalStateActiveShooter.png';
import portfolio_LegallySpeaking from '../assets/portfolio_LegallySpeaking.png';

const Gig = (props) => {
    return (
        <div className='VideoWrapper'>
            <div className='VideoImg'>
                <a href={props.video} target='_blank' rel='noopener noreferrer'>
                    <img src={props.videoImg} alt={props.videoAlt}/> 
                </a>
            </div>
            <div className='TextBox'>
                <h1>ROLE</h1>
                <p>{props.role}</p>
                <h1>CLIENT</h1>
                <p><a href={props.clientSite} target='_blank' rel='noopener noreferrer'>{props.client}</a></p>
            </div>
        </div>
    )
}

function Video() {
    return (
        <div className='AllVideos'>
            {/* CAL STATE ONLINE SUMMER 2022 */}
            <Gig video={'https://youtu.be/r8IfKcmJR88'}
            videoImg={portfolio_CSOSummer2022}
            videoAlt={'anime-style drawing of Cal State student at home, seated in front of laptop, taking notes at their desk'}
            role={'animation / concept'}
            clientSite={'https://www.dentagency.com/'}
            client={'DENT Agency'}/>
          
            {/* BUSY BEE */}
            <Gig video={'https://youtu.be/VjsvBFznJfo'}
            videoImg={portfolio_BusyBee}
            videoAlt={'cartoon bee wearing glasses checking off boxes on a clipboard as he oversees construction of a beehive; soldier bees lounge on the scaffolding, smoking cigarettes, while childlike drones vandalize the hive with a game of tic-tac-toe'}
            role={'animation'}
            clientSite={'https://pacificlegal.org/'}
            client={'Pacific Legal Foundation'}/>

            {/* CAL STATE ACTIVE SHOOTER SAFETY */}
            <Gig video={'https://youtu.be/VUErkf3XEEs'}
            videoImg={portfolio_CalStateActiveShooter}
            videoAlt={'drawing of four students looking at the viewer with determined expressions'}
            role={'animation / voiceover'}
            clientSite={'https://www.dentagency.com/'}
            client={'DENT Agency'}/>

            {/* LEGALLY SPEAKING */}
            <Gig video={'https://youtube.com/playlist?list=PLNfeyqXaRNagTTdNn-3V2CA1IXGp3dHsj'}
            videoImg={portfolio_LegallySpeaking}
            videoAlt={'drawing of the show host, Lou Perez, dressed as Lady Justice, hairy chest exposed, speaking into a microphone labeled "WTI"'}
            role={'illustration'}
            clientSite={'https://www.youtube.com/c/WeTheInternetTV'}
            client={'We The Internet TV'}/>

        </div>
    );
}


export default Video;