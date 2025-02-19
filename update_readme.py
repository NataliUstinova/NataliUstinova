import datetime
import re

readme_file = "README.md"

# Calculate years of experience dynamically
years_of_experience = datetime.datetime.now().year - 2021
# Read the README content
with open(readme_file, "r", encoding="utf-8") as file:
    content = file.read()

# Replace any number before "Years Experience" dynamically
updated_content = re.sub(r"\d+ Years Experience", f"{years_of_experience} Years Experience", content)

# Write the updated content back
with open(readme_file, "w", encoding="utf-8") as file:
    file.write(updated_content)
