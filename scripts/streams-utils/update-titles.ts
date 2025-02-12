import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter"; // to parse frontmatter

/**
 * Placeholder function to get the new file name based on frontmatter
 * You need to implement this function
 * @param frontmatter - the parsed frontmatter of the file
 * @returns string - the new file name
 */
function getFileName(fileName: string, title: string): string {
  const toKeep = fileName.substring(
    0,
    fileName.indexOf("-") == -1 ? undefined : fileName.indexOf("-")
  );
  return `${toKeep}-${title
    .replace(/[^a-zA-Z\s\-]/g, " ")
    // Remove consecutive spaces
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .join("-")
    .toLowerCase()}`;
}

/**
 * Function to rename markdown files in a folder based on a field in their frontmatter
 * @param folderPath - the path to the folder containing markdown files
 */
function renameMarkdownFiles(folderPath: string): void {
  // Read all files in the folder
  const files = fs.readdirSync(folderPath);

  // Filter to only process .md files
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  // Loop through each markdown file
  mdFiles.forEach((file) => {
    const filePath = path.join(folderPath, file);

    // Read file content
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Parse the frontmatter using gray-matter
    const { data: frontmatter } = matter(fileContent);

    try {
      // Get the new file name based on frontmatter
      const newFileName = getFileName(
        path.basename(filePath, path.extname(filePath)),
        frontmatter.title
      );

      // Form the new file path
      const newFilePath = path.join(folderPath, `${newFileName}.md`);

      // Rename the file
      fs.renameSync(filePath, newFilePath);
      console.log(`Renamed: ${file} -> ${newFileName}.md`);
    } catch (error) {
      console.error(`Error processing file ${file}: ${error.message}`);
    }
  });
}

// Example usage:
// Get the latest folder by default
function getLatestFolder(): string {
  const folders = fs
    .readdirSync("./src/content/streams")
    .filter((path) => !path.startsWith("_"));
  const latestFolder = folders.sort().pop();
  if (!latestFolder) {
    throw new Error("No folders found");
  }
  return path.join("./src/content/streams", latestFolder);
}

const folderPath = getLatestFolder();
// console.log(folderPath);
renameMarkdownFiles(folderPath);
