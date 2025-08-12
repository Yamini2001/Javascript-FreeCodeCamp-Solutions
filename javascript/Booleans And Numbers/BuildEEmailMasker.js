function maskEmail(email) {
    // Find the position of the @
    let atIndex = email.indexOf("@");
    
    // Extract the local part (before @) and domain part (after @)
    let localPart = email.slice(0, atIndex);
    let domainPart = email.slice(atIndex);
    
    // Mask: first character + * repeated + last character
    if (localPart.length <= 2) {
        // If only 2 characters, just mask the middle
        return localPart[0] + "*" + localPart[1] + domainPart;
    }
    let maskedLocal = localPart[0] + "*".repeat(localPart.length - 2) + localPart[localPart.length - 1];
    
    // Return masked email
    return maskedLocal + domainPart;
}
let email = "apple.pie@example.com"; // ✅ valid email address

// Call the function and log the result
console.log(maskEmail(email));

// Test cases
console.log(maskEmail("apple.pie@example.com"));      // "a*******e@example.com"
console.log(maskEmail("freecodecamp@example.com"));   // "f**********p@example.com"
console.log(maskEmail("info@test.dev"));              // "i**o@test.dev"
console.log(maskEmail("user@domain.org"));            // "u**r@domain.org"
