import { useEffect, useRef } from 'react';

import * as Tone from 'tone';


const useSounds = () => {
    const mySampler = useRef(null);

    useEffect(() => {
        const sampler = new Tone.Sampler({
            urls: {
                A1: "A1.mp3",
                A2: "A2.mp3"
            },
            release: 1,
            baseUrl: "https://tonejs.github.io/audio/casio/",
            //onload: () => buttonsList
        }).toDestination();

        Tone.loaded().then(() => {
            mySampler.current = sampler;
        })
    }, []);

    const buttonsList = [
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["A1"], 4)
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["A2"], 4)
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["A1"], 4)
        },
        {
            soundPlay: () => mySampler.current.triggerAttackRelease(["A2"], 4)
        }
    ];

    return { buttonsList };
}

export default useSounds;
