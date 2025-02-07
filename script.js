let container = document.getElementById("root");
let title = document.getElementById("input-title");
let description = document.getElementById("input-description");
description.addEventListener("change", handledescription);
function handledescription() {
  console.log(description.value);
}

let add = document.getElementById("add");
add.addEventListener("click", handleadd);

function handleadd() {
  container.innerHTML = `
          
           <div id="child">
                <h3 id="head">Task</h3>
                <p>Title:<b>${title.value}</b></h1>
                    <p>Description:<b>${description.value}</b></h1>
            </div>
        `;
}

// filter approach

// data.sort((a,b)=>{
//     return a-b
// })
