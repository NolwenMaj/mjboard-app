"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export enum AuthPage {
  SIGN_IN = "sign-in",
  SIGN_UP = "sign-up",
}

const RedirectionButton = ({ pageName }: { pageName: AuthPage }) => {
  const router = useRouter();
  const handleClick = (pageName: AuthPage) => () => {
    {
      pageName === AuthPage.SIGN_IN
        ? router.push(AuthPage.SIGN_UP)
        : router.push(AuthPage.SIGN_IN);
    }
  };

  return (
    <Button className="w-full" onClick={handleClick(pageName)}>
      {pageName === AuthPage.SIGN_IN
        ? "Pas encore de compte ?"
        : "Déjà inscrit.e ?"}
    </Button>
  );
};

export default RedirectionButton;
