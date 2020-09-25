function calculateTax(amount: number, format: boolean): number | string {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxNumber = calculateTax(100, false) as number;
let taxString  = calculateTax(100, true) as string;
let taxBoolean  = calculateTax(100, true) as any as boolean;


console.log(taxNumber.toFixed(2));
console.log(taxString.toUpperCase());