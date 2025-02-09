import React from "react";
import { Button } from "../ui/button";

interface FollowButtonProps {
  isCurrentUser: boolean;
  isFollowing: boolean;
}

export const FollowButton = ({
  isCurrentUser,
  isFollowing,
}: FollowButtonProps) => {
  const getButtonCurrent = () => {
    console.log(isFollowing)
    if (isCurrentUser) {
      return "プロフィール編集";
    }

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
    <div>
      <Button variant={getButtonVariant()} className="w-full">
        {getButtonCurrent()}
      </Button>
    </div>
  );
};
