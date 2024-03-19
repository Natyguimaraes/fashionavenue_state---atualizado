import "../css/styles.css";


function Rodape() {
    return (

        <div className="rodape">
            <nav>
            <h1> Nossas Redes Sociais </h1>

<div className="secao_icons">
    <div className="icon">
        <a href="#" className="botao_redessociais">
            <img src="instagram.svg" />
        </a>
    </div>

    <div className="icon">
        <a href="#" className="botao_redessociais">
            <img src="whatsapp.svg" />
        </a>
    </div>
    <div className="icon">
        <a href="#" className="botao_redessociais">
            <img src="twitter.svg" />
        </a>
    </div>
</div>
                <div className="endereco">
                <div className="localizacao">
                <strong>Endereço:</strong> Rua das Flores, 123, Centro, Alagoinhas - Ba <br/>
                <strong>Cep:</strong> 48000-000 <br/>
                <strong>Telefone:</strong> (75)1234-5678<br/>
                </div>
                
                <div className="horario">
                    <strong>Horário de Funcionamento:</strong><br/>
                    Segunda a Sexta: 9h às 18h
                    Sábado: 9h às 13h
                </div>
                </div>

                <div className="copy">
                <p> @Copyright 2024 FASHION AVENUE BR. Todos os direitos reservados</p>
                </div>
            </nav>
        </div>
       

    )

} export default Rodape;