let doctors =
JSON.parse(localStorage.getItem("doctors"))
|| [];

let patients =
JSON.parse(localStorage.getItem("patients"))
|| [];

let appointments =
JSON.parse(localStorage.getItem("appointments"))
|| [];

function saveData(){

    localStorage.setItem(
        "doctors",
        JSON.stringify(doctors)
    );

    localStorage.setItem(
        "patients",
        JSON.stringify(patients)
    );

    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );
}

function updateDashboard(){

    document.getElementById(
        "doctorCount"
    ).textContent =
    doctors.length;

    document.getElementById(
        "patientCount"
    ).textContent =
    patients.length;

    document.getElementById(
        "appointmentCount"
    ).textContent =
    appointments.length;
}

function addDoctor(){

    const name =
    document.getElementById(
        "doctorName"
    ).value;

    const specialization =
    document.getElementById(
        "doctorSpecialization"
    ).value;

    if(!name || !specialization)
    return;

    doctors.push({
        id:Date.now(),
        name,
        specialization
    });

    renderDoctors();
}

function renderDoctors(){

    const list =
    document.getElementById(
        "doctorList"
    );

    const select =
    document.getElementById(
        "doctorSelect"
    );

    list.innerHTML = "";
    select.innerHTML = "";

    doctors.forEach(doctor=>{

        list.innerHTML += `
        <div class="item">
            ${doctor.name}
            (${doctor.specialization})
        </div>
        `;

        select.innerHTML += `
        <option value="${doctor.id}">
        ${doctor.name}
        </option>
        `;
    });

    saveData();
    updateDashboard();
}

function addPatient(){

    const name =
    document.getElementById(
        "patientName"
    ).value;

    const age =
    document.getElementById(
        "patientAge"
    ).value;

    if(!name || !age)
    return;

    patients.push({
        id:Date.now(),
        name,
        age
    });

    renderPatients();
}

function renderPatients(){

    const list =
    document.getElementById(
        "patientList"
    );

    const select =
    document.getElementById(
        "patientSelect"
    );

    list.innerHTML = "";
    select.innerHTML = "";

    patients.forEach(patient=>{

        list.innerHTML += `
        <div class="item">
        ${patient.name}
        (${patient.age})
        </div>
        `;

        select.innerHTML += `
        <option value="${patient.id}">
        ${patient.name}
        </option>
        `;
    });

    saveData();
    updateDashboard();
}

function bookAppointment(){

    const doctorId =
    document.getElementById(
        "doctorSelect"
    ).value;

    const patientId =
    document.getElementById(
        "patientSelect"
    ).value;

    const date =
    document.getElementById(
        "appointmentDate"
    ).value;

    const doctor =
    doctors.find(
        d=>d.id == doctorId
    );

    const patient =
    patients.find(
        p=>p.id == patientId
    );

    appointments.push({
        id:Date.now(),
        doctor:doctor.name,
        patient:patient.name,
        date
    });

    renderAppointments();
}

function renderAppointments(){

    const list =
    document.getElementById(
        "appointmentList"
    );

    list.innerHTML = "";

    appointments.forEach(a=>{

        list.innerHTML += `
        <div class="item">
        👨‍⚕️ ${a.doctor}
        |
        🧑 ${a.patient}
        |
        📅 ${a.date}
        </div>
        `;
    });

    saveData();
    updateDashboard();
}

renderDoctors();
renderPatients();
renderAppointments();