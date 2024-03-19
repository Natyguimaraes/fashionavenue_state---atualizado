import "../css/styles.css";
import React from 'react';
import Rodape from "./rodape";

function Sobre(){
    return (

    <>
    <div className="sobre_site">
    
    <div className="div_sobre">
        <h1> Sobre a Fashion Avenue </h1>
        <p> Bem-vindo à Fashion Avenue, o seu destino definitivo para moda e estilo impecáveis! Desde a sua inauguração, há mais de uma década, a Fashion Avenue tem sido um farol de elegância, inovação e qualidade no mundo da moda. </p>
        </div>
        <div className="div_sobre">
        <h1> Nossa Missão </h1> 
       <p> Na Fashion Avenue, nossa missão é simples: proporcionar uma experiência de compra excepcional, onde cada cliente se sinta único e valorizado. Nosso compromisso com a excelência se reflete em cada detalhe, desde a seleção cuidadosa de marcas renomadas até o atendimento personalizado e amigável. </p>
       </div>
       <div className="div_sobre">
       <h1> O Que Nos Diferencia </h1>
       <p> O que nos diferencia na Fashion Avenue é a nossa dedicação inabalável à qualidade. Cada peça em nossa coleção é cuidadosamente selecionada, garantindo que apenas os melhores produtos cheguem às nossas prateleiras. Nosso foco na qualidade se estende além das roupas; estamos comprometidos em oferecer um ambiente de compras luxuoso e acolhedor, onde os clientes possam se sentir verdadeiramente em casa. </p>
       </div>
       <div className="div_sobre">
    <h1> Nossa Coleção </h1>
    <p> Em nossa extensa coleção, você encontrará uma ampla variedade de roupas cuidadosamente escolhidas para atender a todos os estilos e ocasiões. Desde as últimas tendências da moda até os clássicos atemporais, temos algo para cada gosto e preferência.</p>
    </div>
    <div className="img_sobre">
       <img src="roupa1.png.png"></img>
    </div>
    </div>
        <Rodape/>
        </>

    )
}
export default Sobre;