import { useEffect, useState } from "react";
import { toast } from "../_components/ui/use-toast";

const useToasterMessage = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (message !== "") {
      toast({
        description: message,
      });
    }
  }, [message]);

  return {
    message,
    setMessage,
  };
};
export default useToasterMessage;
