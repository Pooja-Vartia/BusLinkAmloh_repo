
  AOS.init();
function toggleDarkMode() {
  // it will hold the darkmode and light mode effect into web screen for user better interaction 
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

    // this array named amLUDHIANABuses will containe the data about buses into each new object 
    const amLUDHIANABuses = [
new Bus(1,"05.45 at KHANNA", " PRTC"," KHANNA-SIRSA", "285/Reg/97"," 03.06.2027"," PB11BU7488"," 08.12.23"),
new Bus(2, "5.55"," KHATRA","PATIALA-LUDHIANA "," 270/R/89"," 09.01.27","PB11BR2655","24.01.2024"),
new Bus(3,"06.00 at GOBINDGARH", "PRTC","  KHANNA-SIRSA", "285/ReG/97"," 03.06.2027"," PB11BU7488"," 08.12.23"),
new Bus(4  ,"06.23 at  AMLOH" , "PRTC","   KHANNA-SIRSA", "285/ReG/97"," 03.06.2027"," PB11BU7488"," 08.12.23"),
new Bus(5  ,"06.25 at KHANNA" , " PRTC P","  KHANNA-NABHA", "320/R/89"," 18.01.2027"," PBI1BF5850"," 16.10.23"),
new Bus(6  ,"06.37 at GOBINDGARH", " PRTC P","  KHANNA-NABHA", "320/R/89"," 18.01.2027"," PBI1BF5850"," 16.10.23"),
new Bus(7  ,"06.40 at KHANNA"," DARA SINGH"," KHANNA-SANGROOR", "850/R ","10.04.2027"," PB11BN4486"," 20.03.24"),
new Bus(8  ,"06.55 at GOBINDGARH", "  DARA SINGH"," KHANNA-SANGROOR", "850/R"," 10.04.2027"," PB11BN4486"," 20.03.24"),
new Bus(9  ,"06.57 at AMLOH", " PRTC P "," KHANNA-NABHA", "320/R/89"," 18.01.2027"," PBI1BF5850"," 16.10.23"),
new Bus(10  ,"07.00 at KHANNA", " BABA DITTU JI"," KHANNA-SANGROOR"," 550-71/CP/22 "," 29.10.2025"," PB11BU3186 & 11BU4486"," 14.03.2024 "),
new Bus(11 , "7.00","PRTC","   PATIALA-JALANDHAR ","  296-299/R/97","  03.07.27","PB11CB9529","13.02.2024"),
new Bus(12  ,"07.05 at GOBINDGARH", "  PATIALA BUS"," MOHALI-BNL", "109/R/95"," 29.10.25","  PB11CR9825"," 29.03.23"),
new Bus(13  ,"07.15 at AMLOH", "  DARA SINGH"," KHANNA-SANGROOR", "850/R "," 10.04.2027"," PB11BN4486"," 20.03.24"),
new Bus(14 , "  7.17","PRTC","    PATIALA-LUDHIANA","  247-48/R/96 "," ","   13.12.26   ","PB11887462","05.07.2024"),
new Bus(15  ,"07.20 at KHANNA", "  PRTC P"," KHANNA-NABHA", "235/R/71 ", "05.05.2027"," PB11BF7382"," 12.10.23"),
new Bus(16  ,"07.20 at GOBINDGARH", "  BABA DITTU ","  KHANNA-SANGROOR"," 550-71/CP/22","  29.10.2025"," PB11BU3186 & 11BU4486"," 14.03.2024 "),
new Bus(17  ,"07.25 at AMLOH", "   PATIALA BUS","  MOHALI-BNL"," 109/R/95"," 29.10.25","  PB11CR9825"," 29.03.23"),
new Bus(18  ,"07:26 at  BHADSON", "DARASINGH"," CHAHAL-NABHA", "395/R/99","  22.06.2024"," PB11AH4486"," 15.01.24"),
new Bus(19  ,"07.28 at KHANNA", "PRTC P ","  SAMRALA-NABHA", "201/R/96"," 03.09.26","  PB11BR7466 ","02.07.2024 "),
new Bus(20 , "  7.28","  AMRIT","     PATIALA-KPT","    289/R/5/97      24.06.27   ","P810FF9597   ","18.07.2024"),
new Bus( 21 ,"07.35 at AMLOH", " BABA DITTU "," KHANNA-SANGROOR", " 550-71/CP/22 "," 29.10.2025"," PB11BU3186 & 11BU4486"," 14.03.2024 "),
new Bus(22 , "  7.39"," HAZUR SAHAB TPT ","   PATIALA LUDHIANA ","   137/8/88","    05.12.26    ","PB116Y1325","16.02.2024"),
new Bus( 23 ,"07.42  at GOBINDGARH", "PRTC P "," SAMRALA-NABHA",   "201/R/96","   03.09.26","   PB11BR7466","  02.07.2024"),
new Bus(24  ,"07.43 at KHANNA", "  BABA DITTU"," KHANNA-NABHA","  1132/R/22","  23.02.27"," PB113V8631"," 22.01.2014"),
new Bus(25  ,"07.45 at AMLOH", "  PRTC P ","  KHANNA-NABHA",  "235/R/71"," 05.05.2027"," PB11BF7382"," 12.10.23"),
new Bus(26 , "  7.51"," NEW PATIALA"," PATIALA-JALANDHAR","   288/8/97","    23.06.27   ","P823M9189 ","14.12.2023"),
new Bus(27, "07.55 at KHANNA", " BABA DITTU ","KHANNA-NABHA",   "1132/R/22","  23.02.27"," PB113V8631"," 22.01.2014"),
new Bus( 28  ,"07.55 at GOBINDGARH", "  LOK SEWAK","  NABHA-SAMRALA ", " 443/461"," 22.02.2026"," PB23J9415"," 09.02.2024"),
new Bus(29 , " 8.02","   B.D.JI MOTOR","   PATIALA-KHANNA ","  637/8/03","   20.10.23   ","P823M9745","24.01.2024"),
new Bus(  30 ,"08.05 at AMLOH", "  PRTC P"," SAMRALA-NABHA",   "201/R/96","   03.09.26","   PB11BR7466","  02.07.2024"),
new Bus( 31  ,"08.07 at KHANNA", " G.T.B HIGH"," SAMRALA-NABHA "," 449/R "," 01.02.2026","PB04AB7978 ","03.05.2023"),
new Bus( 32  ,"08.10 at GOBINDGARH"," PRTC P"," SAMRALA-NABHA","201/R/96"," 03.09.26"," PB11BR7466"," 02.07.2024"),
new Bus(33 , " 8.13","    TIWANA WAYS ","  PATIALA-KHANNA","    567-68/CP/22"," 16.03.26 "  ,"P11C87797","25.05.2024","P1C87597", "25.05.2024"),
new Bus( 34  ,"08.15 at AMLOH"," BABA DITTU JI ","KHANNA-NABHA","  1132/R/22","  23.02.27"," PB113V8631"," 22.01.2014"),
new Bus( 35  ,"08.22 at  GOBINDGARH"," PRTC P"," KHANNA-NABHA","  1057/R/22","  01.03.2027"," PB11CD0220"," 15.02.2025"),
new Bus( 36  ,"08.22 at KHANNA"," G.T.B HIGH"," SAMRALA-NABHA","  449/R","  01.02.2026"," PB04AB7978"," 03.05.2023"),
new Bus(37 , " 8.25","   TIWANA WAYS ","   PATIALA-LUDHIANA ","  567-68/CP/22 ","16.03.20", " P11C87797","25.05.2024", "PB1C07897","25.05.2024"),
new Bus( 39  ,"08.30 at AMLOH"," PRTC P"," SAMRALA-NABHA","   201/R/96","   03.09.26","   PB11BR7466","  02.07.2024"),
new Bus( 40  ,"08.35 at KHANNA"," BABA DITTU JI"," BUDHLADA-LUDHIANA","  399-400/CP/22","  23.02.26"," PB11BY7986"," & PB11AH5886 14.03.24 "),
new Bus( 41  ,"08.37 at GOBINDGARH","  PRTC P"," KHANNA-NABHA","  1057/R/22","  01.03.2027"," PB11CD0220"," 15.02.2025"),
new Bus(42, "  8.40","  PRTC","   PATIALA-MALLEWAL 20/8/72 ","27.04.24  ","PB11BU4261 ","16.10.2024"),
new Bus( 43  ,"08.42 at AMLOH"," LOK SEWAK ","NABHA-KURALI"," 161/R/88"," 17.12.2026","  PB23J5815","   09.02.2024"),
new Bus( 44  ,"08.42 at AMLOH"," G.T.B HIGH ","SAMRALA-NABHA","  449/R "," 01.02.2026"," PB04AB7978"," 03.05.2023"),
new Bus( 45  ,"08.50 at GOBINDGRAH","  BABA DITTU JI"," BUDHLADA-LUDHIANA","  399-400/CP/22 "," 23.02.26"," PB11BY7986 & PB11AH5886" ,"14.03.24 "),
new Bus( 46  ,"08.55 at KHANNA","  BABA DITTU JI"," KHANNA-SANGROOR","  570-71/CP/22","  04.09.2025","  PB11BU3186 & PB11AH5886"  ,"25.05.2023"),
new Bus(47, "  8.55","  PRTC","    PATIALA-JALANDHAR","   256-299/R/","97   ","03.07.27"),
new Bus( 48  ,"08.57 at AMLOH"," PRTC P"," KHANNA-NABHA","  1057/R/22","  01.03.2027"," PB11CD0220"," 15.02.2025"),
new Bus(49, " 9.05","  SUKHWINDERA","   PATIALA-DORAHA","   122/73-74","   01.02.26   ","P8118F0587 ","24.01.2024"),
new Bus(  50 ,"09.10 at GOBINDGARH"," BABA DITTU JI"," KHANNA-NAGHA"," 570-71/CP/22 "," 04.09.2025","  PB11BU3186"," 11BU4486 14.03.2024"),
new Bus( 51  ,"09.10 at AMLOH"," BABA DITTU JI"," KHANNA-SANGROOR","  570-71/CP/22","  04.09.2025","  PB11BU3186 & PB11AH5886","  25.05.2023"),
new Bus( 52  ,"09.10 at AMLOH","  BABA DITTU JI"," BUDHLADA-LUDHIANA","  399-400/CP/22","  23.02.26"," PB11BY7986 & PB11AH5886 ","14.03.24 "),
new Bus(53, "  9.20"," PRTC","   PATIALA-RAHON","  16/R/S/22","    08.03.27   ","PB11C25997 ","01.02.2024"),
new Bus(  54 ,"09.25 at KHANNA","GOBINDGARH BUS","NABHA-ROPAR"," 462 22.02.2026","PB23J8245","09.03.23 "),
new Bus(  55 ,"09.30 at GOBINDGARH"," BABA DITTU JI"," KHANNA-SANGROOR","  570-71/CP/22","  04.09.2025","  PB11BU3186 & PB11AH5886","  25.05.2023"),
new Bus(  56 ,"09.30 at AMLOH","  BABA DITTU JI"," KHANNA-NAGHA"," 570-71/CP/22","  04.09.2025","  PB11BU3186"," 11BU4486 14.03.2024"),
new Bus(57, "  9.30"," TIWANA WAYS","   PATIALA-KHANNA","   567-68/CP/22","   ","16",".03.26"," PB11C87797","25.05.2024","PB1C87897 ","25.05.2024"),
new Bus(58, "  9.40"," TIWANA WAYS","   PATIALA-LUDHIANA ","   110/R/A","   06.11.26   ","PB1187897 ","25.05.2024"),
new Bus( 59  ,"09.40 at GOBINDGARH","  NABHA-ROPAR"," 462 22.02.2026"," PB23J8245"," 09.03.23 "),
new Bus(  60 ,"09.50 at AMLOH"," BABA DITTU JI"," KHANNA-NAGHA"," 570-71/CP/22","  04.09.2025","  PB11BU3186"," 11BU4486 14.03.2024"),
new Bus(  61 ,"09.55 at GOBINDGARH"," PRTC C ","CHANDIGARH-NABHA"," 170/R/70"," 01.09.2026"," PB10027919"," 21.08.23"),
new Bus(62, "  9.57"," PRTC","    PATIALA-KHANNA ","   533/8/73","    08.01.26   ","PB118R7459  ","06.07.2024"),

new Bus(63   ,"10.00 at AMLOH"," NABHA-ROPAR"," 462 ","22.02.2026","PB23J8245"," 09.03.23"), 
new Bus(  64 ,"10.00 at BHADSON","  DARA SINGH "," CHAHAL-NABHA"," 395/R/99 ","22.06.2024"," PB11AHA4486","  15.01.2024"),
new Bus(  65 ,"10.05 at KHANNA","  PRTC P"," KHANNA-NABHA"," 234/R/71 ","05.05.2027"," PB118B5848 "," 02.07.2023"),
new Bus(66, "  10.07","  LOK SEWAK ","  PATIALA DORAHA ","   30/RK/71","   23.02.26    ","P23M7715","24.01.2024"),
new Bus( 67  ,"10.15 at AMLOH","PRTC C"," CHANDIGARH-NABHA"," 170/R/70"," 01.09.2026","PB10027919","21.08.23"),
new Bus(68, " 10.17","  LOK SEWAK","   PATIALA-LUDHIANA ","31/RK/71","   23.02.26  ","P323M8615  ","18.12.2024"),
new Bus( 69  ,"10.20 at GOBINDGARH","PRTC P"," KHANNA-NABHA"," 234/R/71"," 05.05.2027","PB118B5848"," 02.07.2023"),
new Bus(70, " 10.27", "LOK SEWAK ","  PATIALA-LUDHIANA","   160/R/88","17.12.26","  P823M7215"," 120.12.2023"),
new Bus(71, "10.37", "  TIWANA WAYS"," PATIALA-KHANNA","   569/CP/22"," 16.03.26"," P811CWS187","25.05.2024"),
new Bus(72, "10.35 at KHANNA"," CHAWLA."," SAMRALA-B.GARH"," 469/R/89"," 01.02.2026"," PB13AB7771"," 27.07.24"),
new Bus(73, "10.40 at AMLOH"," PRTC P"," KHANNA-NABHA ","234/R/71"," 05.05.2027","PB118B5848"," 02.07.2023"),
new Bus(74 , "10.47", "   TIWANA WAYS"," PATIALA-LUDHIANA","   567-68/CP/22","   16.03.26","  P811C87797", "PB11C87897"," 25.05.2024","25.05.2024"),
new Bus("10.50 at GOBINDGARH","CHAWLA."," SAMRALA-B.GARH ","469/R/89"," 01.02.2026"," PB13AB7771"," 27.07.24"),






new Bus("11.00 at KHANNA","AMRIT."," NABHA-SAMRALA."," 228/R/96"," 02.10.2026"," PB23M7709"," 10.03.24"),
new Bus( "11.02", " B.D.JI HIGHWAYS M"," PATIALA KHANNA"," 295/MBR/95","09.07.25","P8118Y8186","27.09.2023"),
new Bus("11.10 at KHANNA"," AMRIT."," NABHA-M.VARA"," 447","  09.03.2026","PB23C8711"," 08.03.24"),
new Bus("11.10 at AMLOH","CHAWLA."," SAMRALA-B.GARH ","469/R/89"," 01.02.2026"," PB13AB7771"," 27.07.24"),
new Bus("11.15 at GOBINDGARH","AMRIT."," NABHA-SAMRALA."," 228/R/96"," 02.10.2026"," PB23M7709"," 10.03.24"),
new Bus("11.20 at KHANNA","AMLOH HIGH"," M.VARA-NABHA."," 450/RK/6"," 10.01.2026"," PB10AV6157","   24.01.2"),
new Bus("11.25 at GOBINDGARH"," AMRIT."," NABHA-M.VARA 447","  09.03.2026"," PB23C8711. 08","03","24"),
new Bus("11.30 at KHANNA","AMLOH HIGH."," M.VARA-NABHA."," 468/R"," 11.01.2026"," PB10CC0697"," 24.01.24"),
new Bus(23, "11.32", "   PRTC"," PATIALA-LUDHIANA","    129-30/R/89 ","   01.12.26","   PB11CD0202","01.02.2025"),
new Bus("11.35 at GOBINDGARH","AMLOH HIGH"," M.VARA-NABHA."," 450/RK/6"," 10.01.2026"," PB10AV6157","   24.01.2"),
new Bus("11.35 at AMLOH","AMRIT."," NABHA-SAMRALA."," 228/R/96"," 02.10.2026"," PB23M7709"," 10.03.24"),
new Bus("11.40 "," SHIV ","SNG-KHANNA "," 21/R/SNG/22"," 16.06.2027 "," PB11CU9695"," 01.03.24"),
new Bus("11.45 at AMLOH","AMLOH HIGH."," M.VARA-NABHA."," 468/R"," 11.01.2026"," PB10CC0697"," 24.01.24"),
new Bus("11.45 at GOBINDGARH","AMRIT."," NABHA-M.VARA"," 447","  09.03.2026","PB23C8711"," 08.03.24"),
new Bus("11.55 at AMLOH","AMLOH HIGH"," M.VARA-NABHA."," 450/RK/6"," 10.01.2026"," PB10AV6157","   24.01.2"),
new Bus ("11.55","SHIV","SNG-KHANNA"," 21/R/SNG/22"," 16.06.2027"," PB11CU9695","01.03.24"),

new Bus(24, "12.02", "  PATC","PEHWA-KHANNA","  454/8/2000","   13.03.25"," P8118F5853"," 02.07.2023 "),
new Bus ("12.05"," PRTC C","  CHD-NABHA"," 179/R/70 ","  19.10.2026"," PB65AA7949","07.05.24"),
new Bus("12.05 at AMLOH","AMLOH HIGH."," M.VARA-NABHA."," 468/R"," 11.01.2026"," PB10CC0697"," 24.01.24"),
new Bus ("12.15"," SHIV","SNG-KHANNA"," 21/R/SNG/22"," 16.06.2027"," PB11CU9695","01.03.24"),
new Bus ("12.10"," PRTC P"," NABHA-KHANNA","  235/R/71","  05.05.2027"," PB11BF7382","12.10.23"),
new Bus ("12.20"," PRTC C"," CHD-NABHA","  180/R/70 ","  19.10.2026"," PB65AA7948","06.06.24"),
new Bus ("12.25"," PRTC C","  CHD-NABHA"," 179/R/70 ","  19.10.2026"," PB65AA7949","07.05.24"),
new Bus ("12.30"," PRTC P"," NABHA-KHANNA","  235/R/71 "," 05.05.2027"," PB11BF7382","12.10.23"),
new Bus(25, "12.32", "  PRTC"," PATIALA-JALANDHAR","   296-299/8/97","  03.07.27","   PR11CF9205","  18.01.2025"),
new Bus ("12.35","  PRTC P"," N.SHAHAR-NABHA"," 1055/R/22","   21.02.2027"," PB11BR7465","02.07.24"),
new Bus ("12.40"," PRTC C"," CHD-NABHA","  180/R/70  "," 19.10.2026"," PB65AA7948","06.06.24"),
new Bus ("12.50","  PRTC P"," NABHA-KHANNA","  235/R/71 "," 05.05.2027"," PB11BF7382","12.10.23"),
new Bus ("12.50","  PRTC P"," N.SHAHAR-NABHA"," 1055/R/22","   21.02.2027"," PB11BR7465","02.07.24"),
new Bus ("12.50","DARA SINGH","KHANNA-SNG"," 850/R "," 10.04.2027"," PB11BN4486","28.03.24"),

new Bus(26, "12.52", "  PRTC"," PATIALA-MALLEWAL","   481-452/R/72","  20.06.25","  P811C89546","  10.02.2024"),



new Bus ("13.08"," DARA SINGH","KHANNA-SNG"," 850/R "," 10.04.2027"," PB11BN4486","28.03.24"),
new Bus ("13.10","  PRTC P"," N.SHAHAR-NABHA"," 1055/R/22","   21.02.2027"," PB11BR7465","02.07.24"),
new Bus(27, "13.12", "  PRTC"," PATIALA LUDHIANA","   247-48/8/96","  13.12.26","  PB11BR7462","  06.07.2024"),
new Bus ("13.25"," PRTC P"," M.VARA-NABHA"," 1056/R/22  "," 21.02.2027"," PB11CB9533","10.02.24"),
new Bus("13.25","PRTC P"," NABHA-KHANNA"," 320/R/89","  18.01.2027"," PB11BF5850 " ,"16.10.23"),
new Bus ("13.28"," DARA SINGH","KHANNA-SNG"," 850/R "," 10.04.2027"," PB11BN4486","28.03.24"),
new Bus(28, "13.27", "KHATRA"," PATIALA-LUDHIANA","   270/R/89","  09.01.27","   P811882655"," 24.01.2024"),
new Bus ("13.38","  PRTC C"," CHD-NABHA"," 178/R/70","  19.10.2026"," PB65AA7945"," 08.05.24"),
new Bus ("13.40"," DARA SINGH"," CHAHAL-NABHA"," 395/R/99",". 22.06","2024","PB11AH4486  15.01.24"),
new Bus(29, "13.42", "HAZUR SAHAB TPT","  PATIALA-LUDHIANA","    137/R/BS","   05.12.26","   P8115Y1325"," 16.02.2024"),
new Bus ("13.45","  PRTC P"," M.VARA-NABHA"," 1056/R/22 ","  21.02.2027"," PB11CB9533","10.02.24"),
new Bus("13.48","PRTC P"," NABHA-KHANNA"," 320/R/89","  18.01.2027"," PB11BF5850 " ,"16.10.23"),
new Bus("13.50","CHAWLA"," KHANNA-BHADSON","10/34A "," 18.09.2026"," PB13A50071 ", "01.01.24"),
new Bus(30, "13.57", "  B.DJI MOTOR","PATIALA-KHANNA","  637/R/03","  20.10.23","   PB23M9745"," 24.01.24"),
new Bus("13.58","G.T.B. HIGH"," NABHA-SAMRALA"," 453/R","  01.02.2026"," PB08BV9531 ", "02.03.23"),
new Bus ("13.58","  PRTC C"," CHD-NABHA"," 178/R/70","  19.10.2026"," PB65AA7945"," 08.05.24"),




new Bus("14.05"," DITTU JI"," SANGRUR-KHANNA","  570-571/CP/22","04.09.2025","PB11BU3186 & 11BU4486 ","14.03.24 "),
new Bus("14.08","PRTC P"," NABHA-KHANNA"," 320/R/89","  18.01.2027"," PB11BF5850 ", "16.10.23"),
new Bus("14.08","CHAWLA"," KHANNA-BHADSON","10/34A "," 18.09.2026"," PB13A50071 ", "01.01.24"),
new Bus(31, "14.12", "   B.D. HIGHWAYS M "," PATIALA-KHANNA","  295/MBR/95"," 09.07.25","    PB11BY8186","27.09.2023"),
new Bus("14.18","G.T.B. HIGH"," NABHA-SAMRALA"," 453/R "," 01.02.2026"," PB08BV9531 " ,"02.03.23"),
new Bus("14.18","LOK SEWAK ","NABHA-SAMRALA"," 443/461","  22.02.2026"," PB23M7715 ", "24.01.2024"),
new Bus("14.22"," DITTU JI ","SANGRUR-KHANNA","  570-571/CP/22 "," 04.09.2025","PB11BU3186 & 11BU4486 ","14.03","24"), 
new Bus("14.28","CHAWLA"," KHANNA-BHADSON","10/34A "," 18.09.2026"," PB13A50071 ", "01.01.24"),
new Bus(32, " 14.30", "  PRTC","     PATIALA-KHANNA","   533/R73","  08.01.26"," PB1187459"," 06.07.2024"),
new Bus("14.33","LOK SEWAK ","NABHA-SAMRALA"," 443/461 "," 22.02.2026"," PB23M7715 ", "24.01.2024"),
new Bus("13.38","G.T.B. HIGH"," NABHA-SAMRALA"," 453/R "," 01.02.2026"," PB08BV9531 ", "02.03.23"),
new Bus("14.42","BABA DITTU JI"," SANGRUR-KHANNA","  570-571/CP/22","  04.09.2025","PB11BU3186 & 11BU4486 "),
new Bus("14.43","CHAWLA  ","CHAHAL-MKT"," 287","  01.02.2026"," PB13T4471 " ,"21.11.23"),
new Bus("14.45","PTC P","NABHA-SAMRALA"," 201/R/96","  03.09.2026"," PB11BR7466 " ,"02.07.2024"),
new Bus("14.48","LOK SEWAK ","PRTC BNL BNL-MOHALI","   01/R/22","  17.01.2027","PB19H9818", "03.01.2024"),
new Bus("14.53","LOK SEWAK ","NABHA-SAMRALA"," 443/461","  22.02.2026"," PB23M7715 ", "24.01.2024"),
new Bus(33, " 14.45", "SUKHWINDERA"," PATIALA-DORAHA","     122/73-74","   01.02.26","  ","PB1180587 ","24.01.2024"),


 new Bus("15.00","PTC P","NABHA-SAMRALA","201/R/96","03.09.2026","PB11BR7466","  02.07.2024"),
 new Bus("15.00","BABA DITTU JI","DHURI-LDH","397-98/P/22","02.02.2026","PB11CT7986 & PB11AH5686"," 17.03.2024 & 25.05.23 "),
new Bus("15.08","PRTC BNL"," BNL-MOHALI   01/R/22 "," 17.01.2027","PB19H9818 ", "03.01.2024"),
new Bus(34,"15.10"," PRTC"," PATIALA-JALANDHAR"," 296-299/R/97","03.07.27", "PB11CF9792 ","29.12.2023"),
new Bus("15.15","BABA DITTU JI","DHURI-LDH","397-98/P/22","02.02.2026","PB11CT7986 & PB11AH5686"," 17.03.2024 & 25.05.23 "),
new Bus("15.20"," PTC P","NABHA-SAMRALA","201/R/96","03.09.2026","PB11BR7466","  02.07.2024"),
new Bus(35," 15.20"," TIWANA WAYS"," PATIALA-LUDHIANA", "569/CP/22"," 16.03.26", "PB11CWS187 ","25.05.2024"),
new Bus("15.25","BABA DITTU JI ","ABHA-KANNA","132/R/22","23.02.2027","PB13V8631","  22.01.2024"),
new Bus("15.28","LOK-SEWAK","SNG-NANGAL","221-222 ","0.02.26","B11CV1215","  27.02.2024"),
new Bus(36," 15.32"," TIWANA WAYS","  PATIALA-LUDHIANA", "567-68/CP/22"," 16.03.26", "PB11CB7797 & PB1CB7897" ,
   "25.05.2024"," 25.05.2024"),
new Bus("15.35"," BABA DITTU JI","DHURI-LDH","397-98/P/22","02.02.2026","PB11CT7986 & PB11AH5686"," 17.03.2024 & 25.05.23 "),
new Bus("15.40","BABA DITTU JI ","ABHA-KANNA","132/R/22","23.02.2027","PB13V8631","  22.01.2024"),
new Bus(37," 15.44"," LOK SEWAK"," PATIALA-DORAHA", "30/RK/71"," 23.02.26", "PB23M7715" ,"24.01.2024"),
new Bus("15.48","PRTC S","  DHURI-MOHALI"," 329/R/98","9.01.28","PB13AL9847","  02.01.2024"),
new Bus("15.48","LOK-SEWAK","SNG-NANGAL","221-222","20.02.26","B11CV1215","  27.02.2024"),
new Bus("15.55","RTC BNL","  BNL-SIRHAND","286/R/71","01.12.2025","B19H9819","  03.12.2024"),
new Bus(38," 15.56"," LOK SEWAK"," PATIALA-LUDHIANA", "31/RK/71"," 23.02.26", "PB23MI8615","18.12.2024"),




new Bus("16.00","RTC P"," NABHA-KHANNA","1057/R/22"," 01.03.2027","PB11CD0220","   15.02.2025"),
new Bus("16.00","BABA DITTU JI ","ABHA-KANNA","132/R/22","23.02.2027","PB13V8631","  22.01.2024"),
new Bus("16.08","PRTC S","  DHURI-MOHALI"," 329/R/98","9.01.28","PB13AL9847","  02.01.2024"),
new Bus("16.08"," TIWANA WAYS"," PATIALA-KHANNA", "567-68/CP/22"," 16.03.26", "PB11CB7797 & PB1CB7897" ,
   "25.05.2024","25.05.2024"),
new Bus("16.15","PRTC S","  DHURI-MOHALI"," 329/R/98","9.01.28","PB13AL9847","  02.01.2024"),
new Bus("16.20","PRTC P"," NABHA-KHANNA","1057/R/22"," 01.03.2027","PB11CD0220","   15.02.2025"),
new Bus("16.20","G.BUS","NABHA-N.SHAHAR","1134/R/22","26.06.2027","PB23G2645","  09.03.2023"),
new Bus("16.20"," TIWANA WAYS"," PATIALA-LUDHIANA","110/R/88"," 06.11.26", "PB11BK7897" ,"25.05.2024"),
new Bus("16.35","G.BUS","NABHA-N.SHAHAR","1134/R/22","26.06.2027","PB23G2645","  09.03.2023"),
new Bus("16.40","PRTC P"," NABHA-KHANNA","1057/R/22"," 01.03.2027","PB11CD0220","   15.02.2025"),
new Bus("16.45"," PRTC"," PATIALA-LUDHIANA"," 129-30/R/89"," 01.12.26", "PB11CD0202", "01.02.2025"),
new Bus("16.48","  PRTC P"," CHD-NABHA","  168/R/70","  29.09.2026"," PB65V4428"," 07.05.2023"),
new Bus("16.55",".BUS","NABHA-N.SHAHAR ","134/R/22","26.06.2027","PB23G2645","  09.03.2023"),
new Bus("16.55"," PRTC P"," NABHA-KHANNA"," 236/R/71"," 05.05.2027"," PB11BF7391","  09.07.2023"),



new Bus("17.01","  PRTC  ","CHD-NABHA"," 169/R/70","  01.09.13"," PB10DZ7918"," 19.08.2023"),
new Bus("17.05","  CHAWLA"," SANGRUR-KHANNA","  485/R/2K","  04.07.2025"," PB13AF7771","  21.03.2023"),
new Bus(42,"17.05","  PRTC"," PATIALA-MALLEWAL", "20/R/72"," 27.04.24", "PB11BU4261" ,"16.10.2024"),
new Bus("17.08","  CHAWLA"," SANGRUR-KHANNA","  485/R/2K","  04.07.2025"," PB13AF7771","  21.03.2023"),
new Bus("17.15","  PRTC P"," NABHA-KHANNA"," 236/R/71"," 05.05.2027"," PB11BF7391","  09.07.2023"),
new Bus("17.15","  AMRIT"," NABHA-SAMRALA"," 228/R/96","  02.10.2026"," PB23M709","  10.03.2024"),
new Bus("17.21","  PRTC P"," CHD-NABHA","  168/R/70","  29.09.2026"," PB65V4428"," 07.05.2023"),
new Bus("17.25","  CHAWLA"," SANGRUR-KHANNA","  485/R/2K","  04.07.2025"," PB13AF7771","  21.03.2023"),
new Bus("17.25","  AMRIT "," M.VARA-NABHA "," 447"," 09.03.2026"," PB23C8711"," 08.03.2024"),
new Bus("17.32","  PRTC "," CHD-NABHA"," 169/R/70","  01.09.13"," PB10DZ7918"," 19.08.2023"),
new Bus(43,"17.30"," PRTC"," PATIALA-KHANNA", "533/R/73"," 08.01.26",  "PB11BR7459"  ,"06.07.2024"),
new Bus("17.35","   AMRIT"," NABHA-SAMRALA"," 228/R/96","  02.10.2026"," PB23M709","  10.03.2024"),
new Bus("17.35","  AMLOH-HIGH","  M.VARA-NABHA "," 468/R ","1.01.2026","   PB10CC0697"," 24.01.24"),
new Bus("17.45","  PRTC P"," NABHA-KHANNA"," 236/R/71"," 05.05.2027"," PB11BF7391","  09.07.2023"),
new Bus(44,"17.45"," B.D.JI  HIGHWAYS M"," PATIALA-KHANNA ", "295/MBR/95"," 09.07.25", "PB11BYB186", "27.09.2023"),
new Bus("17.45","  AMRIT "," M.VARA-NABHA","  447"," 09.03.2026"," PB23C8711"," 08.03.2024"),
new Bus(45,"17.45","  NEW PATA."," PATIALA-JALANDHAR"," 1/2 288/R/97"," 23.06.27"," PB23M9189" ,"14.12.2023"),
new Bus("17.46"," CHAWLA ","B.GARH-SAMRALA"," 496/R/89"," 01.02.2026"," PB13AB7771","  27.07.2024"),
new Bus("17.55","  AMRIT"," NABHA-SAMRALA"," 228/R/96","  02.10.2026"," PB23M709","  10.03.2024"),
new Bus("17.55","  AMLOH-HIGH","  M.VARA-NABHA "," 468/R ","1.01.2026"," PB10CC0697"," 24.01.24"),
new Bus("17.57"," SHIV SANGRUR","-KHANNA"," 21/R/SNG","22 16.06",".","2027 PB11CU9695 01.03.2024 "),

new Bus("18.05","  AMRIT "," M.VARA-NABHA","  447"," 09.03.2026"," PB23C8711"," 08.03.2024"),
new Bus("18.05","  CHAWLA ","B.GARH-SAMRALA"," 496/R/89"," 01.02.2026"," PB13AB7771","  27.07.2024"),
new Bus("18.15","  AMLOH-HIGH","  M.VARA-NABHA "," 468/R "," 11.01.2026"," PB10CC0697"," 24.01.24"),
new Bus("18.15","  SHIV SANGRUR","-KHANNA"," 21/R/SNG","22 16.06",".","2027 PB11CU9695 01.03.2024 "),
new Bus("18.15","  BABA DITTU JI "," SANGRUR-KHANNA","  570-71/CP/22"," 04.09.2025"," PB11BU3186 & 11BU4486","  14.03.2024 "),
new Bus(46 ,"18.20 ","PRTC ","PATIALA-MALLEWAL  ","481-482/R/72 ","20.06.25", " PB11CB9546"," 10.02.2024"),
new Bus("18.25","  CHAWLA B",".GARH","-SAMRALA 496","R/89  01",".","02.2026 PB13AB7771  27.07.2024"),
new Bus("18.30","  BABA DITTU JI "," SANGRUR-KHANNA","  570-71/CP/22"," 04.09.2025"," PB11BU3186 & 11BU4486","  14.03.2024 "),
new Bus("18.30"," PRTC P"," NABHA-KHANNA","  1057/R/22"," 01.03.2027","  PB11CD0220","  15.02.2025"),
new Bus("18.35","  SHIV ","SANGRUR-KHANNA"," 21/R/SNG/22","16.06.2027"," PB11CU9695"," 01.03.2024 "),
new Bus("18.50","   BABA DITTU JI","  SANGRUR-KHANNA","  570-71/CP/22"," 04.09.2025"," PB11BU3186 & 11BU4486","  14.03.2024 "),
new Bus("18.50","  PRTC P"," NABHA-KHANNA","  1057/R/22"," 01.03.2027","  PB11CD0220","  15.02.2025"),





new Bus(47 ," 19.00"," PRTC","  PEHWA-KHANNA","  454/R/2000 ","13.03.25", "PB11BF5853 ","02.07.2023"),
new Bus("19.10","  PRTC P"," NABHA-KHANNA","  1057/R/22"," 01.03.2027","  PB11CD0220","  15.02.2025"),
new Bus("19.10","   PRTC P"," M.VARA-NABHA","  1056/R/22"," 21.02.2027","  PB11CB9533","  10.02.2024"),
new Bus("19.30","  PRTC P"," M.VARA-NABHA","  1056/R/22"," 21.02.2027","  PB11CB9533","  10.02.2024"),
new Bus("19.55","  PRTC P"," M.VARA-NABHA","  1056/R/22"," 21.02.2027","  PB11CB9533","  10.02.2024"),
new Bus("19.55","  PRTC P"," M.VARA-NABHA","  1056/R/22"," 21.02.2027","  PB11CB9533","  10.02.2024"),


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

      const results = amLUDHIANABuses.filter(bus => bus.matches(from, to, timeSlot));
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

      const heading = document.createElement("h1");
heading.textContent = "CHECK YOUR RESULT!";
heading.style.textAlign = 'center';
resultsDiv.appendChild(heading);


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
  
