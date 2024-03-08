import { Avatar, AvatarFallback, AvatarImage } from "@/_components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/_components/ui/tooltip";

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
          <p>ton blaze soon</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default AvatarAccount;
