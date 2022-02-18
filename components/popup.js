export default function Popup ({ children, color }) {
    return (
        <div className="h-screen w-screen fixed z-50 flex" style={{backgroundColor: color}}>
            <div className="bg-slate-50 rounded-xl mx-auto my-auto max-w-2xl p-10">
                {children}
            </div>
        </div>
    )
}