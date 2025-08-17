let fetchdata = async () => {
    let url = 'http://localhost:3000/appointment';
    let res = await fetch(url);
    let data = await res.json();

    const tbody = document.querySelector('#hii tbody');
    tbody.innerHTML = ''; 

    data.forEach((e) => {
        tbody.innerHTML += `
            <tr>
                <td>${e.name}</td>
                <td>${e.age}</td>
                <td>${e.contact}</td>
                <td>${e.gender}</td>
                <td>${e.time}</td>
                <td>${e.symptoms}</td>
                <td>${e.fee}</td>
                
                <td style="color:red;cursor:pointer;" onclick="delet('${e.id}')">Delete</td>
                <td style="color:blue;cursor:pointer;" onclick="formopen('${e.id}')">Edit</td>
            </tr>
        `;
    });
};

let delet = async (id) => {
   
    let url = `http://localhost:3000/appointment/${id}`;
    await fetch(url, { method: 'DELETE' });
    await fetchdata();
};

let book = async () => {
    
    let Name = document.querySelector("#name").value.trim();
    let Ages = document.querySelector("#age").value.trim();
    let Contact = document.querySelector("#contact").value.trim();
    let Gender = document.querySelector("#gender").value.trim();
    let Time = document.querySelector("#time").value.trim();
    let symptoms = document.querySelector("#symptoms").value.trim();
    console.log(Name)
    
    let url = 'http://localhost:3000/appointment';

    await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: Name,
            age: Ages,
            contact: Contact,
            gender: Gender,
            time: Time,
            symptoms: symptoms,
            fee:200
        })
    });

    location.href = 'CRUD.html';
    return false;
};


let formopen = async (id) => {
    let url = `http://localhost:3000/appointment/${id}`;
    let res = await fetch(url);
    let data = await res.json();

    document.querySelector('#formshow').innerHTML = `
    <div class="form-container">
      <h2>Edit Appointment</h2>
     <form onsubmit="return finalup(event, '${data.id}')">

        <label>Name</label>
        <input type="text" id="upname" value="${data.name}" required>

        <label>Age</label>
        <input type="number" id="upage" value="${data.age}" required>

        <label>Gender</label>
        <select id="upgender" required>
          <option value="">-- Select Gender --</option>
          <option value="Male" ${data.gender === 'Male' ? 'selected' : ''}>Male</option>
          <option value="Female" ${data.gender === 'Female' ? 'selected' : ''}>Female</option>
          <option value="Other" ${data.gender === 'Other' ? 'selected' : ''}>Other</option>
        </select>

        <label>Contact</label>
        <input type="tel" id="upcontact" value="${data.contact}" required>

        <label>Preferred Time</label>
        <input type="time" id="uptime" value="${data.time}" required>

        <label>Symptoms</label>
        <textarea id="upsymptoms" rows="3" required>${data.symptoms}</textarea>

        <button type="submit">Update</button>
      </form>
    </div>
    `;
};


let finalup = async (event, id) => {
    event.preventDefault(); // prevent form refresh

    let upName = document.querySelector("#upname").value.trim();
    let upage = document.querySelector("#upage").value.trim();
    let upcontact = document.querySelector("#upcontact").value.trim();
    let upgender = document.querySelector("#upgender").value.trim();
    let uptime = document.querySelector("#uptime").value.trim();
    let upsymptoms = document.querySelector("#upsymptoms").value.trim();

    let url = `http://localhost:3000/appointment/${id}`;
    await fetch(url, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: upName,
            age: upage,
            contact: upcontact,
            gender: upgender,
            time: uptime,
            symptoms: upsymptoms
        })
    });

    await fetchdata();
    document.querySelector('#formshow').innerHTML = '';
    return false;
};
