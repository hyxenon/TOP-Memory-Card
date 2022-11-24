
export const Modal = (props) => {
    return(
        <div className="h-screen w-screen z-50 bg-gray-300 fixed opacity-80 flex items-center justify-center">
            <div className="w-[50%] h-[30%] bg-black rounded-lg flex flex-col justify-center items-center">
                    <h1 className="font-montserrat font-bold text-4xl text-yellow-500">{props.info}</h1>
                    <button onClick={props.tryAgain} className="py-2 px-6 font-montserrat font-bold bg-green-500 mt-8 rounded-lg">Try Again</button>
            </div>
        </div>
    )
}