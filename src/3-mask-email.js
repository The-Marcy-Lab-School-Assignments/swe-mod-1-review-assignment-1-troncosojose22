const maskEmail = (email) => {
    const trimmedEmail = email.trim();
    const arr = trimmedEmail.split('@');
    
    if (arr[0].length < 3) return trimmedEmail; 

    return `${trimmedEmail[0]}***@${arr[1]}`
}

