
export const Card = (props) => {
    const name = props.name
    return(
        <div onClick={()=> props.onClick(name)} className="w-[316px] h-[284px] bg-white border-1 border-black flex flex-col items-center shadow-lg rounded-lg card-hover">
            <img className="w-[134px] h-[134px] mt-10" src={props.img} alt="" />
            <p className="mt-14 font-montserrat text-xl">{props.name}</p>
        </div>
    )
}