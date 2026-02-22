let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total-count");
let interview = document.getElementById("interview-count");
let rejected = document.getElementById("rejected-count");
let availableJobs = document.getElementById("available-jobs");

const allCards = document.getElementById("cards");
const mainContainer = document.querySelector("main");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

function count() {
  total.innerText = allCards.children.length;
  availableJobs.innerText = `${allCards.children.length} jobs`;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectedList.length;
}
count();

function toggleStyle(id) {
  allBtn.classList.remove("bg-blue-500", "text-white");
  interviewBtn.classList.remove("bg-blue-500", "text-white");
  rejectedBtn.classList.remove("bg-blue-500", "text-white");

  allBtn.classList.add("bg-white", "text-[#64748B]");
  interviewBtn.classList.add("bg-white", "text-[#64748B]");
  rejectedBtn.classList.add("bg-white", "text-[#64748B]");

  const selectedBtn = document.getElementById(id);

  selectedBtn.classList.remove("bg-white", "text-[#64748B]");
  selectedBtn.classList.add("bg-blue-500", "text-white");
}

mainContainer.addEventListener("click", function (event) {
  const parent = event.target.parentNode.parentNode;
  const jobName = parent.querySelector(".job-name").innerText;
  const position = parent.querySelector(".position").innerText;
  const time = parent.querySelector(".time").innerText;
  const status = parent.querySelector(".status-name").innerText;
  const description = parent.querySelector(".description").innerText;
  
  const cardInfo = {
    jobName,
    position,
    time,
    status,
    description,
  }
  const existingCard = interviewList.find(item=> item.jobName == cardInfo.jobName)
  if(!existingCard) {
    interviewList.push(cardInfo);
  }
  console.log(interviewList);
  count();
});
