import React from "react";
import {
  CheckIcon,
  PaperClipIcon,
  PencilIcon,
  SupportIcon,
  XIcon,
} from "@heroicons/react/solid";
import { UserContext } from "../App";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
function UserInfo(props) {
  const [edit, setEdit] = useState(true);
  const [bio, setBio] = useState(props.bio);
  const [input, setInput] = useState(bio);

  async function update() {
    try {
      const response = await fetch(
        "https://server-ten-iota.vercel.app/auth/update",
        {
          method: "POST",
          headers: {
            "auth-token": sessionStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // bio: document.getElementById("bio").innerText,
            bio: input,
          }),
        }
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setInput(props.bio);
  }, [props.id]);
  // Dark Mode
  const { bgcolor } = useContext(UserContext);
  const { Pcolor } = useContext(UserContext);
  const { SecondaryColor } = useContext(UserContext);
  const { userData } = useContext(UserContext);
  return (
    <>
      <div
        className="bg-none shadow overflow-hidden sm:rounded-lg"
        style={{ background: SecondaryColor }}
      >
        <div
          className="px-4 py-5 sm:px-6 bg-none"
          style={{ background: "none" }}
        >
          <div style={{ background: "none", display: "flex" }}>
            <h3
              className="text-lg leading-6 font-medium text-gray-900"
              style={{ background: "none", color: Pcolor }}
            >
              {props.admin ? "Admin" : "User"} Information
            </h3>
            {props.admin && (
              <p
                className="SideUsers-role"
                style={{ width: "fit-content", margin: "0 10px" }}
              >
                {" "}
                Mod{" "}
              </p>
            )}
          </div>

          {props.id === userData._id && (
            <>
              {edit ? (
                <PencilIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                  style={{
                    float: "right",
                    background: "none",
                    color: "var(--dblue)",
                    margin: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setInput(document.getElementById("bio").innerText);
                    document.getElementById("bio").style.border =
                      "1px solid " + Pcolor;
                    setEdit(false);
                  }}
                />
              ) : (
                <>
                  <CheckIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    style={{
                      float: "right",
                      background: "none",
                      color: "var(--dblue)",
                      margin: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      // document.getElementById("bio").contentEditable = "false";
                      document.getElementById("bio").innerText = input;

                      // document.getElementById("bio").style.border = "none";
                      setEdit(true);
                      // console.log(document.getElementById("bio").innerText);
                      update();
                    }}
                  />
                  <XIcon
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                    style={{
                      float: "right",
                      background: "none",
                      color: "var(--dblue)",
                      margin: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      // document.getElementById("bio").contentEditable = "false";
                      // document.getElementById("bio").style.border = "none";
                      document.getElementById("bio").innerText = input;
                      setEdit(true);
                      // console.log(document.getElementById("bio").innerText);
                    }}
                  />
                </>
              )}
            </>
          )}

          <p
            className="mt-1 max-w-2xl text-sm text-gray-500"
            style={{ background: "none" }}
          >
            Personal details
          </p>
        </div>
        <div
          className="border-t border-gray-200 bg-none"
          style={{ background: "none" }}
        >
          <dl style={{ background: "none" }}>
            <div
              className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              style={{ background: "none" }}
            >
              <dt
                className="text-sm font-medium text-gray-500"
                style={{ background: "none" }}
              >
                Full name
              </dt>
              <dd
                className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                style={{ background: "none", color: Pcolor }}
              >
                {props.name}
              </dd>
            </div>
            {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Application for
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Backend Developer
              </dd>
            </div> */}
            <div
              className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              style={{ background: "none" }}
            >
              <dt
                className="text-sm font-medium text-gray-500"
                style={{ background: "none" }}
              >
                Email address
              </dt>
              <dd
                className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                style={{ background: "none", color: Pcolor }}
              >
                {props.email}
              </dd>
            </div>
            {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Salary expectation
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                $120,000
              </dd>
            </div> */}
            <div
              className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              style={{ background: "none" }}
            >
              <dt
                className="text-sm font-medium text-gray-500"
                style={{ background: "none" }}
              >
                About
              </dt>
              {edit ? (
                <dd
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  style={{ background: "none", color: Pcolor }}
                  id="bio"
                >
                  {input}
                </dd>
              ) : (
                <textarea
                  className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                  style={{
                    background: "none",
                    color: Pcolor,
                    borderRadius: "5px",
                    padding: "2px",
                  }}
                  autoFocus
                  suppressContentEditableWarning={true}
                  // contentEditable
                  id="bio"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              )}
            </div>
            {(userData.Admin === true || props.id === userData._id) && (
              <>
                <div
                  className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  style={{ background: "none" }}
                >
                  <dt
                    className="text-sm font-medium text-gray-500"
                    style={{ background: "none" }}
                  >
                    Wallet
                  </dt>
                  <dd
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                    style={{ background: "none", color: Pcolor }}
                  >
                    {userData.Wallet}
                  </dd>
                </div>
                <div
                  className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  style={{ background: "none" }}
                >
                  <dt
                    className="text-sm font-medium text-gray-500"
                    style={{ background: "none" }}
                  >
                    Api Key
                  </dt>
                  <dd
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                    style={{ background: "none" }}
                  >
                    <ul
                      role="list"
                      className="border border-gray-200 rounded-md divide-y divide-gray-200"
                      style={{ background: "none" }}
                    >
                      {/* <li
                    className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                    style={{ background: "none" }}
                  >
                    <div
                      className="w-0 flex-1 flex items-center"
                      style={{ background: "none" }}
                    >
                      <PaperClipIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                        style={{ background: "none" }}
                      />
                      <span
                        className="ml-2 flex-1 w-0 truncate"
                        style={{ background: "none", color: Pcolor }}
                      >
                        resume_back_end_developer.pdf
                      </span>
                    </div>
                    <div
                      className="ml-4 flex-shrink-0"
                      style={{ background: "none" }}
                    >
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        style={{ background: "none" }}
                      >
                        Download
                      </a>
                    </div>
                  </li> */}
                      <li
                        className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                        style={{ background: "none" }}
                      >
                        <div
                          className="w-0 flex-1 flex items-center"
                          style={{ background: "none" }}
                        >
                          <PaperClipIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                            style={{ background: "none" }}
                          />
                          <span
                            className="ml-2 flex-1 w-0 truncate"
                            style={{ background: "none", color: Pcolor }}
                          >
                            Craft-X-{props.id}
                          </span>
                        </div>
                        <div
                          className="ml-4 flex-shrink-0"
                          style={{ background: "none" }}
                        >
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            style={{ background: "none" }}
                          >
                            Copy
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </>
            )}
          </dl>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
