import React, { useState } from "react";
import "./Overlay.css";
import Modal from "react-overlays/Modal";

export default function App() {
    // React state to control Modal visibility
    const [showModal, setShowModal] = useState(false);

    // Backdrop JSX code
    const renderBackdrop = (props) =>
        <div className="backdrop" {...props} />;

    var handleClose = () => setShowModal(false);

    return (
        <div className="modal-example">
            <div>
                <button type="button" onClick={() => setShowModal(true)}>
                    Como Funciona
                </button>
            </div>
            <Modal
                className="modal"
                show={showModal}
                onHide={handleClose}
                renderBackdrop={renderBackdrop}
            >
                <>
                    <div className="modal-header">
                        <div className="modal-title">Instruções</div>
                    </div>
                    <div className="modal-desc">
                        <div className="pesquisa">
                            <h1><strong>Quero pesquisar sobre solos em território português</strong></h1>
                            <ol>
                                <li>Insira a localização na pesquisa acima, em coordenadas, ou por morada ou local;</li>
                                <li>Verifique os resultados no ponto exato que elegeu, de acordo com os dados das sondagens mais próximas;</li>
                                <li>Selecione pontos de sondagem geotécnica e veja os resultados em cada região.</li>
                            </ol>
                        </div>
                        <div className="upload">
                            <h1><strong>Quero inserir dados de um relatório geotécnico</strong></h1>
                            <ol>
                                <li>Abra a tab para aceder ao formulário; </li>
                                <li>Adicione os resultados de cada sondagem para um respectivo estudo com "Adicionar sondagem";</li>
                                <li>Após inserir todas as sondagens, carregue em "Submeter";</li>
                                <li>Insira o relatório geotécnico referente à informação que introduziu para que possamos validar os resultados. Deixe-nos o seu contacto caso exista alguma necessidade de esclarecimento e para receber atualizações sobre o estado da submissão;</li>
                                <li>Os dados foram submetidos e, após a revisão técnica, estará disponível na plataforma para visualização.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="primary-button" onClick={handleClose}>
                            Fechar
                        </button>
                    </div>
                </>
            </Modal>
        </div>
    );
}