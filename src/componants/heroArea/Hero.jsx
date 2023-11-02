

export const Hero = () => {
    return (
        <>

            <div className="hero min-h-screen  container h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="./images/user.png" className="w-full rounded-lg h-screen py-7" />
                    <div className="w-3/5 space-y-5 font-semibold ">
                        <h1 className="text-5xl font-semibold text-[#191919] leading-[60px]">One Step <br /> Closer To Your <br /><span className="text-[#808eff] ">Dream Job</span></h1>
                        <p className="py-6 font-normal text-sm text-zinc-500">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-sky-500 to-indigo-500 border-none">Start Applying</button>
                    </div>
                </div>
            </div>

        </>
    )
}
