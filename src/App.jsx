import { useState } from "react";
import "./App.css";

function App() {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstname, setFirstName] = useState(false);
  const [username, setUserName] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  let firstNameInput;
  let lastNameInput;
  let emailInput;
  let passwordInput;

  console.log(firstname);
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  function validation() {
    if (!firstname) {
      setFirstNameError(true);
      setDisplay1(true);
    } else {
      setFirstNameError(false);
      setDisplay1(false);
    }

    if (!username) {
      setLastNameError(true);
      setDisplay2(true);
    } else {
      setLastNameError(false);
      setDisplay2(false);
    }
    if (!email || !regex.test(email)) {
      setEmailError(true);
      setDisplay3(true);
    } else {
      setEmailError(false);
      setDisplay3(true);
    }
    if (!password) {
      setPasswordError(true);
      setDisplay4(true);
    } else {
      setPasswordError(false);
      setDisplay4(false);
    }
  }
  return (
    <div
      id="container"
      className="flex flex-col items-center pt-[88px] md:flex-row md: justify-center md:pt-0"
    >
      <div
        id="intro"
        className="flex flex-col items-center gap-[17px] text-center md:pb-[70px]"
      >
        <h1 className="text-[white] font-bold w-[328px] text-[28px] h-[87px] md:w-[525px] md:h-[131px] md:text-[50px] md:text-left">
          Learn to code by watching others
        </h1>
        <p className="w-[327px] h-[130px] font-medium  text-[16px] text-white md:w-[525px] md:h-[78px] text-center md:text-left ">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div id="subscription" className="flex flex-col gap-[24px]">
        <div
          id="try-it-free"
          className="w-[327px] flex flex-col items-center justify-center h-[88px] bg-[#5e54a4] rounded-xl text-white text-[15px] md:w-[540px] md:h-[60px]"
        >
          <p className="w-[194px] h-[52px] text-[15px] pl-[20px] md:w-[316px] md:h-[26px] md:text-center md:pl-0 ">
            <span className="font-bold">Try it free 7 days</span> then $20/mo.
            thereafter
          </p>
        </div>
        <section
          id="signup"
          className="signup flex flex-col gap-[15px] p-[24px] mt-[10px] items-center bg-white w-[327px] rounded-[10px] md:w-[540px] mb-[50px]"
        >
          <div className="relative flex flex-col">
            <input
              data-check1={firstNameError}
              onChange={(e) => {
                firstNameInput = e.target.value;
                setFirstName(firstNameInput);
              }}
              className="w-[279px] h-[56px] md:w-[460px]"
              type="text"
              placeholder="First Name"
            />
            {display1 && (
              <img
                className="absolute top-[16px] right-[15px]"
                src="/assets/icon-error.svg"
                alt=""
              />
            )}
            {firstNameError && (
              <span className="w-[158px] h-[16px] text-[11px] text-[#ff7979] text-right ml-[120px] font-medium md:ml-[300px]">
                First Name cannot be empty
              </span>
            )}
          </div>
          <div className="relative flex flex-col">
            <input
              data-check2={lastNameError}
              onChange={(e) => {
                lastNameInput = e.target.value;
                setUserName(lastNameInput);
              }}
              className="w-[279px] h-[56px] md:w-[460px]"
              type="text"
              placeholder="Last Name"
            />
            {display2 && (
              <img
                className="absolute top-[16px] right-[15px]"
                src="/assets/icon-error.svg"
                alt=""
              />
            )}
            {lastNameError && (
              <span className="w-[158px] h-[16px] text-[11px] text-[#ff7979] text-right ml-[120px] font-medium md:ml-[300px]">
                Last Name cannot be empty
              </span>
            )}
          </div>
          <div className="relative flex flex-col">
            <input
              data-check3={emailError}
              onChange={(e) => {
                emailInput = e.target.value;
                setEmail(emailInput);
              }}
              className="w-[279px] h-[56px] md:w-[460px]"
              type="email"
              placeholder="Email adress"
            />
            {display3 && (
              <img
                className="absolute top-[16px] right-[15px]"
                src="/assets/icon-error.svg"
                alt=""
              />
            )}
            {emailError && (
              <span className="text-[11px] text-[#ff7979] text-center  ml-[116px] font-medium md:ml-[291px]">
                Looks like this is not an email
              </span>
            )}
          </div>
          <div className="relative flex flex-col">
            <input
              data-check4={passwordError}
              onChange={(e) => {
                passwordInput = e.target.value;
                setPassword(passwordInput);
              }}
              className="w-[279px] h-[56px] md:w-[460px]"
              type="password"
              placeholder="Password"
            />
            {display4 && (
              <img
                className="absolute top-[16px] right-[15px]"
                src="/assets/icon-error.svg"
                alt=""
              />
            )}
            {passwordError && (
              <span className="w-[158px] h-[16px] text-[11px] text-[#ff7979] text-right ml-[120px] font-medium md:ml-[300px]">
                Password cannot be empty
              </span>
            )}
          </div>

          <button
            onClick={() => {
              validation();
            }}
            className="w-[279px] rounded-md h-[56px] bg-[#38cc8b] cursor-pointer hover:bg-[#77e2b3] text-white text-[15px] font-semibold md:w-[460px] "
            type="submit"
          >
            CLAIM YOUR FREE TRIAL
          </button>
          <p className="w-[249px] h-[42px] text-[11px]  text-[#bab7d4] text-center  md:w-[367px]">
            By clicking the button, you are agreeing to our{" "}
            <a className=" text-[#ff7979] font-bold" href="">
              Terms and Services
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
