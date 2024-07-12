import { UsersIcon } from "../ui/customIcons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import UserNameTooltip from "./UserNameTooltip";

function UserIconWithTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <UsersIcon className="size-4" />
        </TooltipTrigger>
        <TooltipContent>
          <UserNameTooltip />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default UserIconWithTooltip;
