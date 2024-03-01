import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
