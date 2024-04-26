import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Pizza />
      <Pizza />
      <Pizza />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = {color: "red", fontSize:"48px", textTransform:"uppercase"};
  const style = {};
  return <h1>Fast Ract Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //else alert("Sorry we're closed");
  //console.log(hour);
  return <footer>{new Date().toLocaleDateString()}We're currently open</footer>;
}
//react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React befor 18
//React.render(<App />)
