import React, { useState } from "react";

const App = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-900 pb-40">
      <div className="flex flex-col items-center gap-10 mb-10">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-40 h-40 object-cover"
        />

        <h1 className="text-orange-600 text-4xl font-bold">
          Learn & Master GitHub Actions
        </h1>
      </div>

      <div className="max-w-4xl w-full bg-gray-300 min-h-20 mx-auto rounded-md flex flex-col justify-center items-center p-5">
        <button
          type="button"
          onClick={() => setShowHelp(!showHelp)}
          className="bg-orange-600 px-4 py-1 text-white font-medium rounded-md text-sm"
        >
          {showHelp ? "Hide Help" : "Show Help"}
        </button>

        {showHelp && (
          <div className="w-full mt-5 flex justify-between items-start gap-10">
            <div className="w-1/3 flex flex-col items-center gap-3">
              <h2 className="text-lg font-semibold">What is Git?</h2>
              <p className="text-center text-sm">
                Git is a version control system. helping you to manage your code
                and create code snapshots.
              </p>
            </div>
            <div className="w-1/3 flex flex-col items-center gap-3">
              <h2 className="text-lg font-semibold">What is Github?</h2>
              <p className="text-center text-sm">
                Github is a company and online offering, providing you with tons
                of Git-related services.
              </p>
            </div>
            <div className="w-1/3 flex flex-col items-center gap-3">
              <h2 className="text-lg font-semibold">What is Github Actions?</h2>
              <p className="text-center text-sm">
                Github Actions is an automation service (or CI/CD service) that
                helps you automate repository-related workflows and processses.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
