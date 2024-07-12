import { ScrollIcon } from "./ui/customIcons";
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
          <div className="w-100 h-100 bg-rose-800">
            <ScrollIcon className="size-4" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <UserNameTooltip />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default AvatarAccount;
