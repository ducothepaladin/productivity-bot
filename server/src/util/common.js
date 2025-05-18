export const generateId = (index) => {

    const now = new Date();
    const day = now.getDay().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    return `${index}${year}${day}${month}`
}   