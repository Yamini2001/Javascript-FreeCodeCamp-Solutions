function truncateString(str, num) {
  if (num >= str.length) {
    return str; // No truncation if num is equal or longer
  }
  return str.slice(0, num) + "...";
}

// Tests
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // A-tisket...
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // Peter Piper...
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // full string
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); // full string
console.log(truncateString("A-", 1)); // A...
console.log(truncateString("Absolutely Longer", 2)); // Ab...
