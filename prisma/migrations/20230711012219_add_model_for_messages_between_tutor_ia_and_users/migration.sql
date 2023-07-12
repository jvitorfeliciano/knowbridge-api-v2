-- CreateTable
CREATE TABLE "UsersMessagingTutorIA" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "userMessage" TEXT NOT NULL,
    "tutorIAMessage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsersMessagingTutorIA_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UsersMessagingTutorIA" ADD CONSTRAINT "UsersMessagingTutorIA_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersMessagingTutorIA" ADD CONSTRAINT "UsersMessagingTutorIA_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
