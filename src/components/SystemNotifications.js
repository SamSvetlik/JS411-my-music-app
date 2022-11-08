import React from 'react';

const checkOnline = (x) => {
    if (x === false) {
        return "Your application is offline. You won't be able to share or stream music to other devices."
    }
}
const checkVolume = (x) => {
    if (x >= 80) {
        return "Listening to music at a high volume could cause long-term hearing loss."
    }
}
const checkQuality = (x) => {
    if (x === "Low") {
        return "Music quality is degraded. Increase quality if your connection allows it."
    }
}

export default function SystemNotifications(props) {

    return (
        <h2 style={{textAlign: "left"}}>System Notifications
            <p style={{ fontSize:"12pt"}}> {checkOnline(props.onlineMode)} </p>
            <p style={{ fontSize:"12pt"}}> {checkVolume(props.masterVolume)} </p>
            <p style={{ fontSize:"12pt"}}> {checkQuality(props.soundQuality)} </p>
        </h2>
    )
}