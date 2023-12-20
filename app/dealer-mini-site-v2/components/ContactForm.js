import { Fragment } from "react";

import ButtonMain from "@/components/Buttons/Main";
import ReCapthca from "@/components/ReCapthca";

export default function ContactForm({}) {
  const inputText = <input className="w-100 p-1 border" />;
  const inputSelect = (
    <select className="p-1">
      <option>Select One</option>
    </select>
  );
  const inputDate = (
    <input
      type="date"
      className="w-full p-1"
    />
  );
  const inputTextbox = <textarea className="w-full p-1 border" />;

  const form = [
    { title: "First Name", input: inputText },
    { title: "Last Name", input: inputText },
    { title: "Phone", input: inputText },
    { title: "Email", input: inputText },
    { title: "Message", input: inputTextbox },
  ];

  return (
    <ul className="list-unstyled grid md:grid-cols-[200px_1fr] gap-3">
      {form.map(function (block, i) {
        return (
          <Fragment key={i}>
            <li className="md:text-right font-bold px-0 mb-0 text-lg">
              {block.title}:
            </li>
            <li className="px-0">{block.input}</li>
          </Fragment>
        );
      })}
      <li></li>
      <li className="text-left">
        <ReCapthca />
      </li>
      <li></li>
      <li className="px-0 text-left">
        <ButtonMain
          title="Submit"
          href="#top"
          className="inline-block bg-secondary border-0 px-32 py-2 font-weight-bold text-decoration-none text-uppercase"
        />
      </li>
    </ul>
  );
}
