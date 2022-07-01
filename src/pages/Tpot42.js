import React from 'react';
import './Tpot42.css';

const Profile = (props) => {
    return (
        <div classname='ProfileWrapper'>
            <div className='Name'>
            <p>⇨ <a href={props.dateme} target='_blank' rel='noopener noreferrer'>
                {props.name}
                </a></p>
            </div>
        </div>
    );
}

function Tpot42() {
    return (
        <div>
            <div className='Header'>
                <h1>TPOT for two</h1>
                <p>an ingroup "date me" directory</p>
            </div>
            <div className='Directory'>
                <Profile dateme={'https://twitter.com/lovetheusers'}
                name={'lovetheusers'} />
                <Profile dateme={'http://orbnet.net'}
                name={'orb'} />
                <Profile dateme={'https://t.co/aJ0C2FzDBK'}
                name={'guilherme'} />
                <Profile dateme={'https://docs.google.com/document/d/1ircYicvNaC3-ijI1lMBL0xP5rvSKwlKpXepXO-tbH48/edit?usp=sharing'}
                name={'aella'} />
            </div>
            <h1>MORE DIRECTORIES</h1>
            <div className='Directory'>
                <Profile dateme={'https://twitter.com/i/lists/1459953976305065985'}
                name={"@gptbrooke's twitter dating market"} />
                <Profile dateme={'https://twitter.com/ChanaMessinger/status/1372220440295407625?s=20&t=of75HWTw59EnOmKRrcraTA'}
                name={"@chanamessinger's dating profiles thread"} />
            </div>

            
        </div>
    );
}

export default Tpot42;