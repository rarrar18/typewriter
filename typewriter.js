const sentence = "hello there from lighthouse labs \n";
// Assign a starting duration placholder
let duration = 0;
// Loop through each character of the string, output to console
for (const char of sentence) {
  // Increment 50 milliseconds to duration time
  duration += 50;
  // Print out each char in 50ms intervals
  setTimeout( () => {
    process.stdout.write(char);
  }, duration)
}