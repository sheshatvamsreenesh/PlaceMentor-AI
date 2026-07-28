import Brand from "../brand";

export default function LeftPanel() {
    return (
        <div className="hidden lg:flex lg:w-1/2 bg-[#2472CE] flex-col min-h-full justify-between p-8">
            <Brand className="bg-white rounded-lg p-1 w-60 m-2 "/>
            <div className="mt-16 flex-1 flex-col flex justify-center">
                <h2 className="text-3xl font-bold text-white text-center m-2 self-center">
                Start your placement journey today
                </h2>
                <p className="text-white text-center m-2 self-center">
                    Join thousands of students preparing for top companies with guided roadmaps, coding practice, ATS resumes, and mock interviews.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8 self-center">
                    <div className="bg-white/10 rounded-lg p-4 flex flex-col  ">
                        <h3 className="text-3xl font-bold text-white">50+</h3>
                        <p className="text-white ">Learning Modules</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 flex flex-col">
                        <h3 className="font-bold text-white text-3xl">500+</h3>
                        <p className="text-white ">Practice Questions</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 flex flex-col">
                        <h3 className=" font-bold text-white text-3xl">32</h3>
                        <p className="text-white ">Mock Interview Scenarios</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 flex flex-col">
                        <h3 className="font-bold text-3xl text-white">6</h3>
                        <p className="text-white ">Company Roadmaps</p>
                    </div>
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            </div>
            <footer className="w-full py-6 text-center text-sm text-white/70 ">
                <p>© {new Date().getFullYear()} PlaceMentor AI. All rights reserved.</p>
            </footer>
        </div>
        
    );
}