import { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';

import kick from "assets/sounds/kick.wav";
import clap from "assets/sounds/clap.wav";
import simple from "assets/sounds/simple.wav";
import double from "assets/sounds/double.wav";




const useSounds = () => {
    const mySampler = useRef(null);

    const [isKickPlayed, isKickPlayedChange] = useState(false);
    const [isClapPlayed, isClapPlayedChange] = useState(false);
    const [isSimplePlayed, isSimplePlayedChange] = useState(false);
    const [isDoublePlayed, isDoublePlayedChange] = useState(false);

    useEffect(() => {
        const sampler = new Tone.Sampler({
            C4: kick,
            "D#4": clap,
            "F#4": simple,
            A4: double
        }).toDestination();

        Tone.loaded().then(() => {
            mySampler.current = sampler;
        })
    }, []);

    const soundPlay = (note) => {
        mySampler.current.triggerAttackRelease([note], 4)
    };

    const handleKeyDown = ({key}) => {
        switch (key) {
            case "a":
                isKickPlayedChange(true);
                window.setTimeout(() => isKickPlayedChange(), 300);
                soundPlay("C4");
                break;
            case "z":
                isClapPlayedChange(true);
                window.setTimeout(() => isClapPlayedChange(), 300);
                soundPlay("D#4");
                break;
            case "e":
                isSimplePlayedChange(true);
                window.setTimeout(() => isSimplePlayedChange(), 300);
                soundPlay("F#4");
                break;
            case "r":
                isDoublePlayedChange(true);
                window.setTimeout(() => isDoublePlayedChange(), 300);
                soundPlay("A4");
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, []);

    const handleSampleChange = (note, file) => {
        let fileUrl = URL.createObjectURL(file);
        let buffer = new Tone.Buffer(fileUrl);
        mySampler.current.add(note, buffer, () => alert("Sample fully changed"));
    }

    const buttonsList = [
        {
            soundPlay: () => soundPlay("C4"),
            isPlayed: isKickPlayed,
            id: "kick",
            handleSampleChange: (e) => handleSampleChange("C4", e.target.files[0])
        },
        {
            soundPlay: () => soundPlay("D#4"),
            isPlayed: isClapPlayed,
            id: "clap",
            handleSampleChange: (e) => handleSampleChange("D#4", e.target.files[0])
        },
        {
            soundPlay: () => soundPlay("F#4"),
            isPlayed: isSimplePlayed,
            id: "simple",
            handleSampleChange: (e) => handleSampleChange("F#4", e.target.files[0])
        },
        {
            soundPlay: () => soundPlay("A4"),
            isPlayed: isDoublePlayed,
            id: "double",
            handleSampleChange: (e) => handleSampleChange("A4", e.target.files[0])
        }
    ];

    return { buttonsList };
}

export default useSounds;
