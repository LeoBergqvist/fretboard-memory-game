// import { useState } from 'react'

function NoteButton({ note }) {
    // const [count, setCount] = useState(0)

    return (
        <>

            {/* <button onClick={() => setCount((count) => count + 1)}> */}
            <button className="note-button">
                {note}
            </button>

        </>
    )
}

export default NoteButton
