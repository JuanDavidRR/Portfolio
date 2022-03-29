import { products } from '../../data'
import { Portfolio } from '../porfolio/Portfolio'
import './portfolio-list.css'


export const PortfolioList = () => {
    return (
        <div id="portafolio" className="product-list-container mt-3">
            <div className="product-list-text">
                <h1 className="product-list-title">Proyectos</h1>
                <p className="product-list-description">
                    Acontinuación me complace presentarte mi portafolio de mis principales proyectos. En esta recopilación solo se encuentran algunos de los más importantes, pero <b>no representa todo mi trabajo</b>; si deseas tener un documento con todos mis sitios puedes contactarme. Los presentes proyectos fueron hechos para mis estimados clientes mediante <b>WordPress con HTML, CSS y JavaScript personalizado</b> y otros hechos con <b>React JS</b>.
                </p> 
            </div>
            <div className="product-list">
                {products.map((product, i) => (
                    <Portfolio 
                        i={product.id}
                        title={product.title} 
                        img={product.img}
                        description={product.description}
                        link={product.link}
                        
                        />
                ))}
            </div>
        </div>
    )
}
