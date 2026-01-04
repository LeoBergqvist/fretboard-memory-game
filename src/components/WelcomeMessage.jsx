export default function WelcomeMessage() {
    return (
        <section className="welcome">
            <h2>Fretboard trainer</h2>
            <h3>Start learning the notes of the fretboard:</h3>
            {/* <img className="guitar-img" src="src\assets\images\guitar.png" /> */}
            <p>This tool was created to help learn the notes of the guitar fretboard.</p>
            <p>It uses simple memory techniques to link notes in various positions to a sentence and images</p>
            {/* <img className="guitar-img" src="src\assets\images\guitar.png" /> */}
            <h3>If this is your first visit:</h3>
            <p>Start with the "Study" page through the navbar above. Chose the area to study and at the end you will get an introduction to the techniques used. After that, you will start the practice of the notes in that position.           </p>
            <p>If you have visited before and is familiar with the techniques, you can chose to practice directly, by clicking "Play" in the navbar</p>
            <img className="guitar-img" src="src\assets\images\guitar.png" />


        </section>
    );
}


