const timeSlots = {
      morning: { start: "05:00", end: "11:59" },
      afternoon: { start: "12:00", end: "16:59" },
      evening: { start: "17:00", end: "20:59" },
      night: { start: "21:00", end: "04:59" }
    };

    // Create an array which holdes to the timming details into objects form
    const busData = [
  // Morning
  { time: "05:35", route: "Amloh to Patiala", busName: "PRTC", busNumber: "PB11AB1234", permit: "PR123456" },
  { time: "07:00", route: "Amloh to Ludhiana,Jalandhar via Bhadson", busName: "PRTC", busNumber: "PB11GH3456", permit: "PR112233" },
// Afternoon
  { time: "12:15", route: "Amloh to Khanna", busName: "Tiwana Ways", busNumber: "PB11MN5678", permit: "TW998877" },
  { time: "13:30", route: "Amloh to Ludhiana", busName: "PRTC", busNumber: "PB11OP9012", permit: "PR334455" },
  { time: "15:00", route: "Amloh to Patiala", busName: "PRTC", busNumber: "PB11QR3456", permit: "PR556677" },
  // Evening
  { time: "16:30", route: "Amloh to Khanna", busName: "Tiwana Ways", busNumber: "PB11ST7890", permit: "TW223344" },
  { time: "18:00", route: "Amloh to Ludhiana", busName: "PRTC", busNumber: "PB11UV1234", permit: "PR667788" },
  // Night
  { time: "19:30", route: "Amloh to Patiala", busName: "PRTC", busNumber: "PB11WX5678", permit: "PR889900" },
  { time: "21:00", route: "Amloh to Khanna", busName: "Tiwana Ways", busNumber: "PB11YZ9012", permit: "TW112233" },
  { time: "23:45", route: "Amloh to Ludhiana", busName: "PRTC", busNumber: "PB11AA3456", permit: "PR334455" },
  { time: "03:15", route: "Amloh to Patiala", busName: "PRTC", busNumber: "PB11BB7890", permit: "PR556677" }

];
// this function filter to the timming slots 
 function filterBySlot(slot) {
      const { start, end } = timeSlots[slot];
      const filtered = busData.filter(bus => {
        const time = bus.time;
        if (slot === "night") {
          return time >= start || time <= end;
        }
        return time >= start && time <= end;
      });

// Clear to the previous data from row and add to the next fresh filtered data into body of the table 
 const tbody = document.querySelector("#busTable tbody");
      tbody.innerHTML = "";
      filtered.forEach(bus => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td onclick="showBusDetails('${bus.time}')">${bus.time}</td>
          <td onclick="showRouteDetails('${bus.route}')">${bus.route}</td>
        `;
        tbody.appendChild(row);
      });

    }

    // Firstly this mehod catch to the selected time and then checked to the time with busData database array 
     function showBusDetails(time) {
      const bus = busData.find(b => b.time === time);
      document.getElementById("details").innerHTML = `
        <h3>Bus Details</h3>
        <p><strong>Time:</strong> ${bus.time}</p>
        <p><strong>Route:</strong> ${bus.route}</p>
        <p><strong>Bus Name:</strong> ${bus.busName}</p>
        <p><strong>Bus Number:</strong> ${bus.busNumber}</p>
        <p><strong>Permit Number:</strong> ${bus.permit}</p>
      `;
    }

    // this will filtered to the given route with busData database array and then result inject into table 
      function showRouteDetails(route) {
      const buses = busData.filter(b => b.route === route);
      let html = `<h3>Route Details: ${route}</h3>`;
      buses.forEach(bus => {
        html += `
          <p><strong>Time:</strong> ${bus.time}, <strong>Bus Name:</strong> ${bus.busName}, 
          <strong>Bus Number:</strong> ${bus.busNumber}, <strong>Permit:</strong> ${bus.permit}</p>
        `;
      });
      document.getElementById("details").innerHTML = html;
    }