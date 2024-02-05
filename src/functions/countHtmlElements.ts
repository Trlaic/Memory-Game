export function cssNameDependingOnElementCount(number: number):string {
    switch(number) {
        case 1: return 'letter_1'
        case 2: return 'letter_2'
        case 3: return 'letter_3'
        case 4: return 'letter_4'
        case 5: return 'letter_5'
        case 6: return 'letter_6'
        case 7: return 'letter_7'
        case 8: return 'letter_8'
        default: return 'letter_9'
    }
}

