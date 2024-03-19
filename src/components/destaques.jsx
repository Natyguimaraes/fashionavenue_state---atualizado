import React, { useState } from 'react';
import "../css/styles.css";
import GaleriaHome from './galeriaHome'; // Importe o componente da galeria da home
import GaleriaMasculina from './galeriaMasculina';
import GaleriaFeminina from './galeriaFeminina';
import GaleriaInfantil from './galeriaInfantil';
import GaleriaCalcados from './galeriaCalcados';

function Destaques() {
    const [secaoAtual, setSecaoAtual] = useState('galeriaHome');

    const handleClick = (secao) => {
        setSecaoAtual(secao);
    };

    return (
        <div className="container_galeria">
            <div className="destaques">
                <div className="card1">
                    {/* Substitua a lista ul/li por imagens clicáveis */}
                    <img src="home.png" alt="Galeria Home" onClick={() => handleClick('galeriaHome')} />
                    <img src="modamasculina.png" alt="Moda Masculina" onClick={() => handleClick('galeriaMasculina')} />
                    <img src="modafeminina.png" alt="Moda Feminina" onClick={() => handleClick('galeriaFeminina')} />
                    <img src="infantil.png" alt="Moda Infantil" onClick={() => handleClick('galeriaInfantil')} />
                    <img src="calcados.png" alt="Calçados" onClick={() => handleClick('galeriaCalcados')} />
                </div>
            </div>
            
            {secaoAtual === 'galeriaHome' && <GaleriaHome />}
            {secaoAtual === 'galeriaMasculina' && <GaleriaMasculina />}
            {secaoAtual === 'galeriaFeminina' && <GaleriaFeminina />}
            {secaoAtual === 'galeriaInfantil' && <GaleriaInfantil />}
            {secaoAtual === 'galeriaCalcados' && <GaleriaCalcados />}
        </div>
    );
}

export default Destaques;
