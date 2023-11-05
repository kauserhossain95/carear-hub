import { useLoaderData, useParams } from "react-router-dom"


export const JobDetails = () => {
  const jobs = useLoaderData();
  const {id} = useParams();
  const job = jobs.find(job => job.id == id)
  

  return (
    <div>
        <h1>{job.job_title}</h1>
    </div>
  )
}
