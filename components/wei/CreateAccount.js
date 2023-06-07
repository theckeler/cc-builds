import AccountForm from "./elements/AccountForm";

const CreateAccount = ({ setLoggedIn }) => {
  return (
    <div className="wrapper p-3">
      <h1 className="border-bottom pb-2 mb-2">Create Account</h1>
      <AccountForm setLoggedIn={setLoggedIn} />
    </div>
  );
};

export default CreateAccount;
