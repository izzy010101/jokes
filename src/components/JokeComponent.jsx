import useFetchJoke from '../hooks/useFetchJoke';

function JokeComponent() {

    const {joke, fetchJoke} = useFetchJoke();

    return (
        <>
            <p className='h-screen flex flex-col gap-10 items-center'>
                <h1 className='text-2xl font-bold'>Jokes</h1>
                <div className='font-semibold text-xl'>
                    {joke}
                </div>
                <button className="w-1/6 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={fetchJoke}>Next Joke</button>
            </p>
        </>
    )
}

export default JokeComponent;