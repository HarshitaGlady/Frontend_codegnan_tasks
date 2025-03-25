/* jshint esversion: 6 */
let tasks=[
    {id:1,name:'Waking Up',startTime:"07:00",endTime:"07:30"},
    {id:2,name:'Quiet Time', startTime:"07:30",endTime:"08:00"},
    {id:3,name:'Breakfast',startTime:"08:00",endTime:"08:30"},
    {id:4,name:'Python class',startTime:"09:00",endTime:"10:30"},
    {id:5,name:'Aptitude',startTime:"11:00",endTime:"12:30"},
    {id:6,name:'Lunch Break',startTime:"12:30",endTime:"01:30"},
    {id:7,name:'Practice Session',startTime:"01:30",endTime:"03:00"},
    {id:8,name:'Front-end class',startTime:"03:30",endTime:"05:00"},
    {id:9,name:'Practice Session',startTime:"05:00",endTime:"06:00"}
];
function displayTasks()
{
    let returnValue=tasks.reduce(function(acc,obj,ind){
        let tr=`
        <tr>
            <td>${obj.id}</td>
            <td>${obj.name}</td>
            <td>${obj.startTime}</td>
            <td>${obj.endTime}</td>
            <td>
               <button class="btn btn-warning btn-sm me-2" onclick="editTask(${ind})">Edit</button>
               <button class="btn btn-danger btn-sm" onclick="deleteTask(${ind})">Delete</button>
            </td>
        </tr>`;
        acc+=tr;
        return acc;
    }," ");
    let table=`
    <table border="1px">
       <tr>
           <th>ID</th>
           <th>Task Name</th>
           <th>StartTime</th>
           <th>EndTime</th>
           <th>Actions</th>
        </tr>
        ${returnValue}
    </table>`;
    let ele=document.getElementById("display");
    ele.innerHTML=table;
}
displayTasks();
function addTask(){
    let idEle=document.getElementById("taskId");
    let nameEle=document.getElementById("taskName");
    let startTimeEle=document.getElementById("startTime");
    let endTimeEle=document.getElementById("endTime");

    let id=idEle.value;
    let name=nameEle.value;
    let startTime=startTimeEle.value;
    let endTime=endTimeEle.value;

    let obj={
        id,
        name,
        startTime,
        endTime
    };
    tasks.push(obj);
    displayTasks();

    idEle.value="";
    nameEle.value="";
    startTimeEle.value="";
    endTimeEle.value="";
}
function editTask(ind){
    let idEle=document.getElementById("taskId");
    let nameEle=document.getElementById("taskName");
    let startTimeEle=document.getElementById("startTime");
    let endTimeEle=document.getElementById("endTime");
    let editIndexEle=document.getElementById("editInd");

    let obj=tasks[ind];
    idEle.value=obj.id;
    nameEle.value=obj.name;
    startTimeEle.value=obj.startTime;
    endTimeEle.value=obj.endTime;
    editIndexEle.value=ind;//store index
}
function editDetails(){
    let idEle=document.getElementById("taskId");
    let nameEle=document.getElementById("taskName");
    let startTimeEle=document.getElementById("startTime");
    let endTimeEle=document.getElementById("endTime");
    let editIndexEle=document.getElementById("editInd");
    let id=idEle.value;
    let name=nameEle.value;
    let startTime=startTimeEle.value;
    let endTime=endTimeEle.value;
    let ind=editIndexEle.value;

    let obj={
        id,
        name,
        startTime,
        endTime
    };
    let a=tasks.find(function (val){
        if(val.id==id){
            return true;
        }
    });
    // let ind=tasks.indexOf(a);
    tasks[ind]=obj;
    alert("Task Updated successfully!");

    idEle.value="";
    nameEle.value="";
    startTimeEle.value="";
    endTimeEle.value="";
    editIndexEle.value="";
    displayTasks();

}
function deleteTask(ind){
    tasks.splice(ind,1);
    displayTasks();
}
function deleteAllTasks(){
    tasks.length=0;
    alert("All tasks are deleted!");
    displayTasks();
}
displayTasks();















































