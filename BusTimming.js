const timeSlots = {
      morning: { start: "05:00", end: "11:59" },
      afternoon: { start: "12:00", end: "16:59" },
      evening: { start: "17:00", end: "20:59" },
      night: { start: "21:00", end: "04:59" }
    };

    // Create an array which holdes to the timming details into objects form
    const busData = [
  // Morning
{ time: "05.55", route: "PATIALA to  LUDHIANA" , busName: "KHATRA", busNumber: "PB11BR2655" },
{ time: "05.45 at KHANNA",route:" KHANNA-SIRSA", route:" PRTC", busNumber:" PB11BU7488"},
{ time: "06.00 at GOBINDGARH", busName: "PRTC",route:"  KHANNA-SIRSA",busNumber:"PB11BU7488"},
{ time: "06.23 at  AMLOH" , busName: "PRTC",route:"   route:KHANNA-SIRSA",busNumber:"PB11BU7488"},
{ time: "06.25 at KHANNA" , busName: " PRTC P",route:  "KHANNA-NABHA", busNumber:"PBI1BF5850"},
{ time: "06.37 at GOBINDGARH", busName: " PRTC P",route:"  KHANNA-NABHA",busNumber:"PBI1BF5850"},
{ time: "06.40 at KHANNA", busName:" DARA SINGH",route:" KHANNA-SANGROOR",busNumber:"PB11BN4486"},
{ time: "06.55 at GOBINDGARH", busName: "  DARA SINGH",route:" KHANNA-SANGROOR",busNumber:"PB11BN4486"},
{ time: "06.57 at AMLOH", busName: " PRTC P ",route:" KHANNA-NABHA",busNumber:"PBI1BF5850"},




{ time:"07.00 at KHANNA",busName : " BABA DITTU JI",route:" KHANNA-SANGROOR",busNumber:" PB11BU3186 & 11BU4486" },
{ time:"07.05 at GOBINDGARH",busName:"  PATIALA BUS",route:" MOHALI-BNL",busNumber:"  PB11CR9825" },
{ time:"07.15 at AMLOH",busName:"  DARA SINGH",route:" KHANNA-SANGROOR",busNumber:" PB11BN4486"},
{ time:"07.20 at KHANNA",busName:"  PRTC P",route:" KHANNA-NABHA",busNumber:" PB11BF7382" },
{ time:"07.20 at GOBINDGARH",busName:"  BABA DITTU ",route:"  KHANNA-SANGROOR",busNumber:" PB11BU3186 & 11BU4486" },
{ time:"07.25 at AMLOH",busName:"   PATIALA BUS",route:"  MOHALI-BNL",busNumber:"  PB11CR9825" },
{ time:"07:26 at  BHADSON",busName:"DARASINGH",route:" CHAHAL-NABHA",busNumber:" PB11AH4486" },
{ time:"07.28 at KHANNA",busName:"PRTC P ",route:"  SAMRALA-NABHA",busNumber:"  PB11BR7466 "},
{ time:"07.35 at AMLOH",busName:" BABA DITTU ",route:" KHANNA-SANGROOR", busNumber:" PB11BU3186 & 11BU4486"},
{ time:"07.42  at GOBINDGARH",busName:"PRTC P ",route:" SAMRALA-NABHA", busNumber:"   PB11BR7466" },
{ time:"07.43 at KHANNA",busName:"  BABA DITTU",route:" KHANNA-NABHA",busNumber:" PB113V8631"},
{ time:"07.45 at AMLOH",busName:"  PRTC P ",route:"  KHANNA-NABHA", busNumber:" PB11BF7382"},
{ time:"  7.51",busName:" NEW PATIALAbusName",route:" PATIALA-JALANDHAR",busNumber:"P823M9189 "},
{ time:"07.55 at KHANNA",busName:" BABA DITTU ",route:"KHANNA-NABHA",busNumber:" PB113V8631"},
{ time:"07.55 at GOBINDGARH",busName:"  LOK SEWAK",route:"  NABHA-SAMRALA ",busNumber:" PB23J9415" },
  { time: "07.00", route: "PATIALA to  JALANDHAR ",busName: "PRTC",busNumber:"PB11CB9529" },
  { time: "07.17", route: "PATIALA to  LUDHIANA" , busName: "PRTC", busNumber: "PB11887462" },
  { time: "07.28", route: "PATIALA to  KPT",busName: "AMRIT",busNumber: "P810FF9597"  },
  { time: "07.39", route: "PATIALA LUDHIANA", busName: "HAZUR SAHAB TPT",busNumber: "PB116Y1325"  },
  { time: "07.51", route: "PATIALA to  JALANDHAR" , busName: " NEW PATIALA",busNumber: "P823M9189" },



  { time: "08.02", route: " PATIALA to  KHANNA", busName: " B.D.JI MOTOR",busNumber: "P823M9745"  },
 { time: "08.05 at AMLOH",busName: "  PRTC P",route:" SAMRALA-NABHA", busNumber: "   PB11BR7466"},
 { time: "08.07 at KHANNA",busName: " G.T.B HIGH",route:" SAMRALA-NABHA", busNumber: "PB04AB7978 "},
 { time: "08.10 at GOBINDGARH",busName:" PRTC P",route:" SAMRALA-NABHA",busNumber:"PB11BR7466"},
 { time: "08.13", route: " PATIALA to  KHANNA" , busName: "TIWANA WAYS", busNumber: "P11C87797" },
 { time: "08.15 at AMLOH",busName:" BABA DITTU JI", route:"KHANNA-NABHA",busNumber:" PB113V8631"},
 { time: "08.22 at  GOBINDGARH",busName:" PRTC P",route:" KHANNA-NABHA",busNumber:" PB11CD0220"},
 { time: "08.22 at KHANNA",busName:" G.T.B HIGH",route:" SAMRALA-NABHA",busNumber:" PB04AB7978"},
 { time: "08.25", route: "PATIALA to  LUDHIANA" , busName: " TIWANA WAYS ",busNumber: "P11C877 "},
 { time: "08.30 at AMLOH",busName:" PRTC P",route:" SAMRALA-NABHA",busNumber:"PB11BR7466" },
 { time: "08.35 at KHANNA",busName:" BABA DITTU JI",route:" BUDHLADA-LUDHIANA",busNumber:" PB11BY7986 & PB11AH588"},
 { time: "08.37 at GOBINDGARH",busName:"  PRTC P",route:" KHANNA-NABHA",busNumber:"  PB11CD0220"},
 { time: "08.40", route: "PATIALA to  MALLEWAL 20/8/72" , busName: "PRTC",busNumber: "PB11BU4261" },
 { time: "08.42 at AMLOH",busName:" LOK SEWAK ",route:"NABHA-KURALI",busNumber:"  PB23J5815"  },
 { time: "08.42 at AMLOH",busName:" G.T.B HIGH ",route:"SAMRALA-NABHA",busNumber:" PB04AB7978"},
 { time: "08.50 at GOBINDGRAH",busName:"  BABA DITTU JI",route:" BUDHLADA-LUDHIANA",busNumber:" PB11BY7986 & PB11AH5886" },
 { time: "08.55 at KHANNA",busName:"  BABA DITTU JI",route:" KHANNA-SANGROOR",busNumber:"  PB11BU3186 & PB11AH5886"  ,},
 { time: " 08.55", route: "PATIALA to  JALANDHAR" , busName: "PRTC",busNumber: "PB11AB1234"},
 { time: "08.57 at AMLOH",busName:" PRTC P",route:" KHANNA-NABHA",busNumber:" PB11CD0220"},


{time:"09.05", route: " PATIALA to  DORAHA", busName: "SUKHWINDERA", busNumber: "P8118F0587"},
{time:"09.10 at GOBINDGARH",busName:" BABA DITTU JI",route:" KHANNA-NAGHA",busNumber:"  PB11BU3186"},
{time:"09.10 at AMLOH",busName:" BABA DITTU JI",route:" KHANNA-SANGROOR",busNumber:"  PB11BU3186 & PB11AH5886"},
{time:"09.10 at AMLOH",busName:"  BABA DITTU JI",route:" BUDHLADA-LUDHIANA",busNumber:" PB11BY7986 & PB11AH5886"},
{ time: "09.20", route: "PATIALA to  RAHON", busName: "PRTC", busNumber: "PB11C25997" },
{time:"09.25 at KHANNA",busName:"GOBINDGARH BUS",route:"NABHA-ROPAR",busNumber:"PB23J8245"},
{time:"09.30 at GOBINDGARH",busName:" BABA DITTU JI",route:" KHANNA-SANGROOR",busNumber:"  PB11BU3186 & PB11AH5886"},
{time:"09.30 at AMLOH",busName:"  BABA DITTU JI",route:" KHANNA-NAGHA",busNumber:"  PB11BU3186"},
{ time:"09.30", route: "PATIALA to  KHANNA" , busName: " TIWANA WAYS ",busNumber: "PB11C87797" },
{time:"09.40 at GOBINDGARH",route:"  NABHA-ROPAR",busNumber:" PB23J8245"},
{ time:" 09.40", route: "PATIALA to  LUDHIANA" , busName: " TIWANA WAYS ",busNumber: "PB1187897"},
{time:"09.50 at AMLOH",busName:" BABA DITTU JI",route:" KHANNA-NAGHA",busNumber:" PB11BU3186"},
{time:"09.55 at GOBINDGARH",busName:" PRTC C ",route:"CHANDIGARH-NABHA",busNumber:" PB10027919"},
{ time:" 09.57", route: " PATIALA to  KHANNA", busName: "PRTC",busNumber: "PB118R7459" },

{ time:"10.00 at AMLOH",  route: " NABHA-ROPAR",busNumber:"PB23J8245"},
{ time:"10.00 at BHADSON", busName: "  DARA SINGH ",route:" CHAHAL-NABHA",busNumber:" PB11AHA4486"},
{ time:"10.05 at KHANNA",busName:"  PRTC P", route: " KHANNA-NABHA",busNumber:" PB118B5848 "},
{ time: "10.07", route: "PATIALA to DORAHA " , busName: "LOK SEWAK",busNumber: "P23M7715"},
{ time:"10.15 at AMLOH",busName:"PRTC C", route: " CHANDIGARH-NABHA",busNumber:"PB10027919"},
{ time: " 10.17", route: " PATIALA to  LUDHIANA", busName: "LOK SEWAK",busNumber: "P323M8615" },
{ time:"10.20 at GOBINDGARH",busName:"PRTC P", route: " KHANNA-NABHA",busNumber:"PB118B5848"},
{ time: "10.27", route: "PATIALA to  LUDHIANA" , busName: "LOK SEWAK",busNumber: "P823M7215"},
{ time:"10.35 at KHANNA",busName:" CHAWLA.", route: " SAMRALA-B.GARH",busNumber:" PB13AB7771"},
{ time: "10.37", route: "PATIALA to  KHANNA", busName: " TIWANA WAYS ",busNumber: "P811CWS187"},
{ time:"10.40 at AMLOH",busName:" PRTC P", route: " KHANNA-NABHA ",busNumber:"PB118B5848"},
{ time: "10.47", route: "PATIALA to  LUDHIANA", busName: " TIWANA WAYS ", busNumber: "P811C87797 & PB11C87897"},
 { time:"10.50 at GOBINDGARH",busName:"CHAWLA.", route:" SAMRALA-B.GARH ",busNumber:" PB13AB7771"},


 { time:"11.00 at KHANNA",busName:"AMRIT.",route:" NABHA-SAMRALA.",busNumber:" PB23M7709"},
 { time: "11.02", route: " PATIALA to  KHANNA", busName: " B.D.JI HIGHWAYS M",busNumber: "P8118Y8186"},
 { time:"11.10 at KHANNA",busName:" AMRIT.",route:" NABHA-M.VARA",busNumber:"PB23C8711"},
 { time:"11.10 at AMLOH",busName:"CHAWLA.",route:" SAMRALA-B.GARH ",busNumber:" PB13AB7771"},
 { time:"11.15 at GOBINDGARH",busName:"AMRIT.",route:" NABHA-SAMRALA.",busNumber:" PB23M7709"},
 { time:"11.20 at KHANNA",busName:"AMLOH HIGH",route:" M.VARA-NABHA.",busNumber:" PB10AV6157"},
 { time:"11.25 at GOBINDGARH",busName:" AMRIT.",route:" NABHA-M.VARA 447",busNumber:" PB23C8711"},
 { time:"11.30 at KHANNA",busName:"AMLOH HIGH.",route:" M.VARA-NABHA.",busNumber:" PB10CC0697"},
 { time: "11.32", route: "PATIALA to  LUDHIANA" , busName: "PRTC",busNumber: "PB11CD0202"},
 { time:"11.35 at GOBINDGARH",busName:"AMLOH HIGH",route:" M.VARA-NABHA",busNumber:" PB10AV6157"},
 { time:"11.35 at AMLOH",busName:"AMRIT.",route:" NABHA-SAMRALA.",busNumber:" PB23M7709"},
 { time:"11.45 at AMLOH",busName:"AMLOH HIGH.",route:" M.VARA-NABHA.",busNumber:" PB10CC0697"},
 { time:"11.45 at GOBINDGARH",busName:"AMRIT.",route:" NABHA-M.VARA",busNumber:"PB23C8711"},
 { time:"11.55 at AMLOH",busName:"AMLOH HIGH",route:" M.VARA-NABHA.",busNumber:" PB10AV6157"},
 // Afternoon
 { time: "12.02", route: "PEHWA to  KHANNA", busName: "PRTC", busNumber: "P8118F5853"},
   { time: "12.05",busName:" PRTC C",route: "CHD-NABHA",busNumber:" PB65AA7949"},
  { time: "12.05 at AMLOH",busNmae:"AMLOH HIGH",route: "M.VARA-NABHA.",busNumber:" PB10CC0697"},
  { time: "12.15",busName:" SHIV",route:"SNG-KHANNA",busNumber:" PB11CU9695"},
  { time: "12.10",busName:" PRTC P",route:" NABHA-KHANNA",busNumber:" PB11BF7382"},
  { time: "12.20",busName:" PRTC C",route: "CHD-NABHA",busNumber:" PB65AA7948"},
  { time: "12.25",busName:" PRTC C",route:  "CHD-NABHA",busNumber:" PB65AA7949"},
  { time: "12.30",busName:" PRTC P",route: "NABHA-KHANNA",busNumber:" PB11BF7382"},
  { time: "12.32", route: "PATIALA to  JALANDHAR", busName: "PRTC", busNumber: "PR11CF9205"},
  { time: "12.35",busName:"  PRTC P",route: "N.SHAHAR-NABHA",busNumber:" PB11BR7465"},
  { time: "12.40",busName:" PRTC C",route: "CHD-NABHA",busNumber:" PB65AA7948"},
  { time: "12.50",busName:"  PRTC P",route: "NABHA-KHANNA",busNumber:" PB11BF7382"},
  { time: "12.50",busName:"  PRTC P",route: "N.SHAHAR-NABHA",busNumber:" PB11BR7465"},
  { time: "12.50",busName:"DARA SINGH",route:"KHANNA-SNG",busNumber:" PB11BN4486"},
  { time: "12.52", route: "PATIALA to  MALLEWAL" , busName: "PRTC", busNumber: "P811C89546" },


 { time: "13.08",busName:" DARA SINGH", route: "KHANNA-SNG", busNumber:" PB11BN4486"},
 { time: "13.10",busName:"  PRTC P", route: " N.SHAHAR-NABHA", busNumber:" PB11BR7465"},
 { time: "13.12", route: "PATIALA LUDHIANA" , route: "PRTC", busNumber: "PB11BR7462" },
 { time: "13.25",busName:" PRTC P", route: " M.VARA-NABHA", busNumber:" PB11CB9533"},
 { time: "13.27", route: "PATIALA-LUDHIANA" , busName: "KHATRA", busNumber: "P811882655" },
 { time: "13.25",busName:"PRTC P", route: " NABHA-KHANNA", busNumber:" PB11BF5850 "},
 { time: "13.28",busName:" DARA SINGH", route: "KHANNA-SNG", busNumber:" PB11BN4486"},
 { time: "13.38",busName:"  PRTC C", route: " CHD-NABHA", busNumber:" PB65AA7945"},
 { time: "13.40",busName:" DARA SINGH", route: " CHAHAL-NABHA", busNumber:"PB11AH4486 "},
 { time: "13.42", route: "PATIALA-LUDHIANA" , busName: "HAZUR SAHAB TPT", busNumber: "P8115Y1325" },
 { time: "13.45",busName:"  PRTC P", route: " M.VARA-NABHA", busNumber:" PB11CB9533"},
 { time: "13.48",busName:"PRTC P", route: " NABHA-KHANNA", busNumber:" PB11BF5850 "},
 { time: "13.50",busName:"CHAWLA", route: " KHANNA-BHADSON", busNumber:" PB13A50071 "},
 { time: "13.57", route: "PATIALA-KHANNA" , busName: "B.DJI MOTOR", busNumber: "PB23M9745" },
 { time: "13.58",busName:"G.T.B. HIGH", route: " NABHA-SAMRALA", busNumber:" PB08BV9531 "},
 { time: "13.58",busName:"  PRTC C", route: " CHD-NABHA", busNumber:" PB65AA7945"},


{ time:"14.05",busName:" DITTU JI",route:" SANGRUR-KHANNA",busNumber:"PB11BU3186 & 11BU4486 "},
{ time:"14.08",busName:"PRTC P",route:" NABHA-KHANNA",busNumber:" PB11BF5850 "},
{ time:"14.08",busName:"CHAWLA",route:" KHANNA-BHADSON",busNumber:" PB13A50071 "},
{ time: "14.12", route: "PATIALA-KHANNA" , busName: " B.D. HIGHWAYS M", busNumber: "PB11BY8186" },
{ time:"14.18",busName:"G.T.B. HIGH",route:" NABHA-SAMRALA",busNumber:" PB08BV9531 "},
{ time:"14.18",busName:"LOK SEWAK ",route:"NABHA-SAMRALA",busNumber:" PB23M7715 "},
{ time:"14.22",busName:" DITTU JI ",route:"SANGRUR-KHANNA",busNumber:"PB11BU3186 & 11BU4486 "},
{ time:"14.28",busName:"CHAWLA",route:" KHANNA-BHADSON",busNumber:" PB13A50071 "},
{ time: " 14.30", route: "PATIALA-KHANNA" , busName: "PRTC", busNumber: "PB1187459" },
{ time:"14.33",busName:"LOK SEWAK ",route:"NABHA-SAMRALA",busNumber:" PB23M7715 "},
{ time:"13.38",busName:"G.T.B. HIGH",route:" NABHA-SAMRALA",busNumber:" PB08BV9531 "},
{ time:"14.42",busName:"BABA DITTU JI",route:" SANGRUR-KHANNA",busNumber:"PB11BU3186 & 11BU4486 "},
{ time:"14.43",busName:"CHAWLA  ",route:"CHAHAL-MKT",busNumber:" PB13T4471 "},
{ time: " 14.45", route: "PATIALA-DORAHA" , busName: "SUKHWINDERA", busNumber: "PB1180587" },
{ time:"14.45",busName:"PRTC P",route:"NABHA-SAMRALA",busNumber:" PB11BR7466 " },
{ time:"14.48",busName:"LOK SEWAK ",route:"PRTC BNL BNL-MOHALI",busNumber:"PB19H9818"},
{ time:"14.53",busName:"LOK SEWAK ",route:"NABHA-SAMRALA",busNumber:" PB23M7715 "},


 { time:"15.00",busName:"PTC P",route:"NABHA-SAMRALA",busNumber:"PB11BR7466"},
 { time:"15.00",busName:"BABA DITTU JI",route:"DHURI-LDH",busNumber:"PB11CT7986 & PB11AH5686"},
{ time:"15.08",busName:"PRTC BNL",route:" BNL-MOHALI",busNumber:"PB19H9818 "},
{ time: "15.10", route: "PATIALA-JALANDHAR" , busName: "PRTC", busNumber: "PB11CF9792" },
{ time:"15.15",busName:"BABA DITTU JI",route:"DHURI-LDH",busNumber:"PB11CT7986 & PB11AH5686"},
{ time: "15.20", route: "PATIALA-LUDHIANA" , busName: "TIWANA WAYS", busNumber: "PB11CWS187" },
{ time:"15.20",busName:" PTC P",route:"NABHA-SAMRALA",busNumber:"PB11BR7466"},
{ time:"15.25",busName:"BABA DITTU JI ",route:"ABHA-KANNA",busNumber:"PB13V8631"},
{ time:"15.28",busName:"LOK-SEWAK",route:"SNG-NANGAL",busNumber:"PB11CV1215"},
{ time: "15.32", route: "PATIALA-LUDHIANA" , busName: "TIWANA WAYS", busNumber: "PB11CB7797 & PB1CB7897" },
{ time:"15.35",busName:" BABA DITTU JI",route:"DHURI-LDH",busNumber:"PB11CT7986 & PB11AH5686"},
{ time:"15.40",busName:"BABA DITTU JI ",route:"ABHA-KANNA",busNumber:"PB13V8631"},
{ time: "15.44", route: "PATIALA-DORAHA" , busName: " LOK SEWAK", busNumber: "PB23M7715" },
{ time:"15.48",busName:"PRTC S", route: "DHURI-MOHALI",busNumber:"PB13AL9847"},
{ time:"15.48",busName:"LOK-SEWAK",route:"SNG-NANGAL",busNumber:"PB11CV1215"},
{ time:"15.55",busName:"RTC BNL",route:"  BNL-SIRHAND",busNumber:"PB19H9819"},
{ time: "15.56", route: " PATIALA-LUDHIANA" , busName: "LOK SEWAK", busNumber: "PB23MI8615" },

{ time:"16.00", busName:"PRTC P",route: " NABHA-KHANNA",busNumber:"PB11CD0220"},
{ time:"16.00", busName:"BABA DITTU JI ",route: "ABHA-KANNA",busNumber:"PB13V8631"},
{ time:"16.08", busName:"PRTC S",route: "  DHURI-MOHALI",busNumber:"PB13AL9847"},
{ time: "16.08", route: "ATIALA-KHANNA" , busName: "TIWANA WAYS", busNumber: "PB11CB7797 & PB1CB7897" },
{ time:"16.15", busName:"PRTC S",route: "  DHURI-MOHALI",busNumber:"PB13AL9847"},
{ time:"16.20", busName:"PRTC P",route: " NABHA-KHANNA",busNumber:"PB11CD0220"},
{ time:"16.20", busName:"G.BUS",route: "NABHA-N.SHAHAR",busNumber:"PB23G2645"},
{ time: "16.20", route: "PATIALA-LUDHIANA" , busName: "TIWANA WAYS", busNumber: "PB11BK7897" },
{ time: "16:30", route: "Amloh to Khanna", busName: "Tiwana Ways", busNumber: "PB11ST7890" },
{ time:"16.35", busName:"G.BUS",route: "NABHA-N.SHAHAR",busNumber:"PB23G2645"},
{ time:"16.40", busName:"PRTC P",route: " NABHA-KHANNA",busNumber:"PB11CD0220"},
{ time: "16.45", route: "PATIALA-LUDHIANA" , busName: "PRTC", busNumber: "PB11CD0202" },
{ time:"16.48", busName:" PRTC P",route: " CHD-NABHA",busNumber:" PB65V4428"},
{ time:"16.55", busName:"G.BUS",route: "NABHA-N.SHAHAR ",busNumber:"PB23G2645"},
{ time:"16.55", busName:" PRTC P",route: " NABHA-KHANNA",busNumber:" PB11BF7391"},


  // Evening

  { time:"17.01",busName:"  PRTC  ",route:"CHD-NABHA",busNumber:" PB10DZ7918"},
  { time: "17.05", route: " PATIALA-MALLEWAL", busName: "PRTC", busNumber: "PB11BU4261"},
{ time:"17.05",busName:"  CHAWLA",route:" SANGRUR-KHANNA",busNumber:" PB13AF7771"},
{ time:"17.08",busName:"  CHAWLA",route:" SANGRUR-KHANNA",busNumber:" PB13AF7771"},
{ time:"17.15",busName:"  PRTC P",route:" NABHA-KHANNA",busNumber:" PB11BF7391"},
{ time:"17.15",busName:"  AMRIT",route:"NABHA-SAMRALA",busNumber:" PB23M709"},
{ time:"17.21",busName:"  PRTC P",route:" CHD-NABHA",busNumber:" PB65V4428"},
{ time:"17.25",busName:"  CHAWLA",route:" SANGRUR-KHANNA",busNumber:" PB13AF7771"},
{ time:"17.25",busName:"  AMRIT ",route:" M.VARA-NABHA ",busNumber:" PB23C8711"},
{ time: "17.30", route: " PATIALA-KHANNA", busName: "PRTC", busNumber: "PB11BR7459" },
{ time:"17.32",busName:"  PRTC ",route:"CHD-NABHA",busNumber:" PB10DZ7918"},
{ time:"17.35",busName:"   AMRIT",route:" NABHA-SAMRALA",busNumber:" PB23M709"},
{ time:"17.35",busName:"  AMLOH-HIGH",route:"  M.VARA-NABHA ",busNumber:" PB10CC0697"},
{ time:"17.45",busName:"  PRTC P",route:" NABHA-KHANNA",busNumber:" PB11BF7391"},
{ time:"17.45",busName:"  AMRIT ",route:" M.VARA-NABHA",busNumber:" PB23C8711"},
{ time: "17.45", route: "PATIALA-KHANNA ", busName: " B.D.JI  HIGHWAYS M", busNumber: "PB11BYB186" },
{ time:"17.46",busName:" CHAWLA ",route:"B.GARH-SAMRALA",busNumber:" PB13AB7771"},
{ time:"17.55",busName:"  AMRIT",route:" NABHA-SAMRALA",busNumber:" PB23M709"},
{ time: "17.55", route: "PTA-JAL" , busName: "NEW PATA", busNumber: "PB23M9189 " },
{ time:"17.55",busName:"  AMLOH-HIGH",route:"  M.VARA-NABHA ",busNumber:" PB10CC0697"},
{ time:"17.57",busName:" SHIV",route:" SANGRUR-KHANNA",busNumber:" PB11CU9695  "},

{ time: "18:00", route: "Amloh to Ludhiana", busName: "PRTC", busNumber: "PB11UV1234" },
{ time:"18.05",busName:"  AMRIT ",route:" M.VARA-NABHA", busNumber: " PB23C8711"},
{ time:"18.05",busName:"  CHAWLA ",route:"B.GARH-SAMRALA", busNumber: " PB13AB7771"},
{ time:"18.15",busName:"  AMLOH-HIGH",route:"  M.VARA-NABHA ", busNumber: " PB10CC0697"},
{ time:"18.15",busName:"  SHIV ",route:"SANGRUR-KHANNA", busNumber: "PB11CU9695"},
{ time:"18.15",busName:"  BABA DITTU JI ",route:" SANGRUR-KHANNA", busNumber: " PB11BU3186 & 11BU4486"},
{ time: "18.20", route: "PTA-MALLEWAL" , busName: "PRTC ", busNumber: "PB11CB9546 " },
{ time:"18.25",busName:"  CHAWLA B",route:"GARH-SAMRALA", busNumber: " PB13AB7771 "},
{ time:"18.30",busName:"  BABA DITTU JI ",route:" SANGRUR-KHANNA", busNumber: " PB11BU3186 & 11BU4486"},
{ time:"18.30",busName:" PRTC P",route:" NABHA-KHANNA", busNumber: "  PB11CD0220"},
{ time:"18.35",busName:"  SHIV ",route:"SANGRUR-KHANNA", busNumber: " PB11CU9695"},
{ time:"18.50",busName:"   BABA DITTU JI",route:"  SANGRUR-KHANNA", busNumber: " PB11BU3186 & 11BU4486"},
{ time:"18.50",busName:"  PRTC P",route:" NABHA-KHANNA", busNumber: "  PB11CD0220"},





// Night

{ time: "19.00", route: " PEHWA-KHANNA " , busName: "PRTC  ", busNumber: "PB11BF5853 " },
{ time:"19.10",busName:"  PRTC P",route:" NABHA-KHANNA", busNumber:"  PB11CD0220"},
{ time:"19.10",busName:"   PRTC P",route:" M.VARA-NABHA", busNumber:"  PB11CB9533"},
{ time:"19.30",busName:"  PRTC P",route:" M.VARA-NABHA", busNumber:"  PB11CB9533"},
{ time: "19:30", route: "Amloh to Patiala", busName: "PRTC", busNumber: "PB11WX5678" },
{ time:"19.55",busName:"  PRTC P",route:" M.VARA-NABHA", busNumber:"  PB11CB9533"},
{ time:"19.55",busName:"  PRTC P",route:" M.VARA-NABHA", busNumber:"  PB11CB9533"},

  { time: "21:00", route: "Amloh to Khanna", busName: "Tiwana Ways", busNumber: "PB11YZ9012" },
  { time: "23:45", route: "Amloh to Ludhiana", busName: "PRTC", busNumber: "PB11AA3456" },
  { time: "03:15", route: "Amloh to Patiala", busName: "PRTC", busNumber: "PB11BB7890" }

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
          <td style="padding-right:50px;"  onclick="showBusDetails('${bus.time}')">
          <button onclick="handleButtonClick('${bus.time}')">Select</button>

          ${bus.time}</td>
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

      `;
    }

    // this will filtered to the given route with busData database array and then result inject into table 
      function showRouteDetails(route) {
      const buses = busData.filter(b => b.route === route);
      let html = `<h3>Route Details: ${route}</h3>`;
      buses.forEach(bus => {
        html += `
          <p><strong>Time:</strong> ${bus.time}, <strong>Bus Name:</strong> ${bus.busName}, 
          <strong>Bus Number:</strong> ${bus.busNumber}</p>
        `;
      });
      document.getElementById("details").innerHTML = html;
    }