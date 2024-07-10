import { useState, useEffect } from 'react';

const useFetchJoke = () => {
    const [joke, setJoke] = useState('');
    
   
    const fetchJoke = () => {
        fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,racist,sexist,explicit')
        .then(response => response.json())
        .then(data => {
            if(data.joke) {
                setJoke(data.joke);
            } else if (data.setup && data.delivery) {
                setJoke(`${data.setup} ... ${data.delivery}`);
            }

        });

        
};

    useEffect(() => {
        fetchJoke();

    }, []);
    
    return { joke, fetchJoke};
};

export default useFetchJoke;
