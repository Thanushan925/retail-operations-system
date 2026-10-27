import bcrypt from "bcrypt";

async function main() {
  const password = "AdminPassword123!";
  const hash =
    "$2b$10$YA0HpD7AOo8ia9rCVj9euOQLIE7qc7de9C9oWE86KRu97jGi0bShq";

  const correctPassword = await bcrypt.compare(password, hash);
  const wrongPassword = await bcrypt.compare(
    "WrongPassword123!",
    hash
  );

  console.log("Correct password:", correctPassword);
  console.log("Wrong password:", wrongPassword);
}

main();