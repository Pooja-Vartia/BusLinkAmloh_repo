
  AOS.init();
function toggleDarkMode() {
  // it will hold the darkmode and light mode effect into web screen for user better interection 
  document.body.classList.toggle('dark-mode');
}
class Bus {
      constructor(srNo, depTime, permitHolder, route, permitNo, permitValidity, orderNo, fitnessValidity) {
        this.srNo = srNo;
        this.depTime = depTime;
        this.permitHolder = permitHolder;
        this.route = route;
        this.permitNo = permitNo;
        this.permitValidity = permitValidity;
        this.orderNo = orderNo;
        this.fitnessValidity = fitnessValidity;
      }

      matches(from, to, timeSlot) {
        const routeMatch = this.route.toUpperCase().includes(from.toUpperCase())
         && this.route.toUpperCase().includes(to.toUpperCase());
        const timeMatch = checkTimeSlot(this.depTime, timeSlot);
        return routeMatch && timeMatch;
      }
    }
// Utility function to check if a departure time falls within a given time slot and this function alreadyy call in maches method of the bus class
     function checkTimeSlot(depTime, slot) {
      const time = parseFloat(depTime);
      if (slot === "morning") return time >= 5 && time < 12;
      if (slot === "afternoon") return time >= 12 && time < 17;
      if (slot === "evening") return time >= 17 && time < 20;
      if (slot === "night") return time >= 20 || time < 5;
      return true;
    }

    // this array named amlohBuses will containe the data about buses into each new object 
    const amlohBuses = [
      new Bus(1, "6.00", "PRTC", "PATIALA-LUDHIANA", "70/78/89", "27.07.2024", "PB11BT6255", "31.03.2024"),
      new Bus(2, "6.55", "HARTAL", "PATIALA-LUDHIANA", "276/89/97", "01.07.2024", "PB11BR1865", "13.02.2024"),
      new Bus(3, "7.00", "PRTC", "PATIALA-LUDHIANA", "246/89/97", "01.07.2024", "PB11BT6259", "13.02.2024"),
      new Bus(4, "7.10", "PRTC", "PATIALA-LUDHIANA", "226/89/97", "01.07.2024", "PB11BT6258", "13.02.2024"),
      new Bus(5, "7.20", "PRTC", "PATIALA-LUDHIANA", "236/89/97", "01.07.2024", "PB11BT6257", "13.02.2024"),
      new Bus(6, "7.25", "AMRITSAR SAHIB PVT.", "PATIALA-KHANNA", "567/64/C/92", "01.07.2024", "PB13T-9999", "31.03.2024"),
      new Bus(7, "7.45", "AZURA SAHIB PVT.", "PATIALA-KHANNA", "567/64/C/92", "01.07.2024", "PB13T-9999", "31.03.2024"),
      new Bus(8, "8.13", "TIWANA WAYS", "PATIALA-KHANNA", "567-68/CP/22", "16.03.2026", "PB11CB7897", "25.05.2024"), 
      new Bus(9, "8.15", "D.J.D MOTOR", "PATIALA-KHANNA", "567/64/C/92", "01.07.2024", "PB13T-9999", "31.03.2024"),
      new Bus(10, "8.40", "PRTC", "PATIALA-MALLEWAL", "20/R/72", "27.04.2024", "PB11BU4261", "16.10.2024"),
      new Bus(11, "8.45", "AMRITSAR SAHIB PVT.", "PATIALA-KHANNA", "567/64/C/92", "01.07.2024", "PB13T-9999", "31.03.2024"),
      new Bus(12, "9.05", "SUKHWINDERA", "PATIALA-DORAHA", "122/73-4", "01.02.2026", "PB11FF0587", "24.01.2024"),
      new Bus(13, "9.20", "PRTC", "PATIALA-RAHON", "16/R/S/22", "08.06.2026", "PB11CZ5997", "25.05.2024"),
      new Bus(14, "9.30", "TIWANA WAYS", "PATIALA-KHANNA", "567-68/CP/22", "16.03.2026", "PB11CB7897", "25.05.2024"),
      new Bus(15, "9.40", "TIWANA WAYS", "PATIALA-LUDHIANA", "110/R/88", "06.11.2026", "PB11BK7897", "25.05.2024"),
      new Bus(16, "9.57", "PRTC", "PATIALA-KHANNA", "533/R/73", "08.01.2026", "PB11BR7459", "24.01.2024"), 
      new Bus(17, "10.07", "LOK SEWAK", "PATIALA-DORAHA", "30/RK/71", "23.02.2026", "PB23MN8615", "18.12.2024"),
      new Bus(18, "10.17", "LOK SEWAK", "PATIALA-LUDHIANA", "31/RK/71", "23.02.2026", "PB23MN7215", "25.05.2024"),
      new Bus(19, "10.27", "TIWANA WAYS", "PATIALA-LUDHIANA", "160/R/88", "06.11.2026", "PB11CW5187", "25.05.2024"), 
      new Bus(20, "10.37", "TIWANA WAYS", "PATIALA-KHANNA", "569/CP/22", "16.03.2026", "PB11CB7897", "25.05.2024"),
      new Bus(21, "10.47", "TIWANA WAYS", "PATIALA-LUDHIANA", "567-68/CP/22", "16.03.2026", "PB11CB7897", "25.05.2024"),
      new Bus(25, "12.15", "D.J.D HIGHWAYS", "PATIALA-KHANNA", "567/64/C/92", "01.07.2024", "PB13T-9999", "31.03.2024"),
      new Bus(29, "1.15", "AMRITSAR SAHIB PVT.", "PATIALA-KHANNA", "567/64/C/92", "01.07.2024", "PB13T-9999", "31.03.2024"),
      new Bus(32, "2.00", "D.J.D HIGHWAYS", "PATIALA-KHANNA", "567/64/C/92", "01.07.2024", "PB13T-9999", "31.03.2024"),
    ];

    // Handles bus form submission by filtering matching buses based on route and time slot, then displays results.
      document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("busForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const from = document.getElementById("from").value.trim().toUpperCase();
      const to = document.getElementById("destination").value.trim().toUpperCase();
      const timeSlot = document.getElementById("time").value;

      const results = amlohBuses.filter(bus => bus.matches(from, to, timeSlot));
      showResults(results);
    });
  }
});

// Displays filtered bus results in the HTML by dynamically creating and inserting formatted permit and route details.
// Shows a fallback message if no matching buses are found for the selected criteria

    function showResults(buses) {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";

      if (buses.length === 0) {
        resultsDiv.innerHTML = "<p>No buses found for selected criteria.</p>";
        return;
      }

      buses.forEach(bus => {
        const item = document.createElement("div");
        item.innerHTML = `
          <p><strong>${bus.permitHolder}</strong> — ${bus.route} at ${bus.depTime}<br>
          Permit No: ${bus.permitNo}, Valid till: ${bus.permitValidity}</p>
          <hr />
        `;
        resultsDiv.appendChild(item);
      });
    }

    const form = document.getElementById("feedbackForm");
  const feedbackText = document.getElementById("feedbackText");
  const feedbackList = document.querySelector("#feedbackList ul");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload

    // Get user input
    const text = feedbackText.value.trim();

    if (text) {
      // Create a new list item
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = text;

      // Append to feedback list
      feedbackList.appendChild(li);

      // Clear textarea
      feedbackText.value = "";

      // Optional: show a thank-you message
      alert("Thank you for your feedback!");
    }
  });
