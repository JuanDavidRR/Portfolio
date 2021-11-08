import './portfolio.css'

export const Portfolio = ({title, img, description, link, id}) => {
    return (
        
        <div className="product">
            <div className="product-browser">
                <div className="product-circle"></div>
                <div className="product-circle"></div>
                <div className="product-circle"></div>
            </div>

            <a href={link} target="_blank" rel="noreferrer">
            <img className="product-image" src={img} alt={title}/>
            </a>
           
           </div>
    )
}
