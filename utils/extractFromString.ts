export const extractLink = (string: string) => {
    const extractedLinks = string
        .replace(/\(([^()]+)\)/g, '')
        .match(/(((https?:\/\/)|(www\.))[^\s]+)/g)
        || [];

    const uniqueLinks: string[] = [];
    extractedLinks.forEach((element) => {
        if (!uniqueLinks.includes(element)) {
            uniqueLinks.push(element);
        }
    });

    const link = (uniqueLinks.length === 1 && !uniqueLinks[0].includes('https://git')) ? uniqueLinks[0] : null
    
    return uniqueLinks.length === 1 ? link : null; 
}

export const extractEmail = (string: string) => {
    const extractedEmails = string
        .match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)
        || []

    const uniqueEmails: string[] = [];
    extractedEmails.forEach((element) => {
        if (!uniqueEmails.includes(element)) {
            uniqueEmails.push(element);
        }
    });

    return uniqueEmails.length === 1 ? uniqueEmails[0] : null; 
}