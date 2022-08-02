export const fetchTransactions = async () => {
    try {
        const result = await fetch("", {})
        const transactions = result.json()
        return transactions
    } catch (error) {

    }
}

export const fetchTransaction = async (transactionID) => {
    try {
        const result = await fetch("", {})
        const transactions = result.json()
        return transactions
    } catch (error) {

    }
}