import { useState } from "react"

const UserEvent = () => {
    const [loveCount, setLoveCount] = useState(0)

    const [userInput, setUserInput] = useState("")

    return (
        <div>
            <div className="flex items-center gap-x-4">
                <h1>go and type someting</h1>
                <h2>{userInput}</h2>


            </div>
            <input type="text" onChange={(e) => setUserInput(e.target.value)} />
            <br />
            <br />
            <h3>your girlfriend loves you {loveCount} times</h3>
            <button onClick={() => setLoveCount(count => count + 1)}>
                makes her love you mores
            </button>
            <br />
            <br />
            <div>
                <button onClick={() => setLoveCount(0)}>reset</button>
            </div>
        </div>
    )
}

export default UserEvent;