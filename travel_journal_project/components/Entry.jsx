export default function Entry (props) {
    return (
        <article className="journal-entry">
            <div className="travel-img-container">
                <img className="travel-img" src={props.img.src} alt={props.img.alt}/>
            </div>
            <div className="info-container">
                <div className="info-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <h3 className="country">{props.country}</h3>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    )
}
