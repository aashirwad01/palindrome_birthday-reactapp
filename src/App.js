
import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [state, setstate] = useState("");
  const [state2, set2] = useState("");

  function clickhandler() {
    var str = state2;

    var arn = str.split("-");
    arn = arn.reverse();
    var car = [];

    for (var i = 0; i < arn.length; i++) {
      for (var j = 0; j < arn[i].length; j++) {
        car.push(arn[i][j]);
      }
    }
    const n = car.length;
    var nyear = arn[2];
    var ndate = arn[2][3] + arn[2][2];
    var nmonth = arn[2][1] + arn[2][0];

    var nextpalidate;
    var difference = 0;
    function npali() {
      var maxmaonthDays=[31,28,31,30,31,30,31,31,30,31,30,31];
      console.log(ndate, nmonth, nyear);

      if (
        parseInt(nmonth) > parseInt(arn[1]) &&
        parseInt(ndate) < maxmaonthDays[nmonth-1] &&
        parseInt(nmonth) < 13
      ) {
        nextpalidate = ndate + "/" + nmonth + "/" + nyear;
        difference =
          new Date(nyear + "-" + nmonth + "-" + ndate) - new Date(str);
        difference /= 1000 * 60 * 60 * 24;
        console.log(nextpalidate, difference);
      } else if (
        parseInt(nmonth) === parseInt(arn[1]) &&
        parseInt(ndate) > parseInt(arn[0]) &&
        parseInt(ndate) < maxmaonthDays[nmonth-1] &&
        parseInt(nmonth) < 13
      ) {
        nextpalidate = ndate + "/" + nmonth + "/" + nyear;
        difference =
          new Date(nyear + "-" + nmonth + "-" + ndate) - new Date(str);
        difference /= 1000 * 60 * 60 * 24;
        console.log(nextpalidate, difference);
      } else {
        if (parseInt(ndate) > maxmaonthDays[nmonth-1] || parseInt(nmonth) > 12) {
          do {
            nyear = "" + (parseInt(nyear) + 1);
            ndate = nyear[3] + nyear[2];
            nmonth = nyear[1] + nyear[0];
          } while (parseInt(ndate) > maxmaonthDays[nmonth-1] || parseInt(nmonth) > 12);
        }
        nyear = "" + (parseInt(nyear) + 1);
        ndate = nyear[3] + nyear[2];
        nmonth = nyear[1] + nyear[0];
        nextpalidate = ndate + "/" + nmonth + "/" + nyear;
        difference =
          new Date(nyear + "-" + nmonth + "-" + ndate) - new Date(str);
        difference /= 1000 * 60 * 60 * 24;
      }
    }

    npali();

    var state =
      "It's a palindrome. Congratulations ✨  You're a Palindrome Birthday Slayer ❤️";
    for (var k = 0; k < n; k++) {
      // console.log(car[k],"ki",car[n-k-1]);

      if (car[k] === car[n - k - 1]) {
        continue;
      } else {
        state = "Not a palindrome";
        break;
      }
    }

    if (state === "Not a palindrome") {
      state =
        "You missed 😔 Next Palindrome BirthDate is " +
        nextpalidate +
        " which is " +
        difference +
        " days away 😶";
    }

    setstate(state);
  }
  function datepicker(event) {
    set2(event.target.value);
  }

  return (
    <div className="App">
      <h1 id="line-1">Are you a Palindrome BirthdateSlayer 🤠 </h1>
      <h2 id="line-2">Let's find it out</h2>
      <h3 id="line-3">Enter your birthdate</h3>
      <input
        onChange={datepicker}
        id="box-1"
        type="date"
        placeholder="dd/mm/yyyy"
      />
      <div className="btn-wrapper">
        <button id="btn-1" onClick={() => clickhandler()}>
          Find Out
        </button>
      </div>

      <h2 style={{ color: "crimson" }}>{state}</h2>
      <footer>
      <p> © | 2021 | aashirwad01</p>
      <ul className="footer-list">
        <li>
          <a className="links" href="https://github.com/aashirwad01" >
          <img className="img-2" src="https://img.icons8.com/material-two-tone/24/000000/github.png" alt="github"/>
          </a>
        </li>
        
        <li>
          <a className="links" href="https://twitter.com/aashirwad_01" >
          <img className="img-2" src="https://img.icons8.com/material-sharp/24/000000/twitter.png" alt="twitter"/>
          </a>
        </li>
        <li>
          <a
            className="links"
            href="https://www.linkedin.com/in/aashirwadkumar159/"
            
          >
            <img className="img-2" src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin"/>
          </a>
        </li>
      </ul>
    </footer>
    </div>
  );
}

export default App;
