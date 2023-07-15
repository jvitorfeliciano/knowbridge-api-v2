/*
  Warnings:

  - You are about to drop the column `isDone` on the `QuestionsOnUsers` table. All the data in the column will be lost.
  - You are about to drop the column `isDone` on the `VideosOnUsers` table. All the data in the column will be lost.
  - You are about to drop the `_DisciplineToTrail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `disciplineId` to the `Trail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_DisciplineToTrail" DROP CONSTRAINT "_DisciplineToTrail_A_fkey";

-- DropForeignKey
ALTER TABLE "_DisciplineToTrail" DROP CONSTRAINT "_DisciplineToTrail_B_fkey";

-- AlterTable
ALTER TABLE "QuestionsOnUsers" DROP COLUMN "isDone",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Trail" ADD COLUMN     "disciplineId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "VideosOnUsers" DROP COLUMN "isDone",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "_DisciplineToTrail";

-- AddForeignKey
ALTER TABLE "Trail" ADD CONSTRAINT "Trail_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
