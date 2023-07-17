/*
  Warnings:

  - You are about to drop the `TutorIAMistakes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TutorIAMistakes" DROP CONSTRAINT "TutorIAMistakes_questionId_fkey";

-- DropForeignKey
ALTER TABLE "TutorIAMistakes" DROP CONSTRAINT "TutorIAMistakes_userId_fkey";

-- DropTable
DROP TABLE "TutorIAMistakes";

-- CreateTable
CREATE TABLE "TutorIABugs" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TutorIABugs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TutorIABugs" ADD CONSTRAINT "TutorIABugs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TutorIABugs" ADD CONSTRAINT "TutorIABugs_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
