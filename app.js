const STORAGE_KEY = "ccisc-ay-2026-2027-council-events";
const PLANNER_STORAGE_KEY = "ccisc-ay-2026-2027-planner-notes";
const ACADEMIC_START = "2026-06-01";
const ACADEMIC_END = "2027-07-31";
const collegeAcademicEventIds = new Set(["ac-005", "ac-010", "ac-016", "ac-018", "ac-087", "ac-115"]);
const councilAcademicEventIds = new Set(["ac-037"]);

const academicEvents = [
  ev("ac-001", "Enrollment of Incoming First Year Students", "2026-06-01", "2026-06-05"),
  ev("ac-002", "Admission for Graduate School students (Midyear)", "2026-06-04", "2026-06-06"),
  ev("ac-003", "Incomplete (Inc.) grades become 5.0 for Second Semester AY 2024-2025", "2026-06-15", null, "Deadline"),
  ev("ac-004", "NSTP registration and GAD Orientation for First Year - College of Arts and Sciences", "2026-06-22", null, "Orientation", "Barotac Nuevo Campus"),
  ev("ac-005", "NSTP registration and GAD Orientation for First Year - College of Computing and Informatics", "2026-06-23", null, "Orientation", "ISAT U"),
  ev("ac-006", "NSTP registration and GAD Orientation for First Year - College of Engineering and Architecture", "2026-06-24", null, "Orientation", "Dumangas Campus"),
  ev("ac-007", "NSTP registration and GAD Orientation for First Year - College of Education", "2026-06-25", null, "Orientation", "Miagao Campus"),
  ev("ac-008", "NSTP registration and GAD Orientation for First Year - College of Industrial Technology", "2026-06-26", null, "Orientation", "Leon Campus"),
  ev("ac-009", "Medical/Physical Examination of Incoming First Year Students (CAS)", "2026-06-29", "2026-06-30", "Medical"),
  ev("ac-010", "Medical/Physical Examination of Incoming First Year Students (CCI)", "2026-07-01", "2026-07-02", "Medical"),
  ev("ac-011", "Medical/Physical Examination of Incoming First Year Students (CEA)", "2026-07-06", "2026-07-10", "Medical"),
  ev("ac-012", "Orientation for Incoming First Year Students with Parents - CAS", "2026-07-13", null, "Orientation", "Barotac Nuevo Campus"),
  ev("ac-013", "Program Orientation, Campus Tour, Meet and Greet - CAS", "2026-07-14", null, "Orientation", "Barotac Nuevo Campus"),
  ev("ac-014", "Medical/Physical Examination of Incoming First Year Students (COE)", "2026-07-14", "2026-07-17", "Medical"),
  ev("ac-015", "Orientation for CWTS and LTS Students", "2026-07-15", null, "Orientation"),
  ev("ac-016", "Orientation for Incoming First Year Students with Parents - CCI", "2026-07-16", null, "Orientation"),
  ev("ac-017", "Orientation for ROTC Students", "2026-07-17", null, "Orientation"),
  ev("ac-018", "Program Orientation, Campus Tour, Meet and Greet - CCI", "2026-07-17", null, "Orientation"),
  ev("ac-019", "Medical/Physical Examination of Incoming First Year Students (CIT)", "2026-07-17", "2026-07-28", "Medical"),
  ev("ac-020", "Foundation Week Celebration - Leon Campus", "2026-07-14", "2026-07-17", "Celebration", "Leon Campus"),
  ev("ac-021", "Orientation for Incoming First Year Students with Parents - CEA", "2026-07-20", null, "Orientation"),
  ev("ac-022", "Program Orientation, Campus Tour, Meet and Greet - CEA", "2026-07-21", null, "Orientation", "Dumangas Campus"),
  ev("ac-023", "Orientation for Incoming First Year Students with Parents - COE", "2026-07-23", null, "Orientation"),
  ev("ac-024", "Program Orientation, Campus Tour, Meet and Greet - COE", "2026-07-24", null, "Orientation", "Miagao Campus"),
  ev("ac-025", "Orientation for Incoming First Year Students with Parents - CIT", "2026-07-29", null, "Orientation"),
  ev("ac-026", "Program Orientation, Campus Tour, Meet and Greet - CIT", "2026-07-30", null, "Orientation", "Leon Campus"),
  ev("ac-027", "Online Enrollment for SIP for 1st Semester AY 2026-2027", "2026-07-22", "2026-07-24", "Enrollment", "Online"),
  ev("ac-028", "Faculty Enhancement per Program / Harmonization of Syllabi per Discipline", "2026-07-01", "2026-07-31", "Faculty"),
  ev("ac-029", "Faculty Conference for 1st Semester AY 2026-2027", "2026-07-31", null, "Faculty", "ISAT U", "Educators' Guild General Assembly (AM); COE major/minor organizations assembly (PM)."),
  ev("ac-030", "Online Enrollment of 2nd year to 5th year students / Application for Graduation", "2026-07-27", "2026-07-31", "Enrollment", "Online"),
  ev("ac-031", "Incomplete (Inc.) grades become 5.0 for Midyear AY 2024-2025", "2026-08-01", null, "Deadline"),
  ev("ac-032", "Admission and Enrollment of Advance Education Students for 1st Semester AY 2026-2027", "2026-08-01", "2026-08-08", "Enrollment"),
  ev("ac-033", "ASEAN Month", "2026-08-01", "2026-08-30", "Observance"),
  ev("ac-034", "Adding and Dropping of Courses/Sections for Higher Education Students", "2026-08-03", "2026-08-07", "Enrollment"),
  ev("ac-035", "Start of Classes for 1st Semester AY 2026-2027 / Start of Official Duty of Faculty Members", "2026-08-03", null, "Academic", "ISAT U", "College/Campus Meeting."),
  ev("ac-036", "General Assembly of CASSC (AM) / CASSC minor organizations (PM)", "2026-08-03", null, "Assembly"),
  ev("ac-037", "General Assembly of CCISC (AM) / CCISC minor organizations (PM)", "2026-08-04", null, "Assembly"),
  ev("ac-038", "General Assembly of OIT (AM) / OIT minor organizations (PM)", "2026-08-05", null, "Assembly"),
  ev("ac-039", "General Assembly of EdGuild (AM) / EdGuild minor organizations (PM)", "2026-08-06", null, "Assembly"),
  ev("ac-040", "General Assembly of CEASC (AM) / CEASC minor organizations (PM)", "2026-08-07", null, "Assembly"),
  ev("ac-041", "Start of Classes of Advance Education Programs for 1st Semester AY 2026-2027", "2026-08-08", null, "Academic"),
  ev("ac-042", "121st Foundation Week Anniversary Celebration", "2026-09-09", "2026-09-12", "Celebration"),
  ev("ac-043", "First Internal Quality Audit AY 2026-2027 - Iloilo City Campus", "2026-09-15", null, "Audit", "Iloilo City Campus"),
  ev("ac-044", "Student-Administration Dialogue", "2026-09-16", null, "Dialogue"),
  ev("ac-045", "Parents-Administration Dialogue", "2026-09-17", null, "Dialogue"),
  ev("ac-046", "Faculty-Administration Dialogue", "2026-09-18", null, "Dialogue", "ISAT U", "Special Interest Clubs / Student Republic / Other Organizations' Assembly."),
  ev("ac-047", "First Internal Quality Audit AY 2026-2027 - Barotac Nuevo Campus", "2026-09-22", null, "Audit", "Barotac Nuevo Campus"),
  ev("ac-048", "First Internal Quality Audit AY 2026-2027 - Dumangas Campus", "2026-09-24", null, "Audit", "Dumangas Campus"),
  ev("ac-049", "First Internal Quality Audit AY 2026-2027 - Miagao Campus", "2026-09-25", null, "Audit", "Miagao Campus"),
  ev("ac-050", "Student Organization Fair", "2026-09-25", null, "Fair"),
  ev("ac-051", "First Internal Quality Audit AY 2026-2027 - Leon Campus", "2026-09-29", null, "Audit", "Leon Campus"),
  ev("ac-052", "Student Study Break", "2026-10-05", "2026-10-06", "Break"),
  ev("ac-053", "Midterm Examination for Undergraduate Students, 1st Semester AY 2026-2027", "2026-10-07", "2026-10-09", "Exam"),
  ev("ac-054", "Midterm Examination for Graduate School Students, 1st Semester AY 2026-2027", "2026-10-10", null, "Exam"),
  ev("ac-055", "Students Day - Barotac Nuevo Campus", "2026-10-16", "2026-10-17", "Celebration", "Barotac Nuevo Campus"),
  ev("ac-056", "Library and Information Services Month and National Book Week", "2026-11-01", "2026-11-30", "Observance"),
  ev("ac-057", "ISO 9001:2015 Second Surveillance Audit", "2026-11-09", "2026-11-13", "Audit"),
  ev("ac-058", "Online Application for University Admission Test (UAT)", "2026-12-01", "2026-12-31", "Admission", "Online"),
  ev("ac-059", "Start of Submission of Required Documents for UAT", "2026-12-07", null, "Admission"),
  ev("ac-060", "Final Examination for Undergraduate School Students, 1st Semester AY 2026-2027", "2026-12-09", "2026-12-11", "Exam"),
  ev("ac-061", "Final Examination for Graduate School Students, 1st Semester AY 2026-2027", "2026-12-12", null, "Exam"),
  ev("ac-062", "Student's Christmas Party", "2026-12-14", null, "Celebration"),
  ev("ac-063", "Last Day of Official Duty of Faculty Members / FEFI Christmas Party", "2026-12-15", null, "Faculty"),
  ev("ac-064", "Christmas Break", "2026-12-16", "2026-12-31", "Break"),
  ev("ac-065", "Online Enrollment for SIP, 2nd Semester AY 2026-2027", "2026-12-21", "2026-12-22", "Enrollment", "Online"),
  ev("ac-066", "Semestral Break / Departmental or College Meetings", "2027-01-04", "2027-01-10", "Break"),
  ev("ac-067", "Start of University Admission Test / Start of Official Duty for FY 2027", "2027-01-04", null, "Admission"),
  ev("ac-068", "Pinning Activities", "2027-01-04", "2027-01-08", "Program"),
  ev("ac-069", "End of 1st Semester AY 2026-2027 / Graduation for 1st Semester Graduates", "2027-01-08", null, "Academic"),
  ev("ac-070", "Deadline of Submission of Grade Sheets", "2027-01-06", null, "Deadline"),
  ev("ac-071", "Online Enrollment for 2nd Semester / Application for Graduation", "2027-01-06", "2027-01-08", "Enrollment", "Online"),
  ev("ac-072", "Faculty Conference for 2nd Semester AY 2026-2027", "2027-01-08", null, "Faculty"),
  ev("ac-073", "Start of Classes for 2nd Semester AY 2026-2027", "2027-01-11", null, "Academic"),
  ev("ac-074", "Start of Classes of Advance Education Programs", "2027-01-16", null, "Academic"),
  ev("ac-075", "Adding and Dropping of Subjects", "2027-01-11", "2027-01-13", "Enrollment"),
  ev("ac-076", "Foundation Week Celebration - Miagao Campus", "2027-01-27", "2027-01-30", "Celebration", "Miagao Campus"),
  ev("ac-077", "CEA Days / Students Day - Miagao Campus", "2027-01-29", "2027-01-30", "Celebration", "Miagao Campus"),
  ev("ac-078", "Incomplete (Inc.) grades become 5.0 for 1st Semester AY 2025-2026", "2027-01-29", null, "Deadline"),
  ev("ac-079", "CAS Days", "2027-02-05", "2027-02-06", "Celebration"),
  ev("ac-080", "Foundation Week Celebration - Barotac Nuevo Campus", "2027-02-08", "2027-02-12", "Celebration", "Barotac Nuevo Campus"),
  ev("ac-081", "COE Days / Students Day - Dumangas Campus", "2027-02-09", "2027-02-10", "Celebration", "Dumangas Campus"),
  ev("ac-082", "University Curriculum Review", "2027-02-16", null, "Academic"),
  ev("ac-083", "Student-Administration Dialogue", "2027-02-17", null, "Dialogue"),
  ev("ac-084", "CIT Days", "2027-02-19", "2027-02-20", "Celebration"),
  ev("ac-085", "Parent-Administration Dialogue", "2027-02-19", null, "Dialogue"),
  ev("ac-086", "Faculty-Administration Dialogue", "2027-02-23", null, "Dialogue"),
  ev("ac-087", "CCI Days", "2027-02-26", "2027-02-27", "Celebration"),
  ev("ac-088", "Leon Campus Students Day", "2027-03-04", "2027-03-05", "Celebration", "Leon Campus"),
  ev("ac-089", "Study Break", "2027-03-15", null, "Break"),
  ev("ac-090", "Midterm Examination for Undergraduate Students, 2nd Semester AY 2026-2027", "2027-03-16", "2027-03-17", "Exam"),
  ev("ac-091", "Midterm Examination for Undergraduate Students, 2nd Semester AY 2026-2027", "2027-03-19", null, "Exam"),
  ev("ac-092", "Midterm Examination for Graduate School Students, 2nd Semester AY 2026-2027", "2027-03-20", null, "Exam"),
  ev("ac-093", "World Water Day Celebration", "2027-03-22", null, "Celebration"),
  ev("ac-094", "Deadline of Submission of Midterm Grade Sheets (Graduating Students)", "2027-03-31", null, "Deadline"),
  ev("ac-095", "Foundation Week Celebration - Dumangas Campus", "2027-04-06", "2027-04-08", "Celebration", "Dumangas Campus"),
  ev("ac-096", "Second Internal Quality Audit AY 2026-2027", "2027-04-13", null, "Audit"),
  ev("ac-097", "Second Internal Quality Audit AY 2026-2027", "2027-04-19", null, "Audit"),
  ev("ac-098", "Second Internal Quality Audit AY 2026-2027", "2027-04-21", null, "Audit"),
  ev("ac-099", "Second Internal Quality Audit AY 2026-2027", "2027-04-23", null, "Audit"),
  ev("ac-100", "Final Examination of Graduating Students for 2nd Semester AY 2026-2027", "2027-05-12", "2027-05-14", "Exam"),
  ev("ac-101", "Pasidungog", "2027-05-15", null, "Program"),
  ev("ac-102", "Charter Anniversary Celebration", "2027-05-18", null, "Celebration"),
  ev("ac-103", "Deadline of Submission of Grade Sheets (Graduating Students)", "2027-05-21", null, "Deadline"),
  ev("ac-104", "Study Break", "2027-05-24", null, "Break"),
  ev("ac-105", "Final Examination of Non-graduating Students for 2nd Semester AY 2026-2027", "2027-05-25", "2027-05-27", "Exam"),
  ev("ac-106", "Last Day of Official Duty of Faculty", "2027-05-27", null, "Faculty"),
  ev("ac-107", "Posting of Qualified Incoming First Year Students for Enrollment", "2027-05-28", null, "Admission"),
  ev("ac-108", "Final Examination of Graduate School Students for 2nd Semester AY 2026-2027", "2027-05-29", null, "Exam"),
  ev("ac-109", "Deadline of Submission of Grade Sheets (Non-graduating Students)", "2027-06-09", null, "Deadline"),
  ev("ac-110", "Enrollment of SIP Midyear 2027", "2027-06-08", "2027-06-09", "Enrollment"),
  ev("ac-111", "End of 2nd Semester AY 2026-2027", "2027-06-09", null, "Academic"),
  ev("ac-112", "Admission and Enrollment for Advanced Education Midyear / Baccalaureate Degree Programs Midyear", "2027-06-10", "2027-06-12", "Enrollment"),
  ev("ac-113", "Application for Graduation Midyear / Recognition and Donning Program (CAS/CEA)", "2027-06-14", null, "Program", "Barotac Nuevo / Dumangas"),
  ev("ac-114", "Recognition and Donning Program (COE/CIT)", "2027-06-15", null, "Program", "Miagao / Leon"),
  ev("ac-115", "Recognition and Donning Program (CCI)", "2027-06-16", null, "Program"),
  ev("ac-116", "Adding and Dropping of Subjects/Sections", "2027-06-17", "2027-06-18", "Enrollment"),
  ev("ac-117", "Start of Midyear Classes", "2027-06-21", null, "Academic"),
  ev("ac-118", "Baccalaureate and Thanksgiving Mass", "2027-06-29", null, "Program"),
  ev("ac-119", "Commencement Exercises for AY 2026-2027 / Graduation for 2nd Semester Graduates", "2027-06-30", null, "Program", "ISAT U", "Incomplete (Inc.) grades become 5.0 for Second Semester AY 2025-2026."),
  ev("ac-120", "World Youth Skills Day", "2027-07-15", null, "Observance"),
  ev("ac-121", "End of Midyear Classes", "2027-07-24", null, "Academic"),
  ev("ac-122", "Graduation for Midyear 2027", "2027-07-31", null, "Program"),
  ev("ac-123", "Deadline of Submission of Midyear Grade Sheets", "2027-07-31", null, "Deadline"),
  ev("ac-124", "End of Midyear Term / Incomplete grades become 5.0 for Midyear 2026", "2027-07-31", null, "Academic")
].map(annotateAcademicEvent);

const months = buildMonths(ACADEMIC_START, ACADEMIC_END);
let councilEvents = loadCouncilEvents();
let plannerState = loadPlannerState();
let selectedDate = chooseInitialDate();
let visibleMonthIndex = clampMonthIndex(selectedDate);

const els = {
  calendarGrid: document.getElementById("calendarGrid"),
  calendarTitle: document.getElementById("calendarTitle"),
  monthSelect: document.getElementById("monthSelect"),
  prevMonth: document.getElementById("prevMonth"),
  nextMonth: document.getElementById("nextMonth"),
  jumpDateInput: document.getElementById("jumpDateInput"),
  searchInput: document.getElementById("searchInput"),
  typeFilter: document.getElementById("typeFilter"),
  selectedDateLabel: document.getElementById("selectedDateLabel"),
  selectedEvents: document.getElementById("selectedEvents"),
  upcomingList: document.getElementById("upcomingList"),
  academicCount: document.getElementById("academicCount"),
  collegeCount: document.getElementById("collegeCount"),
  councilCount: document.getElementById("councilCount"),
  monthCount: document.getElementById("monthCount"),
  taskCount: document.getElementById("taskCount"),
  notesTitle: document.getElementById("notesTitle"),
  notesSavedLabel: document.getElementById("notesSavedLabel"),
  eventSavedLabel: document.getElementById("eventSavedLabel"),
  monthNotesInput: document.getElementById("monthNotesInput"),
  taskForm: document.getElementById("taskForm"),
  taskInput: document.getElementById("taskInput"),
  taskList: document.getElementById("taskList"),
  clearCompletedTasks: document.getElementById("clearCompletedTasks"),
  eventForm: document.getElementById("eventForm"),
  eventId: document.getElementById("eventId"),
  titleInput: document.getElementById("titleInput"),
  startDateInput: document.getElementById("startDateInput"),
  endDateInput: document.getElementById("endDateInput"),
  startTimeInput: document.getElementById("startTimeInput"),
  endTimeInput: document.getElementById("endTimeInput"),
  venueInput: document.getElementById("venueInput"),
  organizerInput: document.getElementById("organizerInput"),
  audienceInput: document.getElementById("audienceInput"),
  categoryInput: document.getElementById("categoryInput"),
  statusInput: document.getElementById("statusInput"),
  notesInput: document.getElementById("notesInput"),
  formTitle: document.getElementById("formTitle"),
  clearForm: document.getElementById("clearForm"),
  addSelectedDateButton: document.getElementById("addSelectedDateButton"),
  todayButton: document.getElementById("todayButton"),
  exportButton: document.getElementById("exportButton"),
  importInput: document.getElementById("importInput"),
  printButton: document.getElementById("printButton"),
  template: document.getElementById("eventTemplate")
};

init();

function ev(id, title, startDate, endDate, category = "Academic", venue = "ISAT U / TBA", notes = "") {
  return {
    id,
    title,
    startDate,
    endDate: endDate || startDate,
    startTime: "",
    endTime: "",
    venue,
    organizer: "ISAT U",
    audience: "Students / Faculty",
    category,
    status: "From academic calendar",
    notes,
    source: "academic",
    scope: "academic"
  };
}

function annotateAcademicEvent(event) {
  if (collegeAcademicEventIds.has(event.id)) {
    return {
      ...event,
      scope: "college",
      organizer: "College of Computing and Informatics",
      audience: "CCI students / Faculty"
    };
  }

  if (councilAcademicEventIds.has(event.id)) {
    return {
      ...event,
      scope: "council",
      organizer: "CCISC",
      audience: "CCI students / CCISC minor organizations"
    };
  }

  return event;
}

function chooseInitialDate() {
  const today = todayIso();
  const savedCouncilDates = councilEvents
    .map((event) => event.startDate)
    .filter((date) => date >= ACADEMIC_START && date <= ACADEMIC_END)
    .sort();

  if (savedCouncilDates.length) {
    return savedCouncilDates.find((date) => date >= today) || savedCouncilDates[0];
  }

  return today >= ACADEMIC_START && today <= ACADEMIC_END ? today : ACADEMIC_START;
}

function init() {
  months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = formatMonth(month.year, month.month);
    els.monthSelect.append(option);
  });

  els.monthSelect.addEventListener("change", () => {
    visibleMonthIndex = Number(els.monthSelect.value);
    selectedDate = months[visibleMonthIndex].iso;
    render();
  });

  els.prevMonth.addEventListener("click", () => {
    visibleMonthIndex = Math.max(0, visibleMonthIndex - 1);
    selectedDate = months[visibleMonthIndex].iso;
    render();
  });

  els.nextMonth.addEventListener("click", () => {
    visibleMonthIndex = Math.min(months.length - 1, visibleMonthIndex + 1);
    selectedDate = months[visibleMonthIndex].iso;
    render();
  });

  els.jumpDateInput.addEventListener("change", () => {
    if (!els.jumpDateInput.value) return;
    selectedDate = els.jumpDateInput.value;
    visibleMonthIndex = clampMonthIndex(selectedDate);
    render();
  });
  els.searchInput.addEventListener("input", render);
  els.typeFilter.addEventListener("change", render);
  els.todayButton.addEventListener("click", () => {
    selectedDate = todayIso() >= ACADEMIC_START && todayIso() <= ACADEMIC_END ? todayIso() : ACADEMIC_START;
    visibleMonthIndex = clampMonthIndex(selectedDate);
    render();
  });
  els.clearForm.addEventListener("click", resetForm);
  els.addSelectedDateButton.addEventListener("click", prepareEventForSelectedDate);
  els.printButton.addEventListener("click", () => window.print());
  els.exportButton.addEventListener("click", exportCouncilEvents);
  els.importInput.addEventListener("change", importCouncilEvents);
  els.eventForm.addEventListener("submit", saveCouncilEvent);
  els.monthNotesInput.addEventListener("input", saveCurrentMonthNotes);
  els.taskForm.addEventListener("submit", addPlannerTask);
  els.clearCompletedTasks.addEventListener("click", clearCompletedTasks);
  els.startDateInput.addEventListener("change", () => {
    if (!els.endDateInput.value || els.endDateInput.value < els.startDateInput.value) {
      els.endDateInput.value = els.startDateInput.value;
    }
  });

  resetForm();
  render();
}

function render() {
  const month = months[visibleMonthIndex];
  const monthLabel = formatMonth(month.year, month.month);
  els.monthSelect.value = String(visibleMonthIndex);
  els.calendarTitle.textContent = monthLabel;
  els.jumpDateInput.value = selectedDate;
  els.prevMonth.disabled = visibleMonthIndex === 0;
  els.nextMonth.disabled = visibleMonthIndex === months.length - 1;
  renderStats();
  renderCalendar();
  renderSelectedEvents();
  renderUpcoming();
  renderPlannerNotes();
}

function renderStats() {
  const month = months[visibleMonthIndex];
  const monthStart = `${month.year}-${pad(month.month + 1)}-01`;
  const monthEnd = toIso(new Date(month.year, month.month + 1, 0));
  els.academicCount.textContent = String(academicEvents.length);
  els.collegeCount.textContent = String(academicEvents.filter((event) => event.scope === "college").length);
  els.councilCount.textContent = String(councilEvents.length);
  els.monthCount.textContent = String(filteredEvents().filter((event) => rangesOverlap(event.startDate, event.endDate, monthStart, monthEnd)).length);
  els.taskCount.textContent = String(currentMonthTasks().filter((task) => !task.done).length);
}

function renderCalendar() {
  const month = months[visibleMonthIndex];
  const first = new Date(month.year, month.month, 1);
  const start = new Date(first);
  start.setDate(start.getDate() - start.getDay());
  const today = todayIso();
  els.calendarGrid.innerHTML = "";

  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach((day) => {
    const header = document.createElement("div");
    header.className = "weekday";
    header.textContent = day;
    els.calendarGrid.append(header);
  });

  for (let i = 0; i < 42; i += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const iso = toIso(date);
    const dayEvents = eventsForDate(iso);
    const button = document.createElement("button");
    button.type = "button";
    button.className = [
      "day-cell",
      date.getMonth() !== month.month ? "outside" : "",
      iso === today ? "today" : "",
      iso === selectedDate ? "selected" : ""
    ].join(" ").trim();
    button.setAttribute("aria-label", `${formatDateLong(iso)}. ${dayEvents.length ? `${dayEvents.length} event${dayEvents.length === 1 ? "" : "s"}.` : "No events."}`);
    button.addEventListener("click", () => {
      selectedDate = iso;
      if (date.getMonth() !== month.month) {
        visibleMonthIndex = clampMonthIndex(iso);
      }
      render();
    });

    const number = document.createElement("span");
    number.className = "day-number";
    number.textContent = String(date.getDate());
    button.append(number);

    const chips = document.createElement("div");
    chips.className = "chip-list";
    dayEvents.slice(0, 4).forEach((event) => {
      const chip = document.createElement("span");
      chip.className = `event-chip ${eventClass(event)}`;
      chip.textContent = event.title;
      chips.append(chip);
    });
    if (dayEvents.length > 4) {
      const more = document.createElement("span");
      more.className = "more-chip";
      more.textContent = `+${dayEvents.length - 4} more`;
      chips.append(more);
    }
    button.append(chips);
    if (dayEvents.length) {
      button.append(createDayTooltip(iso, dayEvents));
    }
    els.calendarGrid.append(button);
  }
}

function renderSelectedEvents() {
  els.selectedDateLabel.textContent = formatDateLong(selectedDate);
  const dayEvents = eventsForDate(selectedDate);
  els.selectedEvents.innerHTML = "";
  els.selectedEvents.classList.toggle("empty-state", dayEvents.length === 0);

  if (!dayEvents.length) {
    els.selectedEvents.textContent = "No events on this date yet.";
    return;
  }

  dayEvents.forEach((event) => els.selectedEvents.append(renderEventItem(event, true)));
}

function renderUpcoming() {
  const upcoming = filteredEvents()
    .filter((event) => event.endDate >= selectedDate)
    .sort(compareEvents)
    .slice(0, 8);

  els.upcomingList.innerHTML = "";
  if (!upcoming.length) {
    els.upcomingList.classList.add("empty-state");
    els.upcomingList.textContent = "No upcoming events match the current filters.";
    return;
  }

  els.upcomingList.classList.remove("empty-state");
  upcoming.forEach((event) => els.upcomingList.append(renderEventItem(event, false)));
}

function renderPlannerNotes() {
  const key = currentMonthKey();
  const month = months[visibleMonthIndex];
  const bucket = plannerState[key] || { notes: "", tasks: [] };
  els.notesTitle.textContent = `${formatMonth(month.year, month.month)} Notes`;
  if (els.monthNotesInput.value !== bucket.notes) {
    els.monthNotesInput.value = bucket.notes || "";
  }
  renderPlannerTasks(bucket.tasks || []);
}

function renderPlannerTasks(tasks) {
  els.taskList.innerHTML = "";
  els.taskList.classList.toggle("empty-state", tasks.length === 0);
  els.clearCompletedTasks.disabled = !tasks.some((task) => task.done);

  if (!tasks.length) {
    els.taskList.textContent = "No planner tasks for this month yet.";
    return;
  }

  tasks.forEach((task) => {
    const row = document.createElement("label");
    row.className = `task-item${task.done ? " done" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => togglePlannerTask(task.id));

    const text = document.createElement("span");
    text.textContent = task.text;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "task-remove";
    remove.setAttribute("aria-label", `Remove ${task.text}`);
    remove.textContent = "x";
    remove.addEventListener("click", (event) => {
      event.preventDefault();
      removePlannerTask(task.id);
    });

    row.append(checkbox, text, remove);
    els.taskList.append(row);
  });
}

function renderEventItem(event, showActions) {
  const node = els.template.content.firstElementChild.cloneNode(true);
  node.classList.add(eventClass(event));
  node.querySelector(".event-pill").className = `event-pill ${eventClass(event)}`;
  node.querySelector(".event-pill").textContent = eventLabel(event);
  node.querySelector("h3").textContent = event.title;
  node.querySelector(".event-meta").textContent = buildMeta(event);
  const notes = node.querySelector(".event-notes");
  notes.textContent = event.notes || "";
  notes.hidden = !event.notes;

  const actions = node.querySelector(".event-actions");
  if (showActions && event.source === "council") {
    const edit = document.createElement("button");
    edit.type = "button";
    edit.className = "ghost-button";
    edit.textContent = "Edit";
    edit.addEventListener("click", () => editCouncilEvent(event.id));
    const del = document.createElement("button");
    del.type = "button";
    del.className = "danger-button";
    del.textContent = "Delete";
    del.addEventListener("click", () => deleteCouncilEvent(event.id));
    actions.append(edit, del);
  } else {
    actions.remove();
  }
  return node;
}

function saveCouncilEvent(event) {
  event.preventDefault();
  const startDate = els.startDateInput.value;
  const endDate = els.endDateInput.value || startDate;
  if (endDate < startDate) {
    els.endDateInput.focus();
    alert("End date must be the same as or later than the start date.");
    return;
  }

  const record = {
    id: els.eventId.value || `cc-${Date.now()}`,
    title: els.titleInput.value.trim(),
    startDate,
    endDate,
    startTime: els.startTimeInput.value,
    endTime: els.endTimeInput.value,
    venue: els.venueInput.value.trim(),
    organizer: els.organizerInput.value.trim() || "CCISC",
    audience: els.audienceInput.value.trim(),
    category: els.categoryInput.value,
    status: els.statusInput.value,
    notes: els.notesInput.value.trim(),
    source: "council",
    scope: "council"
  };

  const existing = councilEvents.findIndex((item) => item.id === record.id);
  if (existing >= 0) {
    councilEvents[existing] = record;
  } else {
    councilEvents.push(record);
  }

  selectedDate = record.startDate;
  visibleMonthIndex = clampMonthIndex(record.startDate);
  if (!saveCouncilEvents()) {
    alert("The event could not be saved in this browser. Please check browser storage settings, then try again.");
    return;
  }
  resetForm(false);
  render();
  flashEventSavedLabel("Event saved");
}

function editCouncilEvent(id) {
  const event = councilEvents.find((item) => item.id === id);
  if (!event) return;
  els.formTitle.textContent = "Edit Council Event";
  els.eventId.value = event.id;
  els.titleInput.value = event.title;
  els.startDateInput.value = event.startDate;
  els.endDateInput.value = event.endDate;
  els.startTimeInput.value = event.startTime || "";
  els.endTimeInput.value = event.endTime || "";
  els.venueInput.value = event.venue || "";
  els.organizerInput.value = event.organizer || "";
  els.audienceInput.value = event.audience || "";
  els.categoryInput.value = event.category || "Council Activity";
  els.statusInput.value = event.status || "Planned";
  els.notesInput.value = event.notes || "";
  els.titleInput.focus();
}

function deleteCouncilEvent(id) {
  const event = councilEvents.find((item) => item.id === id);
  if (!event) return;
  councilEvents = councilEvents.filter((item) => item.id !== id);
  if (!saveCouncilEvents()) {
    alert("The event was removed from the screen, but browser storage could not be updated.");
  }
  resetForm();
  render();
  flashEventSavedLabel("Event deleted");
}

function prepareEventForSelectedDate() {
  resetForm();
  els.formTitle.textContent = `Add Event on ${formatDateShort(selectedDate)}`;
  els.startDateInput.value = selectedDate;
  els.endDateInput.value = selectedDate;
  els.titleInput.focus();
}

function resetForm(useSelectedDate = true) {
  els.formTitle.textContent = "Add Council Event";
  els.eventForm.reset();
  els.eventId.value = "";
  const date = useSelectedDate ? selectedDate : "";
  els.startDateInput.value = date;
  els.endDateInput.value = date;
  els.organizerInput.value = "CCISC";
}

function saveCurrentMonthNotes() {
  const bucket = ensurePlannerMonth(currentMonthKey());
  bucket.notes = els.monthNotesInput.value;
  savePlannerState();
  flashSavedLabel("Saved");
}

function addPlannerTask(event) {
  event.preventDefault();
  const text = els.taskInput.value.trim();
  if (!text) return;
  const bucket = ensurePlannerMonth(currentMonthKey());
  bucket.tasks.push({
    id: `task-${Date.now()}`,
    text,
    done: false
  });
  els.taskInput.value = "";
  savePlannerState();
  renderStats();
  renderPlannerNotes();
  flashSavedLabel("Task added");
}

function togglePlannerTask(id) {
  const task = currentMonthTasks().find((item) => item.id === id);
  if (!task) return;
  task.done = !task.done;
  savePlannerState();
  renderStats();
  renderPlannerNotes();
  flashSavedLabel("Saved");
}

function removePlannerTask(id) {
  const bucket = ensurePlannerMonth(currentMonthKey());
  bucket.tasks = bucket.tasks.filter((task) => task.id !== id);
  savePlannerState();
  renderStats();
  renderPlannerNotes();
  flashSavedLabel("Removed");
}

function clearCompletedTasks() {
  const bucket = ensurePlannerMonth(currentMonthKey());
  bucket.tasks = bucket.tasks.filter((task) => !task.done);
  savePlannerState();
  renderStats();
  renderPlannerNotes();
  flashSavedLabel("Cleared");
}

function createDayTooltip(iso, dayEvents) {
  const tooltip = document.createElement("div");
  tooltip.className = "day-tooltip";
  tooltip.setAttribute("role", "tooltip");

  const date = document.createElement("strong");
  date.className = "tooltip-date";
  date.textContent = formatDateLong(iso);
  tooltip.append(date);

  const list = document.createElement("div");
  list.className = "tooltip-list";
  dayEvents.slice(0, 5).forEach((event) => {
    const row = document.createElement("div");
    row.className = "tooltip-event";

    const marker = document.createElement("i");
    marker.className = `tooltip-marker ${eventClass(event)}`;

    const text = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = event.title;
    const meta = document.createElement("span");
    meta.textContent = buildTooltipMeta(event);
    text.append(title, meta);
    row.append(marker, text);
    list.append(row);
  });

  if (dayEvents.length > 5) {
    const more = document.createElement("div");
    more.className = "tooltip-more";
    more.textContent = `+${dayEvents.length - 5} more event${dayEvents.length - 5 === 1 ? "" : "s"}`;
    list.append(more);
  }

  tooltip.append(list);
  return tooltip;
}

function filteredEvents() {
  const term = els.searchInput.value.trim().toLowerCase();
  const type = els.typeFilter.value;
  return [...academicEvents, ...councilEvents]
    .filter((event) => {
      if (type === "academic" && event.scope !== "academic") return false;
      if (type === "college" && event.scope !== "college") return false;
      if (type === "council" && event.scope !== "council") return false;
      if (!term) return true;
      return [event.title, event.venue, event.organizer, event.audience, event.category, event.notes]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(term));
    })
    .sort(compareEvents);
}

function eventsForDate(iso) {
  return filteredEvents().filter((event) => iso >= event.startDate && iso <= event.endDate);
}

function eventClass(event) {
  if (["Deadline", "Exam"].includes(event.category)) return "deadline";
  if (event.scope === "college") return "college";
  if (event.scope === "council") return "council";
  return event.source === "council" ? "council" : "academic";
}

function eventLabel(event) {
  if (event.scope === "college") return "CCI College";
  if (event.scope === "council") return event.category || "Council";
  return event.source === "academic" ? event.category : event.category || "Council";
}

function buildMeta(event) {
  const parts = [
    formatDateRange(event.startDate, event.endDate),
    formatTimeRange(event.startTime, event.endTime),
    event.venue ? `Venue: ${event.venue}` : "Venue: TBA",
    event.organizer ? `Organizer: ${event.organizer}` : "",
    event.audience ? `Audience: ${event.audience}` : "",
    event.status ? `Status: ${event.status}` : ""
  ].filter(Boolean);
  return parts.join(" | ");
}

function buildTooltipMeta(event) {
  return [
    formatTimeRange(event.startTime, event.endTime),
    event.venue ? `Venue: ${event.venue}` : "Venue: TBA",
    event.scope === "college" ? "CCI college event" : event.scope === "council" ? "Council event" : event.source === "academic" ? "Academic calendar" : event.status || "Council event"
  ].filter(Boolean).join(" | ");
}

function exportCouncilEvents() {
  const payload = {
    exportedAt: new Date().toISOString(),
    calendar: "CCISC Event Planner AY 2026-2027",
    events: councilEvents,
    planner: plannerState
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ccisc-council-events-ay-2026-2027.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importCouncilEvents(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const imported = Array.isArray(parsed) ? parsed : parsed.events;
      if (!Array.isArray(imported)) throw new Error("Invalid import file");
      const normalized = imported
        .filter((item) => item.title && item.startDate)
        .map((item) => ({
          id: item.id || `cc-${crypto.randomUUID ? crypto.randomUUID() : Date.now()}`,
          title: String(item.title),
          startDate: item.startDate,
          endDate: item.endDate || item.startDate,
          startTime: item.startTime || "",
          endTime: item.endTime || "",
          venue: item.venue || "",
          organizer: item.organizer || "CCISC",
          audience: item.audience || "",
          category: item.category || "Council Activity",
          status: item.status || "Planned",
          notes: item.notes || "",
          source: "council",
          scope: "council"
        }));
      councilEvents = mergeEvents(councilEvents, normalized);
      if (parsed && parsed.planner && typeof parsed.planner === "object" && !Array.isArray(parsed.planner)) {
        plannerState = { ...plannerState, ...parsed.planner };
        savePlannerState();
      }
      if (!saveCouncilEvents()) {
        throw new Error("Browser storage unavailable");
      }
      render();
      flashEventSavedLabel("Imported and saved");
      alert(`${normalized.length} council event(s) imported. Planner notes were included if available.`);
    } catch (error) {
      alert("The selected JSON file could not be imported.");
    } finally {
      els.importInput.value = "";
    }
  };
  reader.readAsText(file);
}

function mergeEvents(current, incoming) {
  const map = new Map(current.map((event) => [event.id, event]));
  incoming.forEach((event) => map.set(event.id, event));
  return [...map.values()].sort(compareEvents);
}

function loadCouncilEvents() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved)
      ? saved
        .filter((event) => event.source === "council")
        .map((event) => ({ ...event, scope: "council" }))
      : [];
  } catch {
    return [];
  }
}

function saveCouncilEvents() {
  try {
    const serialized = JSON.stringify(councilEvents);
    localStorage.setItem(STORAGE_KEY, serialized);
    return localStorage.getItem(STORAGE_KEY) === serialized;
  } catch {
    return false;
  }
}

function loadPlannerState() {
  try {
    const saved = JSON.parse(localStorage.getItem(PLANNER_STORAGE_KEY) || "{}");
    return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
  } catch {
    return {};
  }
}

function savePlannerState() {
  localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(plannerState));
}

function ensurePlannerMonth(key) {
  if (!plannerState[key]) {
    plannerState[key] = { notes: "", tasks: [] };
  }
  if (!Array.isArray(plannerState[key].tasks)) {
    plannerState[key].tasks = [];
  }
  if (typeof plannerState[key].notes !== "string") {
    plannerState[key].notes = "";
  }
  return plannerState[key];
}

function currentMonthKey() {
  const month = months[visibleMonthIndex];
  return `${month.year}-${pad(month.month + 1)}`;
}

function currentMonthTasks() {
  return ensurePlannerMonth(currentMonthKey()).tasks;
}

function flashSavedLabel(text) {
  els.notesSavedLabel.textContent = text;
  window.clearTimeout(flashSavedLabel.timeout);
  flashSavedLabel.timeout = window.setTimeout(() => {
    els.notesSavedLabel.textContent = "Saved locally";
  }, 1200);
}

function flashEventSavedLabel(text) {
  els.eventSavedLabel.textContent = text;
  window.clearTimeout(flashEventSavedLabel.timeout);
  flashEventSavedLabel.timeout = window.setTimeout(() => {
    els.eventSavedLabel.textContent = "Events save locally";
  }, 1600);
}

function compareEvents(a, b) {
  return `${a.startDate}${a.startTime || ""}${a.title}`.localeCompare(`${b.startDate}${b.startTime || ""}${b.title}`);
}

function buildMonths(startIso, endIso) {
  const start = fromIso(startIso);
  const end = fromIso(endIso);
  const output = [];
  for (let year = start.getFullYear(), month = start.getMonth(); year < end.getFullYear() || (year === end.getFullYear() && month <= end.getMonth()); month += 1) {
    if (month > 11) {
      month = 0;
      year += 1;
    }
    output.push({ year, month, iso: `${year}-${pad(month + 1)}-01` });
  }
  return output;
}

function clampMonthIndex(iso) {
  const found = months.findIndex((month) => iso.startsWith(`${month.year}-${pad(month.month + 1)}`));
  if (found >= 0) return found;
  return iso < ACADEMIC_START ? 0 : months.length - 1;
}

function rangesOverlap(startA, endA, startB, endB) {
  return startA <= endB && endA >= startB;
}

function formatMonth(year, month) {
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(new Date(year, month, 1));
}

function formatDateLong(iso) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(fromIso(iso));
}

function formatDateRange(startDate, endDate) {
  if (startDate === endDate) return formatDateShort(startDate);
  return `${formatDateShort(startDate)} to ${formatDateShort(endDate)}`;
}

function formatDateShort(iso) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(fromIso(iso));
}

function formatTimeRange(start, end) {
  if (!start && !end) return "Time: TBA";
  if (start && end) return `Time: ${to12Hour(start)} to ${to12Hour(end)}`;
  return `Time: ${to12Hour(start || end)}`;
}

function to12Hour(time) {
  const [hour, minute] = time.split(":").map(Number);
  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = ((hour + 11) % 12) + 1;
  return `${displayHour}:${pad(minute)} ${suffix}`;
}

function todayIso() {
  return toIso(new Date());
}

function toIso(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function fromIso(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function pad(value) {
  return String(value).padStart(2, "0");
}
