import "./App.css";
import React from "react";
import { Div } from "./companent/Div";
import { NotFound } from "./companent/NotFound";
import { Route, Routes } from "react-router-dom";
import { Comments } from "./companent/Comments";
import { Feedback } from "./companent/Feedback";

function App() {
  
  let objData = [
    {
      name: "Add tags for solutions",
      describe: "Easier to search for solutions based on a specific stack.",
      button: "Enhancement",
      number: "112",
      commentnum: "2",
    },
    {
      name: "Add a dark theme option",
      describe:
        "It would help people with light sensitivities and who prefer dark mode.",
      button: "Feature",
      number: "99",
      commentnum: "4",
    },
    {
      name: "Q&A within the challenge hubs",
      describe: "Challenge-specific Q&A would make for easy reference.",
      button: "Feature",
      number: "65",
      commentnum: "1",
    },
    {
      name: "Allow image/video upload to feedback",
      describe: "Images and screencasts can enhance comments on solutions.",
      button: "Enhancement",
      number: "51",
      commentnum: "2",
    },
    {
      name: "Ability to follow others",
      describe: "Stay updated on comments and solutions other people post.",
      button: "Feature",
      number: "42",
      commentnum: "3",
    },
    {
      name: "Preview images not loading",
      describe: "Challenge preview images are missing when you apply a filter.",
      button: "Bug",
      number: "3",
      commentnum: "0",
    },
  ];

  let ButtonData = [
    {
      name: "All",
    },
    {
      name: "UI",
    },
    {
      name: "UX",
    },
    {
      name: "Enhancement",
    },
    {
      name: "Bug",
    },
    {
      name: "Feature",
    },
  ];

  let userData = [
    {
      name: "Planned",
      number: "2",
    },
    {
      name: "In-Progress",
      number: "3",
    },
    {
      name: "Live",
      number: "1",
    },
  ];

  return (
    <>
    <Routes>
      <Route path="/" element={<Div objData={objData} ButtonData={ButtonData} userData={userData}></Div>}></Route>
      <Route path="*" element={<NotFound/>} />
      <Route path="/comments" element={<Comments/>}></Route>
      <Route path="/feedback" element={<Feedback ButtonData={ButtonData}/>}></Route>
    </Routes>
    </>
  );
}

export default App;