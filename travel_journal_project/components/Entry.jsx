export default function Entry (props) {
    return (
        <article className="journal-entry">
            <div className="travel-img-container">
                <img className="travel-img" src={props.entry.img.src} alt={props.entry.img.alt}/>
            </div>
            <div className="info-container">
                <div className="info-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <h3 className="country">{props.entry.country}</h3>
                    <a href={props.entry.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2 className="entry-title">{props.entry.title}</h2>
                <p className="trip-dates">{props.entry.dates}</p>
                <p className="entry-text">{props.entry.text}</p>
            </div>
        </article>
    )
}
