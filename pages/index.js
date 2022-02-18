import Container from "../components/container";
import { useRouter } from "next/router";

export default function Index () {
    const router = useRouter()

    return (
        <Container disable_back={true}>
            <div className="w-full flex flex-col gap-6">
                <div className="text-6xl text-tertiary styled-font text-center">
                    Jogo da forca
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-2xl flex gap-2 text-secondary font-semibold items-center">
                        <i className="fas fa-question"></i>
                        <div>Como jogar?</div>
                    </div>
                    <div>
                        O jogo da forca é um jogo em que o jogador tem que acertar qual é a palavra proposta, tendo como dica o número de letras e o tema ligado à palavra. A cada letra errada, é desenhado uma parte do corpo do enforcado. O jogo termina ou com o acerto da palavra ou com o término do preenchimento das partes corpóreas do enforcado.
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-2xl flex gap-2 text-secondary font-semibold items-center">
                        <i className="fas fa-question"></i>
                        <div>Quando eu ganho?</div>
                    </div>
                    <div>
                        Caso a letra não exista nessa palavra, desenha-se uma parte do corpo (iniciando pela cabeça, tronco, braços…). O jogo é ganho se a palavra é adivinhada. Caso o jogador não descubra qual palavra é ele que perde.
                    </div>
                </div>
                <div className="flex gap-8 mx-auto">
                    <button className="btn flex items-center gap-2"
                    onClick={() => router.push("/jogar")}>
                        <i className="fas fa-gamepad"></i>
                        <div>Jogar agora</div> 
                    </button>
                    <button className="btn-secondary flex items-center gap-2"
                    onClick={() => router.push("/placar")}>
                        <i className="fas fa-trophy"></i>
                        <div>Placar</div> 
                    </button>
                </div>
            </div>
        </Container>
    )
}