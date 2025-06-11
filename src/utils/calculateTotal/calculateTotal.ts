export function calculateTotal(amounts: string): number {
    if (!amounts) {
        return 0;
    }
    // Substitui novas linhas por vírgulas e depois divide pela vírgula
    const amountArray = amounts.replace(/\n/g, ",").split(',');
    
    let total = 0;
    for (const numStr of amountArray) {
        // Remove espaços em branco e converte para número
        const num = parseFloat(numStr.trim());
        if (!isNaN(num)) {
            total += num;
        }
    }
    return total;
}