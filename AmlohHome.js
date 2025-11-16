

function toggleDarkMode() {
// it will hold the darkmode and light mode effect into web screen for user better interection 
     document.body.classList.toggle('dark-mode');
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
        const routeMatch = this.route.includes(from) && this.route.includes(to);
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
      new Bus(1, "6.00", "PRTC", "PTA-LDH", "70/78/89", "27.07.2024", "PB11BT6255", "31.03.2024"),
      new Bus(2, "6.55", "HARTAL", "PTA-LDH", "276/89/97", "01.07.2024", "PB11BR1865", "13.02.2024"),
      new Bus(3, "7.00", "PRTC", "PTA-LDH", "246/89/97", "01.07.2024", "PB11BT6259", "13.02.2024"),
      new Bus(4, "7.10", "PRTC", "PTA-LDH", "226/89/97", "01.07.2024", "PB11BT6258", "13.02.2024"),
      new Bus(5, "7.20", "PRTC", "PTA-LDH", "236/89/97", "01.07.2024", "PB11BT6257", "13.02.2024"),
      new Bus(6, "7.25", "AMRITSAR SAHIB PVT.", "PTA-KHANNA", "567/64/C/92", "01.07.2024", "PB13T-9999", "31.03.2024"),
      new Bus(7, "7.45", "AZURA SAHIB PVT.", "PTA-KHANNA", "567/64/C/92", "01.07.2024", "PB13T-9999", "31.03.2024"),
      new Bus(9, "8.15", "D.J.D MOTOR", "PTA-KHANNA", "567/64/C/92", "01.07.2024", "PB13T-9999", "31.03.2024"),
      new Bus(11, "8.45", "AMRITSAR SAHIB PVT.", "PTA-KHANNA", "567/64/C/92", "01.07.2024", "PB13T-9999", "31.03.2024"),
      new Bus(25, "12.15", "D.J.D HIGHWAYS", "PTA-KHANNA", "567/64/C/92", "01.07.2024", "PB13T-9999", "31.03.2024"),
      new Bus(29, "1.15", "AMRITSAR SAHIB PVT.", "PTA-KHANNA", "567/64/C/92", "01.07.2024", "PB13T-9999", "31.03.2024"),
      new Bus(32, "2.00", "D.J.D HIGHWAYS", "PTA-KHANNA", "567/64/C/92", "01.07.2024", "PB13T-9999", "31.03.2024"),
    ];

    // Handles bus form submission by filtering matching buses based on route and time slot, then displays results.
      document.getElementById("busForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const from = document.getElementById("from").value.trim().toUpperCase();
      const to = document.getElementById("destination").value.trim().toUpperCase();
      const timeSlot = document.getElementById("time").value;

      const results = amlohBuses.filter(bus => bus.matches(from, to, timeSlot));
      showResults(results);
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

}