events.on("ready",function(){1==scorm.loadObject("btnA")&&$(".btnA").removeClass("pulse"),1==scorm.loadObject("btnB")&&$(".btnB").removeClass("pulse"),1==scorm.loadObject("btnC")&&$(".btnC").removeClass("pulse"),1==scorm.loadObject("btnD")&&$(".btnD").removeClass("pulse"),1==scorm.loadObject("btnA")&&1==scorm.loadObject("btnB")&&1==scorm.loadObject("btnC")&&1==scorm.loadObject("btnD")&&$(".arrow-right").removeClass("hide"),$(".btnA").on("click",function(){scorm.saveObject("btnA",!0),navigate.goto("a-01")}),$(".btnB").on("click",function(){scorm.saveObject("btnB",!0),navigate.goto("b-01")}),$(".btnC").on("click",function(){scorm.saveObject("btnC",!0),navigate.goto("c-01")}),$(".btnD").on("click",function(){scorm.saveObject("btnD",!0),navigate.goto("d-01")})});
//# sourceMappingURL=script.js.map
