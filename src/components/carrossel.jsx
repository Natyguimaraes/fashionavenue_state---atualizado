import React, { useState, useEffect} from 'react';

function Carrossel() {
    const imagens = ['banner1.png', 'banner2.png', 'banner3.png', 'banner4.png'];
    const [indiceAtual, setIndiceAtual] = useState(0);

    const proximoSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice +1) % imagens.length);

};
    const voltarSlide = () => {
    setIndiceAtual((prevIndice) => (prevIndice - 1 +  imagens.length) % imagens.length);
};

useEffect (() => {
    const intervalo = setInterval(proximoSlide, 5000);
    return() => clearInterval(intervalo);
});

return (
    <div>
        <img src={imagens[indiceAtual]} alt={'Imagem ${indiceAtual +1}'} className="carrossel"/>
        <div className="botoes">
        <button onClick={voltarSlide} id="passar_button">  </button>
        <button onClick={proximoSlide} id="passar_button">  </button>
        </div>
    </div>

);
}
export default Carrossel;


