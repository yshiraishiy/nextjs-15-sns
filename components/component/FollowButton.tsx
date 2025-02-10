"use client";

import React, { useOptimistic } from "react";
import { Button } from "../ui/button";
import { followAction } from "@/lib/actions";

interface FollowButtonProps {
  isCurrentUser: boolean;
  isFollowing: boolean;
  userId: string;
}

export const FollowButton = ({
  isCurrentUser,
  isFollowing,
  userId,
}: FollowButtonProps) => {
  const [optimisticFollow, addOptimisticFollow] = useOptimistic<
    { isFollowing: boolean },
    void
  >(
    {
      isFollowing,
    },
    (currentState) => ({
      isFollowing: !currentState.isFollowing,
    })
  );

  const getButtonCurrent = () => {
    if (isCurrentUser) {
      return "プロフィール編集";
    }

    console.log(isFollowing);

    if (optimisticFollow.isFollowing) {
      return "フォロー中";
    }

    return "フォローする";
  };

  const getButtonVariant = () => {
    if (optimisticFollow.isFollowing) {
      return "secondary";
    }

    if (isFollowing) {
      return "outline";
    }

    return "default";
  };
  const handleFollowAction = async () => {
    if (isCurrentUser) {
      return;
    }

    try {
      addOptimisticFollow();
      await followAction(userId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form action={handleFollowAction}>
      <Button variant={getButtonVariant()} className="w-full">
        {getButtonCurrent()}
      </Button>
    </form>
  );
};
