import { join } from "path";
import { writeFile } from "fs/promises";

for (let i = 3; i < 22; i++) {
  await writeFile(
    join(
      "src/content/posts/extravaganzas/1-time-to-find-out",
      `slide-${i}.alt.tsx`
    ),
    ""
  );
}
