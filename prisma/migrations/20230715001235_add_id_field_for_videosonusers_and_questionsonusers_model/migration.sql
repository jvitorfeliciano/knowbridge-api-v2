/*
  Warnings:

  - The primary key for the `QuestionsOnUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `QuestionsOnUsers` table. All the data in the column will be lost.
  - The primary key for the `VideosOnUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `VideosOnUsers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "QuestionsOnUsers" DROP CONSTRAINT "QuestionsOnUsers_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "QuestionsOnUsers_pkey" PRIMARY KEY ("userId", "questionId");

-- AlterTable
ALTER TABLE "VideosOnUsers" DROP CONSTRAINT "VideosOnUsers_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "VideosOnUsers_pkey" PRIMARY KEY ("userId", "videoId");
