// a function that will only show the items of buttons when clicked and rest are hidden
function showOnly(id){
    const allJobs=document.getElementById('all-jobs');
    const interviewJobs=document.getElementById('interview-jobs');
    const rejectedJobs=document.getElementById('rejected-jobs');
    // allJobs.style.display='none';
    // interviewJobs.style.display='none';
    // rejectedJobs.style.display='none';
    allJobs.classList.add('hidden');
    interviewJobs.classList.add('hidden');
    rejectedJobs.classList.add('hidden');
    const element=document.getElementById(id);
    element.classList.remove('hidden');
}
// function disableClick(buttonId) {
//   const btn = document.getElementById(buttonId);
//   btn.disabled=true;
// //   btn.addEventListener("click", function() {
// //     btn.disabled = true;
// //   });
// }
function disableOnClick(clickedId, otherId) {
  const clickedBtn = document.getElementById(clickedId);
  const otherBtn = document.getElementById(otherId);
    clickedBtn.disabled = true;
    otherBtn.style.pointerEvents = "none";
  };
function changeBtn(id){
    const btn=document.getElementById(id);
    btn.innerHTML=`
    <button class="btn ml-10">
  <span class="loading loading-spinner"></span>
  Please Cheak options
</button
    `
    btn.disabled=true;
}

function createJobCard(id){
    // get where to add the card
    const history=document.getElementById(id);
    // copy the div from all jobs and add to the history
   const newHistory=document.createElement('div');
   if(id=='interview-section'){
   newHistory.innerHTML=`
   <div class=" w-full  rounded-xl shadow-sm p-5 mb-5">
           <div class=" flex flex-col">
                <h2 class="font-bold text-xl">Software Engineer</h2>
                <p class="text-gray-500">Google</p>
                <button class="btn w-[150px] mt-6 btn-success btn-neutral btn-outline interview-button">Interviewed</button>
                
            </div>
            <div class=" flex justify-between items-center mt-5">
               
                <p class="text-gray-500">Remote</p>
                <p class="text-gray-500">Salary: $100,000</p>
                <p class="text-gray-500">Time: Full-time</p>
                
            </div>
            <div class=" mt-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class=" flex justify-start gap-5 mt-5">
                <button class="btn btn-success btn-neutral btn-outline interview-button">Interview</button>
                <button class="btn btn-error btn-outline btn-neutral rejected-button">Rejected</button>
            </div>
                </div>` }
                else if(id=='rejected-section'){
  newHistory.innerHTML=`
   <div class=" w-full  rounded-xl shadow-sm p-5 mb-5">
           <div class=" flex flex-col">
                <h2 class="font-bold text-xl">Software Engineer</h2>
                <p class="text-gray-500">Google</p>
                <button class="btn w-[150px] mt-6 btn-error btn-outline btn-neutral rejected-button">Rejected</button>
                
            </div>
            <div class=" flex justify-between items-center mt-5">
               
                <p class="text-gray-500">Remote</p>
                <p class="text-gray-500">Salary: $100,000</p>
                <p class="text-gray-500">Time: Full-time</p>
                
            </div>
            <div class=" mt-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class=" flex justify-start gap-5 mt-5">
                <button class="btn btn-success btn-neutral btn-outline interview-button">Interview</button>
                <button class="btn btn-error btn-outline btn-neutral rejected-button">Reject</button>
            </div>
                </div>`
                }
        history.appendChild(newHistory);

}
function interviewButton(){
    const interviewButtons=document.getElementById('interview-number');
    const value=Number(interviewButtons.innerText);
    interviewButtons.innerText=value+1;
  
}
function rejectedButton(){
    const rejectedButtons=document.getElementById('rejected-number');
    const value=Number(rejectedButtons.innerText);
    rejectedButtons.innerText=value+1;
    
}
function allJobsButton(){
    const value=document.getElementById('job-item');
    value.innerHTML=`9 Jobs`;
}
function interviewJobsButton(){
    const interviewButtons=document.getElementById('interview-number');
    const value=Number(interviewButtons.innerText);
    const jobs=document.getElementById('job-item');
    jobs.innerHTML=`${value} Jobs`;
}
function rejectedJobsButton(){
    const rejectedButtons=document.getElementById('rejected-number');
    const value=Number(rejectedButtons.innerText);
    const jobs=document.getElementById('job-item');
    jobs.innerHTML=`${value} Jobs`;
}
// function otherDisabled(id){
//     const id=getElementById(id);
//     id.disabled=true;
// }