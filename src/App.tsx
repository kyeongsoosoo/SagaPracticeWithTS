import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import GithubUsernameForm from "./components/GithubUsernameForm";
import GithubProfileLoader from "./components/GithubProfileLoader";

function App() {
  return <GithubProfileLoader />;
}

export default App;
