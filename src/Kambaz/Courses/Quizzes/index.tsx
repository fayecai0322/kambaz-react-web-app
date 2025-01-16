export default function Quizzes(){
    return(
        <div id ="wd-quizzes">
        <h2>Quizzes</h2><hr />

        <ol id="wd-quiz-list">
            <li className="wd-quiz-title">
                <a className="wd-quiz-link"href="#/Kambaz/Courses/1234/Quizzes/123">
                Quiz 1</a>
            </li>   
            <li>
                 <a className="wd-quiz-link"href="#/Kambaz/Courses/1234/Quizzes/123">
                    Quiz 2</a>
            </li>    
            <li>
                 <a className="wd-quiz-link"href="#/Kambaz/Courses/1234/Quizzes/123">
                    Quiz 3</a>
            </li>
        </ol>
    </div>

    );
}