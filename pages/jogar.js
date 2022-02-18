import { useRef, useState } from "react";
import palavras from "../palavras.json";
import Keyboard from "../components/keyboard";
import Container from "../components/container";
import Image from "next/image";
import Popup from "../components/popup";
import axios from "axios";

export default function Jogar() {
    const chooseRandomWord = () => {
        const max_length = palavras.length
        const index = Math.floor(Math.random() * max_length)
        return palavras[index]
    }

    function simplifyWord (spl_word) {
        const special_chars = {
            "ã": "a",
            "á": "a",
            "à": "a",
            "â": "a",
            "é": "e",
            "ê": "e",
            "ç": "c",
            "ú": "u",
            "õ": "o",
            "ô": "o"
        }
    
        let final_word = ""
        for (const i of spl_word) {
            if (special_chars[i]) {
                final_word += special_chars[i]
            } else {
                final_word += i
            }
        }

        return final_word.split('')
    }

    function checkChar (w, char) {
        return w.indexOf(char) != -1
    }

    const max_chances = 6
    const [word, set_word] = useState(chooseRandomWord())
    const points = useRef(1 - 1)
    const chances = useRef(max_chances)
    const tried_chars = useState([])

    const simple_word = simplifyWord(word.split(""))
    const doll_position = max_chances - chances.current
    const win = simple_word.every(char => checkChar(tried_chars[0], char))
    const lose = chances.current <= 0

    const nextLevel = () => {
        set_word(chooseRandomWord())
        tried_chars[1]([])
        chances.current = max_chances
        points.current += 100
    }

    const restart = () => {
        set_word(chooseRandomWord())
        tried_chars[1]([])
        chances.current = max_chances
        points.current = 0        
    }

    const submitPoints = (e) => {
        e.preventDefault()
        if (e.target.name.value && e.target.email.value) {
            axios.post("/api/logPoints", {
                name: e.target.name.value,
                email: e.target.email.value,
                points: points.current
            })
            restart()
        } 
    }

    return (
        <>
            {lose ? <Popup color="rgba(185, 28, 28, .5)">
                <div className="flex flex-col max-w-sm">
                    <div className="text-red-600 flex gap-2 items-center text-2xl mb-5">
                        <i class="fas fa-solid fa-skull"></i>
                        <div>Você perdeu!</div>
                    </div>
                    <div> Não foi dessa vez! Sua pontuação foi de <strong>{points.current}</strong>. Entre para o ranking:</div>
                    <form className="flex flex-col gap-2 my-3" onSubmit={(e) => submitPoints(e)}>
                        <div className="flex-col flex">
                            <div className="text-xs text-dark">Nome</div>
                            <input type="text" name="name" className="inputfield"/>
                        </div>
                        <div className="flex-col flex">
                            <div className="text-xs text-dark">Email</div>
                            <input type="email" name="email" className="inputfield"/>
                        </div>
                        <button type="submit" className="btn mt-3">
                        Entrar no Ranking
                    </button>
                    </form>
                    <div className="text-center text-xs hover:underline cursor-pointer mt-2" onClick={() => restart()}>
                        Continuar o jogo
                    </div>
                </div>
            </Popup> : null}
            {win ? <Popup color="rgba(4, 120, 87, .5)">
                <div className="flex flex-col max-w-sm">
                    <div className="text-emerald-500 flex gap-2 items-center text-2xl mb-5">
                        <i class="fas fa-solid fa-medal"></i>
                        <div>Você passou!</div>
                    </div>
                    <div>Será que você consegue passar do próximo nível?!</div>
                    <button onClick={() => {nextLevel()}} className="btn mt-3">
                        Avançar
                    </button>
                </div>
            </Popup> : null}
            <Container>
                    <div className="lg:w-1/2 flex flex-col gap-12 items-center">
                        <div className="flex flex-col items-center">
                            <div className="text-4xl text-tertiary styled-font">
                                <div>Jogo da forca</div> 
                            </div>
                                <div className="flex justify-around gap-10 text-lg">
                                <div>
                                    <span className="font-semibold">Chances:</span> {chances.current}/{max_chances}
                                    </div>
                                <div>
                                    <span className="font-semibold">Pontos:</span> {points.current}
                                </div>                        
                            </div>
                        </div>
                        <div className="my-10 doll relative m-auto scale-150">
                            <Image src="/man.png" layout="fill" objectFit={"cover"}
                            objectPosition={`${-doll_position*75}px`} priority/>
                        </div>
                        <div className="flex gap-3">
                            {simple_word.map((char, ind) => 
                                <div key={ind} className="w-8 border-b-4 border-dark text-dark text-center text-2xl h-10">
                                {checkChar(tried_chars[0], char) ? char.toUpperCase() : ""}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex-1">
                        <Keyboard current_word={simple_word} tried_chars={tried_chars}
                        chances={chances}/>
                    </div>
            </Container>
        </>
    )
}
