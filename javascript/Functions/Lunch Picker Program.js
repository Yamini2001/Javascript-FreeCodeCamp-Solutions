const lunches = [];

// Add lunch to end
function addLunchToEnd(lunches, newLunch) {
  lunches.push(newLunch); // mutate original array
  console.log(`${newLunch} added to the end of the lunch menu.`);
  return lunches;
}

// Add lunch to start
function addLunchToStart(lunches, newLunch) {
  lunches.unshift(newLunch); // mutate original array
  console.log(`${newLunch} added to the start of the lunch menu.`);
  return lunches;
}

// Remove last lunch
function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
    return lunches;
  }
  const removed = lunches.pop();
  console.log(`${removed} removed from the end of the lunch menu.`);
  return lunches;
}

// Remove first lunch
function removeFirstLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
    return lunches;
  }
  const removed = lunches.shift();
  console.log(`${removed} removed from the start of the lunch menu.`);
  return lunches;
}

// Get random lunch
function getRandomLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches available.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * lunches.length);
  console.log(`Randomly selected lunch: ${lunches[randomIndex]}`);
}

// Show lunch menu
function showLunchMenu(lunches) {
  if (lunches.length === 0) {
    console.log("The menu is empty.");
    return;
  }
  console.log(`Menu items: ${lunches.join(", ")}`);
}
