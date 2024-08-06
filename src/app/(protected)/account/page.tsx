import DeleteAccountButton from "@/lib/_components/account/DeleteAccountButton";
import UpdateAccount from "@/lib/_components/account/UpdateAccount";
import SignOut from "@/lib/_components/auth/SignOut";

const AccountManagementPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center align-middle">
      <div className="absolute right-10 top-20 md:top-10">
        <SignOut />
      </div>
      <h2 className="text-left text-3xl font-bold text-gray-900 ">
        Gestion du compte
      </h2>
      <div className="mt-2 flex flex-col gap-3">
        <UpdateAccount />
      </div>
      <div className="absolute bottom-10">
        <DeleteAccountButton />
      </div>
    </main>
  );
};

export default AccountManagementPage;
