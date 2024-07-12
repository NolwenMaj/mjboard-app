import DeleteAccountButton from "@/lib/_components/account/DeleteAccountButton";
import UpdateAccount from "@/lib/_components/account/UpdateAccount";
import SignOut from "@/lib/_components/auth/SignOut";

const AccountManagementPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center align-middle">
      <h1 className="text-left text-3xl font-bold text-gray-900 ">
        Gestion du compte
      </h1>
      <div className="flex flex-row items-center justify-center gap-3">
        <DeleteAccountButton />
        <SignOut />
        <UpdateAccount />
      </div>
    </main>
  );
};

export default AccountManagementPage;
