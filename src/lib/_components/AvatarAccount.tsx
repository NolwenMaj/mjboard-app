import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import UserNameTooltip from "./UserNameTooltip";

function AvatarAccount() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>
          <UserNameTooltip />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default AvatarAccount;
