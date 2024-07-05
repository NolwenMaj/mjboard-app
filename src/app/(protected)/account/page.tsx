import DeleteAccountButton from "@/lib/_components/DeleteAccountButton";
import NameDisplay from "@/lib/_components/NameDisplay";
import SignOut from "@/lib/_components/SignOut";
import UpdateAccount from "@/lib/_components/UpdateAccount";

const AccountManagementPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center align-middle">
      <h1 className="text-left text-3xl font-bold text-gray-900 ">
        Gestion du compte
      </h1>
      <NameDisplay />
      <div className="flex flex-row items-center justify-center gap-3">
        <DeleteAccountButton />
        <SignOut />
        <UpdateAccount />
      </div>
    </main>
  );
};

export default AccountManagementPage;
