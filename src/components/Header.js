import logo from "../assets/logo.png"


export const Header = (props) => {
    return (
        <header className="w-full h-[117px] bg-white border-b border-gray-300 shadow-md px-16 py-[22px] flex items-center">
            <img className="w-[200px] h-[73px]" src={logo} alt="Pokemon logo" />
            <h1 className="font-montserrat font-bold text-4xl m-auto">Pokemon Memory Card</h1>
            
            <div className="flex flex-col">
            <p className="font-montserrat font-semibold text-xl">Current Score: {props.current}</p>
            <p className="font-montserrat font-semibold text-xl">Best Score: {props.best}</p>
            
            </div>

        </header>
    )
}