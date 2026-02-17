/*
  Warnings:

  - You are about to drop the `FacebookConnection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ScheduledPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "FacebookConnection";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ScheduledPost";
PRAGMA foreign_keys=on;
