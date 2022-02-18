import { useRouter } from "next/router"

export default function Container ({ children, disable_back }) {
    const router = useRouter()

    return (
        <div className="bg-primary-dark flex h-screen lg:p-10">
            <div className="container bg-slate-50 rounded-xl m-auto max-w-6xl h-min relative">
                {
                    !disable_back ?
                    <div className="absolute w-8 h-8 rounded-lg hover:backdrop-brightness-90
                    flex top-3 left-3 transition-all cursor-pointer text-gray-400 hover:text-gray-800"
                    onClick={() => {router.push("/")}}>
                        <i className="fas text-lg fa-arrow-left m-auto"></i>
                    </div>
                    : null
                }

                <div className="lg:p-20 p-8 flex flex-col lg:flex-row gap-10">
                    {children}
                </div>
            </div>
        </div>
    )
}