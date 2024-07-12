import DeleteAccountButton from "@/lib/_components/account/DeleteAccountButton";
import UpdateAccount from "@/lib/_components/account/UpdateAccount";
import SignOut from "@/lib/_components/auth/SignOut";

const AccountManagementPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center align-middle">
      <h2 className="text-left text-3xl font-bold text-gray-900 m-6 ">
        Gestion du compte
      </h2>
      <div className="flex flex-col gap-3 mt-2">
        <UpdateAccount />
        <SignOut />
        <DeleteAccountButton />
      </div>
    </main>
  );
};

export default AccountManagementPage;
