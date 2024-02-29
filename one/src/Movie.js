function Movie(props)
{
    const {title,url}=props
    return(
        <div className="movie">
            <img src={url} alt="movie"/>
            <h1>{title}</h1>
        </div>
    )
}
export default Movie;