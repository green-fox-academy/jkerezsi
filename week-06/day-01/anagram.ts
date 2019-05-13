function Anagram (wordA:string, wordB:string):boolean{
    return wordA.split('').sort().join('') === wordB.split('').sort().join('')
}
