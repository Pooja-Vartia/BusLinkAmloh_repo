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
