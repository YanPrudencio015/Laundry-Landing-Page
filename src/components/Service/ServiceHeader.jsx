import React from "react";
import './service.css';

function ServiceHeader(props){
    return(
            <section className="service-header">
                <h3 className="service-header-title">Nossos Serviços</h3>
                <div className="service-header-Description-section">
                    <h1 className="service-header-title-Description">Título Genérico</h1>
                    <p className="service-header-Description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quis similique saepe autem repudiandae neque unde sequi, 
                        adipisci inventore ullam ratione numquam! 
                        Ex amet perspiciatis sunt et modi autem dolor eius?
                    </p>
                </div>
            </section>

    )
}
/*
inspiration 
https://i.pinimg.com/736x/e4/79/10/e4791035066abd6340eafd9dedf33a48.jpg
https://i.pinimg.com/736x/9f/b8/6b/9fb86bc01ae9e87a37d5ff2af3bdd043.jpg
https://i.pinimg.com/736x/11/dd/24/11dd24c535087d74094527430b0bf79a.jpg
https://i.pinimg.com/736x/2d/81/cc/2d81cc26015878771b12310ec1eeceef.jpg
https://i.pinimg.com/736x/f4/bf/19/f4bf192b5533bb524339e450ef5a9ddc.jpg


*/
export default ServiceHeader;