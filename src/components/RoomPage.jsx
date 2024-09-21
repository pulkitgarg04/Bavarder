import { useParams } from "react-router-dom"
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const APP_ID = 1865994426;
const SERVER_SECRET = "43c195c98ade388a2beb97675a9935c8";

function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
        maxPos = chars.length,
        i;
    len = len || 5;
    for (i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
};

function RoomPage() {
    const { id } = useParams();
    const roomID = id || randomID(5);

    let myMeeting = async (element) => {
        const appID = APP_ID;
        const serverSecret = SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(10), "Pulkit Garg");

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomID,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    }

    return (
        <div ref={myMeeting}></div>
    )
};

export default RoomPage
