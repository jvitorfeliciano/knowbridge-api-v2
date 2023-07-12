-- CreateTable
CREATE TABLE "TutorIAMistakes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TutorIAMistakes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TutorIAMistakes" ADD CONSTRAINT "TutorIAMistakes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TutorIAMistakes" ADD CONSTRAINT "TutorIAMistakes_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
