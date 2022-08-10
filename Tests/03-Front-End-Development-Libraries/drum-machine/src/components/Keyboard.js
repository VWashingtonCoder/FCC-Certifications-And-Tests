import React, { useEffect } from "react";
import { simpleSoundsGroup } from "./SoundData";


function Keyboard({ play }) {    
    function handleKeyDown(evt) {
        const keyPressed = evt.key.toLowerCase();

        if(keyPressed === "q") play("Q", "bass");
        else if(keyPressed === "w") play("W", "clap");
        else if(keyPressed === "e") play("E", "cymbal");
        else if(keyPressed === "a") play("A", "hi-hat");
        else if(keyPressed === "s") play("S", "hi-hat2");
        else if(keyPressed === "d") play("D", "kick");
        else if(keyPressed === "z") play("Z", "snare");
        else if(keyPressed === "x") play("X", "snare2");
        else if(keyPressed === "c") play("C", "tom");
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
    })
    
    return (
        <div id="keyboard" className="text-center">
            {simpleSoundsGroup.map(({ key, src, id }) => {
                return (

                    <button 
                        className="drum-pad"
                        key={key} 
                        onClick={() => play(key, id)}
                        id={id}
                    >
                        <audio 
                            className="clip" 
                            id={key} 
                            src={src} 
                        />
                        {key}
                    </button>
                )
            })}
        </div>
    )
}

export default Keyboard;