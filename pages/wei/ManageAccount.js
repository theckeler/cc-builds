import AccountForm from "./elements/AccountForm";

const ManageAccount = ({ setLoggedIn }) => {
  return (
    <div className="wrapper p-3">
      <h1 className="border-bottom pb-2 mb-2">Manage Account</h1>
      <AccountForm setLoggedIn={setLoggedIn} />
    </div>
  );
};

export default ManageAccount;
