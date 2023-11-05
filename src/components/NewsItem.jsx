import news from "../assets/news.jpg"
const NewsItem = ({ title, description, src, url }) => {
    return (

        <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img src={src ? src : news} style={{ height: "200px", width: "100%" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : "Info about something that has just happened."}</p>
                <a href={url} className="btn btn-primary">Read More <i class="fa-solid fa-arrow-right" style={{color:"white"}}></i></a>
            </div>
        </div>

    )
}

export default NewsItem
