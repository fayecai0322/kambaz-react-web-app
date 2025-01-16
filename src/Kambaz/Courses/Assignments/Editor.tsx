
import { Link } from "react-router-dom";

export default function AssignmentEditor(){
    return(
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name </label>
            <input id="wd-name" value="A1 -ENV-HTML" /><br /><br />
            <label htmlFor="wd-description-title">Assignment Description </label>
            <textarea id="wd-description" style={{ width: '100%' }}>
                The assignment is available online Submit a link to the landing page of ...
            </textarea>
            <br />

            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor ="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value ={100} /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right">
                    <label htmlFor="wd-group">Assignment Group: </label><br />
                    </td>
                    <td>
                    <select id="wd-group">
                        <option value="assignments">ASSIGNMENTS</option>
                        <option value="instructions">INSTRUCTIONS</option>
                    </select><br/>
                    </td>
                </tr> 
                <tr>
                    <td align="right">
                    <label htmlFor="wd-display-grade-as">Display Grade as: </label><br />
                    </td>
                    <td>
                    <select id="wd-display-grade-as">
                        <option value="percentage">Percentage</option>
                        <option value="score">Score</option>
                    </select><br/>
                    </td>
                </tr> 
                <tr>
                    <td align="right">
                    <label htmlFor="wd-submission-type">Submission Type: </label><br />
                    </td>
                    <td>
                    <select id="wd-submission-type">
                        <option value="online">Online</option>
                        <option value="inperson">In Person</option>
                    </select><br/>
                    </td>
                </tr> 
            </table><br/>
            <label htmlFor="wd-online-entry-options">Online Entry Options: </label> <br />
            <input id="wd-text-entry" type="checkbox" /> Text Entry <br />
            <input id="wd-website-url" type="checkbox" /> Website URL <br />
            <input id="wd-Media Recordings" type="checkbox" /> Website Recordings <br />
            <input id="wd-student-annotation" type="checkbox" /> Student Annotation <br />
            <input id="wd-file-upload" type="checkbox" /> File Uploads <br /><br />
    
            <label htmlFor="wd-assign-to">Assign to </label><br />
            <input id="wd-assign-to" value="Everyone" /><br />

            <label htmlFor="wd-due-date">Due:</label><br />
            <input id="wd-due-date" value="2025-05-01" type="date" /><br/>
            <table>
                <tr>
                    <td>
                        <label htmlFor="wd-available-from">Available from:</label><br />
                        <input id="wd-available-from" value="2025-01-01" type="date" /><br/>
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Until:</label><br />
                        <input id="wd-available-until" value="2025-05-01" type="date" /><br/>
                    </td>
                </tr>
            </table>
            <Link to= "/Kambaz/Courses/1234/Assignments" id="wd-save-btn"><button>Save</button></Link>
            <Link to= "/Kambaz/Courses/1234/Assignments" id="wd-cancel-btn"><button>Cancel</button> </Link>
            
        </div>
    )
}