export default function Grades(){
    return(
        <div>
            <h2>Grades</h2><hr />
            <table  style={{ borderCollapse: "collapse", width: "150%" }}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Due</td>
                        <td>Subhmitted</td>
                        <td>Status</td>
                        <td>Score</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Assignment 1</td>
                        <td>2025-01-01 </td>
                        <td>None </td>
                        <td>None</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Assignment 2</td>
                        <td>2025-02-01 </td>
                        <td>None </td>
                        <td>None</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Assignment 3</td>
                        <td>2025-03-01 </td>
                        <td>None </td>
                        <td>None</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}