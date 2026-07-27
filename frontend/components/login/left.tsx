import Brand from "../brand";

export default function LeftPanel() {
    return (
        <div className="hidden lg:flex lg:w-1/2 bg-[#2472CE] flex-col min-h-full ">
            <Brand className="bg-white rounded-lg p-1 w-60 m-2 "/>
            <div className="mt-16 flex-1 flex justify-center">
                <h2 className="text-3xl font-bold text-white text-center m-2 self-center">
                Start your placement journey today
                </h2>
            </div>
        </div>
        
    );
}