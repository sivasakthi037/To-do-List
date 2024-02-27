function addTask(){
    var input=document.getElementById('task-input').value;
    console.log(input);


    
//condition check for empty field
    if(input.trim()!=''){
    var taskItem= document.createElement("ul");
    taskItem.textContent = input;
    //now add the list element to the task list
    taskItem.className="flex flex-row justify-between border border-gray-100 rounded-md p-3 shadow-lg "
    document.getElementById('task-list').appendChild(taskItem);
    }
    

    // search for total-task element
    var totalTask = document.getElementById('total-count')

    // get child node count for the task list
    var taskCount = document.getElementById('task-list').childElementCount

    // set total task count
    totalTask.textContent = taskCount

    //Delete button 
    var deleteButton= document.createElement('button')
    //set text content'
    deleteButton.textContent="Delete"
    //class for css
    deleteButton.className="bg-red-500 text-white px-6 py-2 rounded-lg  hover:bg-green-500 marigin-4"
    // add event listener
    deleteButton.addEventListener('click',function(){
      taskItem.remove()

      // get child node count for the task list
    var taskCount = document.getElementById('task-list').childElementCount

    // set total task count
    totalTask.textContent = taskCount


    })
    //creationm appending
    taskItem.appendChild(deleteButton)

 // empty the text field 
  document.getElementById('task-input').value=''
    
}

function deleteTask(){
  document.getElementById('task-list').innerHTML=''
// updating the count 
  val=document.getElementById('total-count')
 val.textContent=0

}

tailwind.config = {
    theme: {
      extend: {
        animation: {
          'infinite-scroll': 'infinite-scroll 25s linear infinite',
        },
        keyframes: {
          'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
          }
        }                    
      },
    },
  }