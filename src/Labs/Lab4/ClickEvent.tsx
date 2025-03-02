const hello = () => {
    alert("Hello World!");
};

const lifeIs = (good: string) => {
    alert(`Life is ${good}`); // ✅ Use backticks for template literals
};

export default function ClickEvent(){
    return(
        <div id ="wd-click-event">
            <h2>Click Event</h2>
            <button onClick={hello} id = "wd-hello-world-click">Hello World!</button>
            <button onClick={()=> {
                hello();
                lifeIs("Great!");
            }}  id = "wd-life-is-great-click">
                Life is Great!
            </button>
            <hr />
        </div>
    );
}