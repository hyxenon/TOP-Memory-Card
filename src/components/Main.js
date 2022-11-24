import { Card } from "./Card"

export const Main = () => {
    return(
        <main className="h-[841px] bg-bgColor flex justify-center">
           <div className="pt-[61px] grid grid-cols-2 gap-x-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
           </div>
        </main>
    )
}