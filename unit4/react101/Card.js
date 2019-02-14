// EVERY REACT COMPONENT MUST RETURN A SINGLE DOM ELEMENT
function Card(props){
    const instructor = props.instructor;
    const course = props.course;
    const image = props.image;
    const saleOn = true;
    return (
        <div>
            <div className="col s3">
                <div className="card hoverable medium">
                    <div className="card-image">
                        <img src={image} />
                    </div>
                    <div className="card-content">
                        <p>{course}</p>
                        <p>{instructor}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">${saleOn ? 9.99 : 59.99}</a>
                    </div>
                </div>
            </div>    
        </div>
    )
}