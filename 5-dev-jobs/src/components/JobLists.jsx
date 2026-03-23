import {useState} from "react";
import jobs from "../data/data.js";
import {Link} from "react-router-dom";

export const JobLists = () => {
    const [jobData, setJobData] = useState(jobs)
    const [searchTerm, setSearchTerm] = useState("");
    const [searchByLocation, setSearchByLocation] = useState("");
    const searchTermValue = searchTerm.toLowerCase();

    const locationSearchHandler = () => {
        const filterData = jobs.filter((job) => {
            if (job.location.toLowerCase().includes(searchByLocation.toLowerCase())) {
                return job;
            }
        })
        setJobData(filterData)
    }

    const filterJobData = (e) => {
        const filterValue = e.target.value;
        if (filterValue === "full-time") {
            const filterData = jobs.filter((job) => job.contract === "Full Time");
            setJobData(filterData);
        } else if (filterValue === "part-time") {
            const filterData = jobs.filter((job) => job.contract === "Part Time");
            setJobData(filterData);
        } else if (filterValue === "freelance") {
            const filterData = jobs.filter((job) => job.contract === "Freelance");
            setJobData(filterData);
        }
    }

    return (
        <section className="job__list">
            <div className="container">
                <div className="job__list__wrapper">
                    <div className="search__panel">
                        <div className="search__panel-01">
                            <input type="text" placeholder="Búsqueda por titulo, empresas" value={searchTerm}
                                   onChange={(event) => setSearchTerm(event.target.value)}/>
                        </div>
                        <div className="search__panel-02">
                            <input type="text" placeholder="Búsqueda por ubicación" value={searchByLocation}
                                   onChange={(event) => setSearchByLocation(event.target.value)}/>
                            <button onClick={locationSearchHandler}>Buscar</button>
                        </div>
                        <div className="search__panel-03">
                            <select onChange={filterJobData}>
                                <option>Filtrar trabajo por</option>
                                <option value="full-time">Tiempo completo</option>
                                <option value="part-time">Tiempo parcial</option>
                                <option value="freelance">Freelance</option>
                            </select>
                        </div>
                    </div>
                    <div className="jobs__wrapper">
                        {
                            jobData?.filter((job) => {
                                if (searchTerm === "") return job
                                if (job.position.toLowerCase().includes(searchTermValue) || job.company.toLowerCase().includes(searchTermValue)) return job;
                            }).map((item) => (
                                <div className="job__item" key={item.id}>
                                    <img src={item.logo} alt={item.logo} align={item.logo}/>
                                    <div className="job__content">
                                        <h6>{item.postedAt}-{item.contract}</h6>
                                        <h1>
                                            <Link to={`/jobs/${item.position}`}>
                                                {item.position}
                                            </Link>
                                        </h1>
                                        <p>{item.company}</p>
                                        <div className="location">
                                            <p>
                                                Location: <span>{item.location}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}