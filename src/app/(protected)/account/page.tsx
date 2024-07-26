import DeleteAccountButton from "@/lib/_components/account/DeleteAccountButton";
import UpdateAccount from "@/lib/_components/account/UpdateAccount";
import SignOut from "@/lib/_components/auth/SignOut";

const AccountManagementPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center align-middle">
      <h2 className="m-6 text-left text-3xl font-bold text-gray-900 ">
        Gestion du compte
      </h2>
      <div className="mt-2 flex flex-col gap-3">
        <UpdateAccount />
        <SignOut />
        <DeleteAccountButton />
      </div>
    </main>
  );
};

export default AccountManagementPage;
