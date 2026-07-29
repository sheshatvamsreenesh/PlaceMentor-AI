import Brand from "../brand";

export default function LeftPanel() {
    const stats = [
        { value: "50+", label: "Learning Modules" },
        { value: "500+", label: "Practice Questions" },
        { value: "32", label: "Mock Interview Scenarios" },
        { value: "6", label: "Company Roadmaps" },
    ];

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
                {stats.map((stat) => (
                    <div
                    key={stat.label}
                    className="rounded-xl bg-white/10 p-5 backdrop-blur-sm transition hover:bg-white/15"
                >
                    <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                    <p className="mt-1 text-sm text-white/90">{stat.label}</p>
                    </div>
                ))}
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            </div>
            <footer className="w-full py-6 text-center text-sm text-white/70 ">
                <p>© {new Date().getFullYear()} PlaceMentor AI. All rights reserved.</p>
            </footer>
        </div>
        
    );
}