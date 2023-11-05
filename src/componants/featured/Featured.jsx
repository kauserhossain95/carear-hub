import { useEffect, useState } from "react"
import { Job } from "../job/Job";


export const Featured = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [allJob, setAllJob] = useState(4)
    useEffect(() => {
        fetch('./jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
            
    }, []);
   
    return (
        <section className="text-center my-14 space-y-6">
            <h2 className="font-bold text-4xl text-[#191919] ">Featured Jobs</h2>
            <p className="text-[#bababa] text-sm my-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-8">
                {
                    featuredJobs.slice(0, allJob).map(job => <Job key={job.id} job ={job}></Job>)
                }
            </div>
            <button className={allJob === featuredJobs.length && 'hidden'} onClick={() => setAllJob(featuredJobs.length)}>Show All</button>

        </section>
    )
}
