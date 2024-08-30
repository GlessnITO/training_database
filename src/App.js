import React, { useState } from "react";
import "./App.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import Quiz from "./Quiz";

Amplify.configure(awsExports);

function App() {
  // State to track if the login modal is visible
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {/* Quiz Component, accessible without authentication */}
        <Quiz />

        {/* Login Button to open the Authenticator UI */}
        <button
          onClick={() => setShowLogin(true)}
          style={{
            margin: "20px",
            fontSize: "0.8rem",
            padding: "5px 10px",
          }}
        >
          Login
        </button>
      </header>

      {/* Conditional Rendering of the Authenticator */}
      {showLogin && (
        <div className="auth-container">
          <Authenticator>
            {({ signOut }) => (
              <div>
                {/* Authenticated Area */}
                <h2>Welcome to the Restricted Area</h2>
                <button
                  onClick={signOut}
                  style={{
                    margin: "20px",
                    fontSize: "0.8rem",
                    padding: "5px 10px",
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </Authenticator>
        </div>
      )}
    </div>
  );
}

export default App;
