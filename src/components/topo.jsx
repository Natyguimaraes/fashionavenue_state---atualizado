import { useState } from 'react'
import "../css/styles.css";
import Home from './home';

import Sobre from './sobre'
import LoginPage from './cadastro';


function Topo() {
    const [secaoAtual, setSecaoAtual] = useState('home');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    };

    return (

        <><header>

            <img src="fashionavenuelogo.png" alt="Logo da Fashion Avenue" className="logo" />

            <div className="divBusca esconder-em-mobile">
                <input type="text" id="txtBusca" placeholder="Buscar..." />
                <img src="search.png" id="btnBusca" alt="Buscar" />
            </div>

            <nav>
                <ul>
                    <li onClick={() => cliqueSecao('home')} className='botao-menu'> HOME </li>
                    <li onClick={() => cliqueSecao('conta')} className='botao-menu'> CONTA </li>
                    <li onClick={() => cliqueSecao('sobre')} className='botao-menu'> SOBRE </li>
                </ul>

            </nav>
        </header>
        <div>
                {secaoAtual === 'home' && (
                    <div className='secao'>
                      <Home />
                        {}

                    </div>
                )}
                {secaoAtual === 'conta' && (
                    <div className='secao'>
                    <LoginPage/>
                    </div>
                )}
                {secaoAtual === 'sobre' && (
                    <div className='secao'>
                    <Sobre/>
                    </div>
                )}
            </div></>
        
    );
}

export default Topo;