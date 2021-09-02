function solve(input){
    let furniture = []
    let total = 0

// >>[A-Z][a-zA-Z]+<<\d+\.?(\d+)?!\d+
//>>(?<name>[A-Z][a-zA-Z]+)<<(?<price>\d+\.?(?:\d+)?)!(?<qty>\d+)
    let pattern = />>(?<name>[A-Z][a-zA-Z]+)<<(?<price>\d+\.?(?:\d+)?)!(?<qty>\d+)/
    while(input[0] !== 'Purchase'){
        let line = input.shift()

        let match = pattern.exec(line)

        if(match !== null){
            let{name, price, qty} = match.groups
            price = Number(price)
            qty = Number(qty)
            total += price * qty
            furniture.push(name)
        }
        
    }

    console.log('Bought furniture:')
    for(item of furniture){
        console.log(item)
    }

    console.log(`Total money spend: ${total.toFixed(2)}`)


}

solve([">>Sofa<<312.23!3",
">>TV<<300!5",
">Invalid<<!5",
"Purchase"])

