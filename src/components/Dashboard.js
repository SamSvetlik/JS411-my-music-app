import React, {useState} from 'react';
import OnlineMode from './OnlineMode'
import MasterVolume from './MasterVolume';
import SoundQuality from './SoundQuality';
// import each of the 3 cards that I will use

function Dashboard() {
// useState for: 
        // onlineMode(on or off)
    const [onlineMode, setOnlineMode] = useState(true)
    // masterVolume(value from 0 to 100)
    const [masterVolume, setMasterVolume] = useState(30)
    // soundQuality(dropdown menu with options for Normal and Low)
    const [soundQuality, setSoundQuality] = useState("Normal")

    return (
        <div>
            <span>
                <OnlineMode onlineMode={onlineMode} setOnlineMode={setOnlineMode} />
                <MasterVolume masterVolume={masterVolume} setMasterVolume={setMasterVolume}/>
                <SoundQuality soundQuality={soundQuality} setSoundQuality={setSoundQuality}/> 
            </span>
            {/* <SystemNotifications /> */}
        </div>
    )
}

export default Dashboard