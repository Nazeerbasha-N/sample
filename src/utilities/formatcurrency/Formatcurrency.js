const currency_formatter = Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',})

export function Formatcurrency(number){
    return currency_formatter.format(number)
}