import * as fs from "fs";
import * as path from "path";

/**
 * Helper function to check if a date is a Monday or Thursday
 */
function isMondayOrThursday(date: Date): boolean {
  const day = date.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
  return day === 1 || day === 4;
}

/**
 * Formats a date as day of the month
 */
function getDayOfMonth(date: Date): string {
  return date.getDate().toString();
}

/**
 * Function to create markdown files for Mondays and Thursdays within a given date range
 * @param startDate - the start date of the range
 * @param endDate - the end date of the range
 * @param folderPath - the folder where the markdown files will be created
 */
function createMarkdownFilesForDateRange(
  startDate: Date,
  endDate: Date,
  folderPath: string
): void {
  // Ensure the folder exists, if not create it
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Loop through each date in the range
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    if (isMondayOrThursday(currentDate)) {
      const dayOfMonth = getDayOfMonth(currentDate);
      const fileName = `${dayOfMonth}.md`;
      const filePath = path.join(folderPath, fileName);
      const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} 15:00:00`;

      // Sample frontmatter
      const frontmatter = `---
title: TBD
description: TBD
scheduled_at: ${formattedDate}
tags: []
---
`;

      // Write the file with the frontmatter
      fs.writeFileSync(filePath, frontmatter, "utf-8");
      console.log(`Created file: ${filePath}`);
    }

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }
}

const startDate = new Date("2024-12-01");
const endDate = new Date("2025-01-01");
const folderPath = "./src/content/streams/2024-12";

createMarkdownFilesForDateRange(startDate, endDate, folderPath);
