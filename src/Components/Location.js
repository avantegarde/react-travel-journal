function Location(props){
  return (
    <div className="item">
      <div className="image" style={{backgroundImage: `url(${props.imageUrl})`}}>
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="item-content">
        <p className="location">
          <i className="fa-solid fa-location-dot"></i>
          <span>{props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </p>
        <h2>{props.title}</h2>
        <p className="dates">{props.startDate} - {props.endDate}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
export default Location