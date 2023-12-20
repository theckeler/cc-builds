export default function Address({ address }) {
  return (
    <ul className="">
      <li className="">{address.street}</li>
      <li className="">
        {address.city}, {address.state} {address.zip}
      </li>
    </ul>
  );
}
