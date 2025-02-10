import React from "react";
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
  const getButtonCurrent = () => {
    if (isCurrentUser) {
      return "プロフィール編集";
    }

    console.log(isFollowing)

    if (isFollowing) {
      return "フォロー中";
    }

    return "フォローする";
  };

  const getButtonVariant = () => {
    if (isCurrentUser) {
      return "secondary";
    }

    if (isFollowing) {
      return "outline";
    }

    return "default";
  };

  return (
    <form action={followAction.bind(null, userId)}>
      <Button variant={getButtonVariant()} className="w-full">
        {getButtonCurrent()}
      </Button>
    </form>
  );
};
