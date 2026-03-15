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
