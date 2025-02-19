const fs = require("fs");

// Path to the README file
const readmeFile = "README.md";

// Get the current year and calculate experience
const startYear = 2021; // Change if your experience started earlier
const yearsOfExperience = new Date().getFullYear() - startYear;

// Read the README file
fs.readFile(readmeFile, "utf8", (err, content) => {
  if (err) {
    console.error("Error reading README.md:", err);
    return;
  }

  // Replace any number before "Years Experience" dynamically
  const updatedContent = content.replace(/\d+ Years Experience/, `${yearsOfExperience} Years Experience`);

  // Write the updated content back to README
  fs.writeFile(readmeFile, updatedContent, "utf8", (err) => {
    if (err) {
      console.error("Error writing to README.md:", err);
      return;
    }
    console.log("✅ README updated successfully!");
  });
});
