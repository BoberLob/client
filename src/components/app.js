import "./app.css";
import Spinner from "./Spinner/Spinner.js";
// Спиннер
const handleSpinner = new Spinner(document.querySelector(".spinner"))
  .handleSpinner;
handleSpinner(true);
