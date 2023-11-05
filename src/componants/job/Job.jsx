import { Link } from "react-router-dom";


export const Job = ({ job }) => {
    const { id, logo, company_name, remote_or_onsite, location, job_title, salary } = job;
    return (
        <div className="container">
            <div className="card  bg-base-100 shadow-xl p-6 border border-indigo-600 text-left">
                <figure><img className="text-left" src={logo} alt={job_title} /></figure>
                <div className="card-body space-y-4">
                    <h2 className="card-title">{job_title}</h2>
                    <p className="text-xl">{company_name}</p>
                    <div className="card-actions">
                        <button className="px-8 py-[10px] rounded-md border border-red-200 bg-none">{remote_or_onsite}</button>
                        <button className="px-8 py-[10px] rounded-md border border-red-200 bg-none">{location}</button>
                    </div>
                    <div>
                    <p><span></span><span>{location}</span><span className="ml-5">{salary}</span></p>

                    </div>
                    <Link to = {`./job/${id}`}><button className="btn space-y-5 capitalize">Show Details</button></Link>
                </div>
            </div>

        </div>
    )
}
