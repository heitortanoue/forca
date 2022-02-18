export default function simplifyWord (word) {
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

    for (const i in special_chars) {
        console.log(i)
        if (i) {
            return arr.indexOf(i) != -1
        } else {
            return arr.indexOf(letter) != -1
        }
    }
}