const Card = ({ elem }) => {
    console.log(elem)

    return (
        <div>
            <div className="productImg">
                <img src={elem.photo} alt="Foto do produto" />
                <h2>{elem.name}</h2>
            </div>
        </div>
    )
}

export default Card