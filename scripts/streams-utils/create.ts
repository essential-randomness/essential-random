import * as fs from "fs";
import * as path from "path";

const START_DATE = "2025-02-12";
const END_DATE = "2025-03-01";

/**
 * Helper function to check if a date is a stream day
 */
function isStreamDay(date: Date): boolean {
  const day = date.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
  return day === 4;
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
    if (isStreamDay(currentDate)) {
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

const startDate = new Date(START_DATE);
const endDate = new Date(END_DATE);
const folderPath = `./src/content/streams/${startDate.getFullYear()}-${startDate.getMonth() + 1}`;

createMarkdownFilesForDateRange(startDate, endDate, folderPath);
