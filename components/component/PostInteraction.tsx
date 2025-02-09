import React from "react";
import { Button } from "@/components/ui/button";
import { HeartIcon, MessageCircleIcon, Share2Icon } from "./Icons";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

type PostInteractionProps = {
  postId: string;
  initialLikes: string[];
  commentNumber: number;
};

export const PostInteraction = ({
  postId,
  initialLikes,
  commentNumber,
}: PostInteractionProps) => {
  const likeAction = async () => {
    "use server";

    const { userId } = auth();

    if (!userId) {
      throw new Error("User is not authenticated");
    }

    try {
      const existingLike = await prisma.like.findFirst({
        where: {
          postId,
          userId,
        },
      });

      if (existingLike) {
        await prisma.like.delete({
          where: {
            id: existingLike.id,
          },
        });

        revalidatePath("/");
      } else {
        await prisma.like.create({
          data: {
            postId,
            userId,
          },
        });
      }

      revalidatePath("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center">
      <form action={likeAction}>
        <Button variant="ghost" size="icon">
          <HeartIcon className="h-5 w-5 text-muted-foreground" />
        </Button>
      </form>
      <span className="ml-1">{initialLikes.length}</span>
      <Button variant="ghost" size="icon">
        <MessageCircleIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
      <span className="ml-1">{commentNumber}</span>
      <Button variant="ghost" size="icon">
        <Share2Icon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </div>
  );
};
