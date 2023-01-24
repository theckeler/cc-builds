import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../elements/Button";
import ServiceNotification from "../elements/ServiceNotification";

const Menu = ({ loggedIn, logIn, logOut, closeMenu }) => {
  const navigate = useNavigate();

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
                  <ServiceNotification />
                </li>
                <li className="d-flex d-flex-lg-column mt-3 px-3 py-0 border-top pt-2">
                  <strong>Track Your Order:</strong>
                </li>
                <li className="d-flex d-flex-lg-column mt-1 px-3 py-0">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Tracking Number"
                      value="29323-32434"
                      aria-label="Tracking Number"
                      aria-describedby="button-addon2"
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      addClick={() => {
                        closeMenu();
                        navigate("/wei/track-order/29323-32434");
                      }}
                    >
                      Track
                    </button>
                  </div>
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
