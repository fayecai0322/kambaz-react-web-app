import { Link } from "react-router-dom";
export default function Quiz(){
    return(
        <div>
            <h2>Quiz 123</h2><hr />
            <ol>
                <li>Question 1: What is Internet?</li>
                <textarea id="wd-quiz-answer" style={{ width: '100%' }}>
                Answer Here
                </textarea>

                <li>Question 2: What is React</li>
                <textarea id="wd-quiz-answer" style={{ width: '100%' }}>
                Answer Here
                </textarea>
            </ol>
            <Link to="/Kambaz/Courses/1234/Quizzes"><button>Submit</button></Link>
        </div>
    );
}