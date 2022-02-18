import { useEffect } from "react";

export default function Keyboard ({ current_word, tried_chars, chances }) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const setChars = (letter) => {
        if (tried_chars[0].indexOf(letter) != -1) {return}
        tried_chars[1]([...tried_chars[0], letter])
    }

    const checkLetter = (letter) => {
        setChars(letter)
        if (current_word.indexOf(letter) != -1) {
            return 2
        } else {
            chances.current--
            return 1
        }
    }

    const KeyboardKey = ({children}) => {
        // 0 = inativo, 1 = errado, 2 = certo
        const state_styles = [
            {color: "#475569", borderColor: "#475569"},
            {color: "#94a3b8", borderColor: "#94a3b8"},
            {color: "#FFFFFF", borderColor: "#10b981", backgroundColor: "#10b981"}
        ]

        // confere o estado inicial, se ja tentou a letra, se acertou, ou se errou
        const state = tried_chars[0].indexOf(children) != -1 ? (current_word.indexOf(children) != -1) ? 2 : 1 : 0

        return (
            <div className={`lg:w-16 lg:h-16 w-10 h-10 border-2 rounded-md flex transition-all
            ${state == 0 ? "hover:backdrop-brightness-95 cursor-pointer" : "select-none"}`}
            onClick={() => checkLetter(children)} style={state_styles[state]}>
                <div className="m-auto text-xl">{children.toUpperCase()}</div>
            </div>
        )
    }

    return (
        <div className="flex lg:gap-4 gap-2 flex-wrap justify-center">
            {
                alphabet.map((char) => {
                    return (
                        <KeyboardKey key={char}>{char}</KeyboardKey>
                    )
                })
            }
        </div>
    )
}