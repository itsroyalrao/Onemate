function ChangePassword() {
  return (
    <>
      <div className="bg-gradient-to-r from-red-600 to-blue-600 w-full min-h-screen flex flex-col items-center justify-center">
        <div
          id="login-block"
          className="w-72 h-[9.5rem] bg-blue-900 flex flex-col items-center rounded-3xl shadow-lg shadow-blue-800"
        >
          <img
            className="w-20 h-20 -my-10 rounded-full"
            src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg?w=740"
            alt="This is an image"
          />
          <div className="text-white text-2xl tracking-wide mt-12">
            Reset your password
          </div>
          <div className="flex flex-col items-center py-4 space-y-2">
            <input
              type="email"
              id="email"
              className="rounded-lg px-3 py-1 placeholder:italic"
              placeholder="Email ID"
              autoComplete="email"
            />
            <div id="error-message" hidden></div>
          </div>
        </div>
        <div
          className="bg-blue-900 w-44 rounded-b-xl flex items-center justify-center text-white p-2 cursor-pointer shadow-inner sm:hover:bg-white sm:hover:text-blue-900 sm:hover:font-bold"
          // onClick={(e) => loginDetails(e)}
        >
          Reset Password
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
