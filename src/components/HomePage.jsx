import { useNavigate } from "react-router-dom";
import { useState } from "react";

function HomePage() {
    const [roomID, setRoomID] = useState("");
    const navigate = useNavigate();

    const joinHandler = () => {
        navigate(`/room/${roomID}`);
    };

    return (
        <div>
            <h1>Bavarder</h1>
            <div>
                <div>
                    <label>Enter Room ID:</label>
                    <input type="text" value={roomID} onChange={(e) => setRoomID(e.target.value)} />
                    <button onClick={joinHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join</button>
                </div>
                <hr />
                <div>
                    <button onClick={() => navigate(`/room/${Math.random().toString(36).substring(7)}`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create New Meeting</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
