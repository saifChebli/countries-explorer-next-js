'use client'

const Error = ({error , reset}) => {
    return (
        <div className="p-10">
            <h2 className="font-bold text-xl">Something went wrong !</h2>
            <p>{error?.message}</p>
            <button 
            onClick={() => reset()}
            className="bg-black px-4 py-2 text-white rounded">
                Try again
            </button>
        </div>
    )
}


export default Error