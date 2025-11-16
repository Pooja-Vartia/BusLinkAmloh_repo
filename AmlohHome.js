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