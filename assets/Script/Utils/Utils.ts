export const getSpPath = (suit: string, count: number) => {
    let letter: string = ''
    switch (suit) {
        case 'HongTao':
            letter = 'd'
            break;
        case 'HeiTao':
            letter = 'h'
            break;
        case 'MeiHua':
            letter = 'b'
            break;
        case 'FangKuai':
            letter = 'r'
            break;
    }

    return `Texture/Cards/${suit}/${letter}${count}`
}