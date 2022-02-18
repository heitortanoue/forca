export default function specialChars (arr, letter) {
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

    if (special_chars[letter]) {
        return arr.indexOf(special_chars[letter]) != -1
    } else {
        return arr.indexOf(letter) != -1
    }
}