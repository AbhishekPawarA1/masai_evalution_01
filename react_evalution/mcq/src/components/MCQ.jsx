import { useState } from "react";
import "../css/style.css"

export function MCQ() {

    let [correct,setcorrect]=useState(false)
    const mcqQuestions = [
      {
        id: 1,
        question: "What is React primarily used for?",
        options: [
          "Data Science",
          "Mobile Apps",
          "Building User Interfaces",
          "Networking",
        ],
        correctAnswer: 3, 
      },
      {
        id: 2,
        question:
          "Which hook is used to manage state in a functional component?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correctAnswer: 1, 
      },
      {
        id: 3,
        question:
          "Which lifecycle method is used for side effects in functional components?",
        options: [
          "componentDidMount",
          "useEffect",
          "shouldComponentUpdate",
          "componentWillUnmount",
        ],
        correctAnswer: 2,
      },
      {
        id: 4,
        question:
          "How do you update state based on the previous state in React?",
        options: [
          "setState(newValue)",
          "setState(prevState => newValue)",
          "setState(() => newValue)",
          "setState(value, prevState)",
        ],
        correctAnswer: 2, // 
      },
      {
        id: 5,
        question:
          "What is the correct way to pass data from parent to child component?",
        options: ["State", "Props", "Context", "Ref"],
        correctAnswer: 2, 
      },
    ];
    
    function handleresult(id) {
        console.log(id)
        let result = mcqQuestions.map((ele) => {
            // console.log(ele.correctAnswer)
            // console.log("hi")
            if (ele.correctAnswer == id + 1) {
                console.log(ele.correctAnswer)
                console.log(id+1)
                setcorrect(true)
            }
            else {
                setcorrect(false)
            }
        })

    }


    return (
        <div className="parent">
            <h1>Questions</h1>
            {
                mcqQuestions.map((ele) => {
                    return (
                        <>
                        <p>Question:{ele.id }</p>
                        <div key={ele.id} className="que">
                          <h2>{ele.question}</h2>
                          <p>Options:</p>
                          {ele.options.map((opt,optid) => {
                              return <button key={optid} style={ correct ? {color:"green"} : {color:"red"} } onClick={()=>handleresult(optid)} className="opt">{opt}</button>;
                          })}
                        </div>
                      </>
                    );
                })
            }
        
        </div>
    )
}