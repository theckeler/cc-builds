import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../elements/Button";

const Menu = ({ loggedIn, logIn, logOut, closeMenu }) => {
  const navigate = useNavigate();
  var serviceDate = new Date();
  serviceDate.setMonth(serviceDate.getMonth() + 3);

  return (
    <div className="menu d-flex flex-column " style={{ minHeight: "40vh" }}>
      <ul className="list-unstyled d-flex flex-column">
        <li className="bg-black p-3 title d-flex flex-column xxl-hide">
          <Button
            copy="&#10005;"
            addClass="menu-close bg-yellow d-inline-block rounded-circle p-0 d-flex ml-auto font-weight-bold lg-hide"
            addClick={closeMenu}
          />
        </li>
        <li className="bg-black px-2 py-1 d-flex-xxl-column d-flex align-items-center pb-3">
          {loggedIn === 1 ? (
            <>
              <h2 className="h1 pt-1">Joe Schmo</h2>
              <Button
                copy="Logout"
                addClass="ml-auto bg-yellow"
                addClick={logOut}
              />
            </>
          ) : (
            <h2 className="h1 pt-1">Sign In:</h2>
          )}
        </li>
        {loggedIn === 1 && (
          <>
            <li className="px-0 py-0 d-flex flex-column">
              <Button
                copy="Manage Account &gt;"
                addClass="w-100 text-left font-weight-normal text-capitalize bg-yellow"
                addClick={() => {
                  closeMenu();
                  navigate("/wei/manage-account");
                }}
              />
            </li>
          </>
        )}
        <li className="my-1">
          {loggedIn === 1 ? (
            <>
              <ul className="list-unstyled d-flex flex-column">
                <li className="px-0 py-0 title d-flex flex-column">
                  <Button
                    copy="Purchase History"
                    addClass="w-100 text-left font-weight-normal text-capitalize bg-white"
                    addClick={() => {
                      closeMenu();
                      navigate("/wei/purchase-history");
                    }}
                  />
                </li>
                <li className="px-0 py-0 title d-flex flex-column">
                  <Button
                    copy="My Products"
                    addClass="w-100 text-left font-weight-normal text-capitalize bg-white"
                    addClick={() => {
                      closeMenu();
                      navigate("/wei/my-products");
                    }}
                  />
                </li>
                <li className="px-0 py-0 title d-flex flex-column">
                  <Button
                    copy="My Lists"
                    addClass="w-100 text-left font-weight-normal text-capitalize bg-white"
                    addClick={() => {
                      closeMenu();
                      navigate("/wei/my-lists");
                    }}
                  />
                </li>
                <li>
                  <div className="border p-2 m-2 text-center">
                    <strong className="text-uppercase">
                      Service date coming up for XT1 LT46 on
                      {" " + serviceDate.toLocaleDateString()}
                    </strong>
                    <Button
                      copy="Order Parts for your XT1 LT46"
                      addClass="w-100 font-weight-normal text-capitalize bg-yellow mt-1"
                      addClick={() => {
                        // closeMenu();
                        // navigate("/wei/track-order/29323-32434");
                      }}
                    />
                  </div>
                </li>

                <li className="d-flex d-flex-lg-column mt-3 px-3 py-0 border-top pt-2">
                  <input
                    className="p-1 w-100"
                    placeholder="Tracking Number"
                    value="29323-32434"
                    readOnly
                  />
                  <Button
                    copy="Track Your Order"
                    addClass="w-100 font-weight-normal text-capitalize bg-yellow mt-1"
                    addClick={() => {
                      closeMenu();
                      navigate("/wei/track-order/29323-32434");
                    }}
                  />
                </li>
              </ul>
            </>
          ) : (
            <div className="my-1 px-2 py-1">
              <ul className="list-unstyled d-flex flex-column">
                <li className="mt-0">
                  <label>Email</label>
                  <input type="email" className="form-control w-100" />
                </li>
                <li className="mt-2">
                  <label>Password</label>
                  <input type="password" className="form-control w-100" />
                  <a href="#top">Forgot Password</a>
                </li>
                <li className="mt-2">
                  <Button
                    copy="Login"
                    addClass="bg-yellow w-100"
                    addClick={logIn}
                  />
                </li>
                <li className="mt-4">
                  <Button
                    copy="Create Account"
                    addClass="bg-grey w-100"
                    addClick={() => {
                      closeMenu();
                      navigate("/wei/create-account");
                    }}
                  />
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Menu;
