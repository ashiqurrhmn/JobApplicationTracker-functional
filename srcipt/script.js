let interviewList = [];
let rejectedList = [];
let currentStatus = "ALL";

let total = document.getElementById("total-count");
let interview = document.getElementById("interview-count");
let rejected = document.getElementById("rejected-count");
let availableJobs = document.getElementById("available-jobs");

const allCards = document.getElementById("cards");
const mainContainer = document.querySelector("main");
const filteredSection = document.getElementById("filtered-section");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

function count() {
  const totalJobs = allCards.children.length;
  total.innerText = totalJobs;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectedList.length;

  if (currentStatus === "ALL") {
    availableJobs.innerText = `${totalJobs} jobs`;
  } else if (currentStatus === "interview-btn") {
    availableJobs.innerText = `${interviewList.length} of ${totalJobs} jobs`;
  } else if (currentStatus === "rejected-btn") {
    availableJobs.innerText = `${rejectedList.length} of ${totalJobs} jobs`;
  }

  if (currentStatus === "ALL") {
    const noJobEl = document.getElementById("no-job");
    if (totalJobs > 0) {
      noJobEl.classList.add("hidden");
    } else {
      noJobEl.classList.remove("hidden");
    }
  }
};
count();

function toggleStyle(id) {
  allBtn.classList.remove("bg-blue-500", "text-white");
  interviewBtn.classList.remove("bg-blue-500", "text-white");
  rejectedBtn.classList.remove("bg-blue-500", "text-white");

  allBtn.classList.add("bg-white", "text-[#64748B]");
  interviewBtn.classList.add("bg-white", "text-[#64748B]");
  rejectedBtn.classList.add("bg-white", "text-[#64748B]");

  const selectedBtn = document.getElementById(id);
  currentStatus = id;

  selectedBtn.classList.remove("bg-white", "text-[#64748B]");
  selectedBtn.classList.add("bg-blue-500", "text-white");

  if (id == "interview-btn") {
    allCards.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    currentStatus = id;
    renderInterview();
    count();
  } else if (id == "all-btn") {
    allCards.classList.remove("hidden");
    filteredSection.classList.add("hidden");
    currentStatus = "ALL";
    count();
  } else if (id == "rejected-btn") {
    allCards.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    currentStatus = id;
    renderRejected();
    count();
  }
};

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parent = event.target.parentNode.parentNode;
    const jobName = parent.querySelector(".job-name").innerText;
    const position = parent.querySelector(".position").innerText;
    const time = parent.querySelector(".time").innerText;
    const status = parent.querySelector(".status-name").innerText;
    const description = parent.querySelector(".description").innerText;
    parent.querySelector(".status-name").innerText = "INTERVIEW";

    const cardInfo = {
      jobName,
      position,
      time,
      status: "INTERVIEW",
      description,
    };
    const existingCard = interviewList.find(
      (item) => item.jobName == cardInfo.jobName,
    );

    if (!existingCard) {
      interviewList.push(cardInfo);
    }
    rejectedList = rejectedList.filter(
      (item) => item.jobName != cardInfo.jobName,
    );

    if (currentStatus == "rejected-btn") {
      renderRejected();
    }
    count();
  } else if (event.target.classList.contains("rejected-btn")) {
    const parent = event.target.parentNode.parentNode;
    const jobName = parent.querySelector(".job-name").innerText;
    const position = parent.querySelector(".position").innerText;
    const time = parent.querySelector(".time").innerText;
    const status = parent.querySelector(".status-name").innerText;
    const description = parent.querySelector(".description").innerText;
    parent.querySelector(".status-name").innerText = "REJECTED";

    const cardInfo = {
      jobName,
      position,
      time,
      status: "REJECTED",
      description,
    };
    const existingCard = rejectedList.find(
      (item) => item.jobName == cardInfo.jobName,
    );

    if (!existingCard) {
      rejectedList.push(cardInfo);
    }
    interviewList = interviewList.filter(
      (item) => item.jobName != cardInfo.jobName,
    );
    if (currentStatus == "interview-btn") {
      renderInterview();
    }

    count();
  }
});

function renderInterview() {
  filteredSection.innerHTML = "";
  const noJobEl = document.getElementById("no-job");

  if (interviewList.length === 0) {
    noJobEl.classList.remove("hidden");
    return;
  }

  noJobEl.classList.add("hidden");
  for (let interview of interviewList) {
    console.log(interview);
    let div = document.createElement("div");
    div.className = "mt-4 flex justify-between bg-white p-3 rounded-[8px]";
    div.innerHTML = `
        <div>
            <h4 class="job-name text-4 font-bold">${interview.jobName}</h4>
            <p class="position text-[#64748B] mb-[20px]">${interview.position}</p>
            <p class="time text-[#64748B] mb-[20px] text-[14px]">
              ${interview.time}
            </p>
            <p
              class="status-name bg-slate-200 text-[14px] font-medium w-27 text-center rounded-[4px] p-1"
            >
                ${interview.status}
            </p>
            <p class="description text-[14px] mb-[20px]">
              ${interview.description}
            </p>
            <div>
              <button class="interview-btn btn bg-white border-green-600 text-green-600">
                INTERVIEW
              </button>
              <button class="rejected-btn btn bg-white border-red-700 text-red-700">REJECTED</button>
            </div>
          </div>
          <div>
            <button class="delete-btn btn btn-ghost rounded-full bg-white">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>`;
    filteredSection.appendChild(div);
  }
}

function renderRejected() {
  filteredSection.innerHTML = "";
  const noJobEl = document.getElementById("no-job");

  if (rejectedList.length === 0) {
    noJobEl.classList.remove("hidden");
    return;
  }

  noJobEl.classList.add("hidden");
  for (let rejected of rejectedList) {
    let div = document.createElement("div");
    div.className = "mt-4 flex justify-between bg-white p-3 rounded-[8px]";
    div.innerHTML = `
        <div>
            <h4 class="job-name text-4 font-bold">${rejected.jobName}</h4>
            <p class="position text-[#64748B] mb-[20px]">${rejected.position}</p>
            <p class="time text-[#64748B] mb-[20px] text-[14px]">
              ${rejected.time}
            </p>
            <p
              class="status-name bg-slate-200 text-[14px] font-medium w-27 text-center rounded-[4px] p-1"
            >
                ${rejected.status}
            </p>
            <p class="description text-[14px] mb-[20px]">
              ${rejected.description}
            </p>
            <div>
              <button class="interview-btn btn bg-white border-green-600 text-green-600">
                INTERVIEW
              </button>
              <button class="rejected-btn btn bg-white border-red-700 text-red-700">REJECTED</button>
            </div>
          </div>
          <div>
            <button class="delete-btn btn btn-ghost rounded-full bg-white">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>`;
    filteredSection.appendChild(div);
  }
}
