

let weekdat = [ "Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
let dt = document.getElementsByClassName("date")
let tt = document.getElementsByClassName("time")
let y1t = document.getElementById("year-1-teacher")
let y1s = document.getElementById("year-1-subject")
let y2t = document.getElementById("year-2-teacher")
let y2s = document.getElementById("year-2-subject")
let y3t = document.getElementById("year-3-teacher")
let y3s = document.getElementById("year-3-subject")
let mon_timetable = [["FE","FE","CHEM","M-1","PSP/ELCS LAB","PSP/ELCS LAB","PSP/ELCS LAB"],["DMS-1","DS","DS","MPMC","DLD","DMS-1","PT/LIB"],["Software Engineering","Compiler Design", "Web Technologies", "JAVA", "CNS" , "Psychology" , "Sports/Library"]]
let mon_teachers = [["MR.Srikanth","MR.Srikanth","MS.Laxmi","MR.Anjaiah","DR.Hari Krishna P/DR.Sundeep Patil","DR. Hari Krishna P/DR.Sundeep Patil","DR.Hari Krishna P/DR.Sundeep Patil"],["MR.Anjaiah","DR. Hari Krishna P","DR. Hari Krishna P","MS.Ujwala","MS.Sashirekha","MR.Anjaiah",""],["DR.Shravan Kumar", "Dr.Suresh" , "MS.Sashirekha","DR. Hari Krishna P", "Dr.Suresh" , "MS.Laxmi" , ""]]
let tue_timetable = [["FE","PSP","PSP","ENG","PHY-1/CHEM LAB","PHY-1/CHEM LAB","PHY-1/CHEM LAB"],["DLD","DMS-1","DMS-1","MPMC","DS LAB","DS LAB","DS LAB"],["Software Engineering","CD/WT LAB", "CD/WT LAB", "CD/WT LAB", "CNS" , "Psychology" , "Compiler Design"]]
let tue_teachers = [["MR.Srikanth","DR. Hari Krishna P","DR. Hari Krishna P","DR. Sundeep Patil","MS.Vani/MS.Laxmi","MS.Vani/MS.Laxmi","MS.Vani/MS.Laxmi"],["MS.Sashirekha","MR.Anjaiah","MR.Anjaiah","MS.Ujwala","DR. Hari Krishna P","DR. Hari Krishna P","DR. Hari Krishna P"],["DR.Shravan Kumar","Dr.Suresh/MS.Sashirekha","Dr.Suresh/MS.Sashirekha","Dr.Suresh/MS.Sashirekha","Dr.Suresh","MS.Laxmi","Dr.Suresh"]]
let wed_timetable = [["FE","CHEM","PSP","PHY-1","PSP/ELCS LAB","PSP/ELCS LAB","PSP/ELCS LAB"],["DMS-1","MPMC LAB","MPMC LAB","MPMC LAB","DLD","SSD","PT/LIB"],["Software Engineering","CNS", "Psychology", "JAVA", "CNS" , "Web Technologies" , "Sports/Library"]]
let wed_teachers = [["MR.Srikanth","MS.Laxmi","DR. Hari Krishna P","MS.VAni","DR. Hari Krishna P/DR.Sundeep Patil","DR. Hari Krishna P/DR.Sundeep Patil","DR. Hari Krishna P/DR.Sundeep Patil"],["MR.Anjaiah","MS.Ujwala","MS.Ujwala","MS.Ujwala","MS.Sashirekha","MS.Ujwala",""],["DR.Shravan Kumar", "Dr.Suresh","MS.Laxmi","DR. Hari Krishna P","DR.Suresh","MS.Sashirekha",""]]
let thu_timetable = [["M-1","M-1","CHEM","PHY-1","PHY-1/CHEM LAB","PHY-1/CHEM LAB","PHY-1/CHEM LAB"],["DS","DS LAB","DS LAB","DS LAB","MPMC","ENG","ENG"],["Software Engineering","CNS", "Web Technologies", "Compiler Design", "JAVA LAB" , "JAVA LAB" , "JAVA LAB"]] 
let thu_teachers = [["MR.Anjaiah","MR.Anjaiah","MS.Laxmi","MS.Vani","MS.Vani/MS.Laxmi","MS.Vani/MS.Laxmi","MS.Vani/MS.Laxmi"],["DR. Hari Krishna P","DR. Hari Krishna P","DR. Hari Krishna P","DR. Hari Krishna P","MS.Ujwala","DR.Sundeep Patil","DR.Sundeep Patil",],["DR.Shravan Kumar", "DR.Suresh","MS.Sashirekha","DR.Suresh","DR. Hari Krishna P","DR. Hari Krishna P","DR. Hari Krishna P"]] 
let fri_timetable = [["PHY-1","ENG","M-1","CHEM","PHY-1","CHEM","PT/LIB"],["MPMC","DS","DS","DLD","SSD LAB","SSD LAB","SSD LAB"],["Software Engineering","CD/WT LAB", "CD/WT LAB", "CD/WT LAB", "JAVA" , "JAVA" , "Psychology"]]
let fri_teachers = [["MS.Vani","DR.Sundeep Patil","MR.Anjaiah","MS.Laxmi","MS.Vani","MS.Laxmi",""],["MS.Ujwala","DR. Hari Krishna P","DR. Hari Krishna P","MS.Sashirekha","MS.Ujwala","MS.Ujwala","MS.Ujwala",],["DR.Shravan Kumar", "DR.Suresh/MS.Sashirekha","DR.Suresh/MS.Sashirekha","DR.Suresh/MS.Sashirekha","DR. Hari Krishna P","DR. Hari Krishna P","MS.Laxmi"]]
let sat_timetable = [["M-1","PHY-1","CHEM","PHY-1","M-1","PT/LIB","PT/LIB"],["MPMC","DLD","DMS-1","MPMC","SSD","PT/LIB","PT/LIB"],["JAVA","CNS", "Web Technologies", "Compiler Design", "Psychology" , "Sports/Library" , "Sports/Library"]]
let sat_teachers = [["MR.Anjaiah","MS.Vani","MS.Laxmi","MS.Vani","MR.Anjaiah","",""],["MS.Ujwala","MS.Sashirekha","MR.Ujwala","MS.Ujwala","MS.Ujwala","PT/LIB","PT/LIB"],["DR. Hari Krishna P","DR.Suresh","MS.Sashirekha","DR.Suresh","MS.Laxmi","",""]]

var h;
var mins;

setInterval(() => {
const dte = new Date()
var d = dte.getDay()
var t = dte.getTime()
var h = dte.getHours()
var mins = dte.getMinutes()
var s = dte.getSeconds()


console.log(weekdat[d])
    dt[0].textContent= weekdat[d]
    tt[0].textContent= h+" : " +mins + " : " + s;
    console.log(mins)
    switch (d)
    {
        case 0: 
        {
            y1t.textContent = "Take Rest It is Sunday 😀"
            y2t.textContent = "Take Rest It is Sunday 😀"
            y3t.textContent = "Take Rest It is Sunday 😀"
            break;
        }
        case 1: 
        {
            mon(h,mins)
            break;
        }
        case 2: 
        {
            tue(h,mins)
            break;
        }
        case 3: 
        {
            wed(h,mins)
            break
        }
        case 4: 
        {
            thu(h,mins)
            break
        }
        case 5: 
        {
            fri(h,mins)
            break
        }
        case 6: 
        {
            sat(h,mins)
            break
        }
    }
}, 1000);
function mon(h, mins) { 
    if (h <= 8 && mins <= 49)
    {
        y1t.textContent = "The Classes Starts At 8:50 , Be Prepared!" 
        y2t.textContent = "The Classes Starts At 8:50 , Be Prepared!"
        y3t.textContent = "The Classes Starts At 8:50 , Be Prepared!"

    }
    else if ((h == 8 && mins >= 50) ||( h==9 && mins <40 ))
    {
         y1s.textContent = "Subject: " + mon_timetable[0][0]
         y1t.textContent = "Teacher: " + mon_teachers[0][0]
         y2s.textContent = "Subject: " + mon_timetable[1][0]
         y2t.textContent = "Teacher: " + mon_teachers[1][0]
         y3s.textContent = "Subject: " + mon_timetable[2][0]
         y3t.textContent = "Teacher: " + mon_teachers[2][0]


    }
    else if ((h == 9 && mins >= 40) ||( h==10 && mins <30 ))
    {
        y1s.textContent = "Subject: " + mon_timetable[0][1]
        y1t.textContent = "Teacher: " + mon_teachers[0][1]
        y2s.textContent = "Subject: " + mon_timetable[1][1]
        y2t.textContent = "Teacher: " + mon_teachers[1][1]
        y3s.textContent = "Subject: " + mon_timetable[2][1]
        y3t.textContent = "Teacher: " + mon_teachers[2][1]
    }
    else if ((h == 10 && mins >= 30) && ( h==10 && mins <40 ))
    {
        y1t.textContent = "10 Mins Short Break 🚽🚻"
        y2t.textContent = "10 Mins Short Break 🚽🚻"
        y3t.textContent = "10 Mins Short Break 🚽🚻"


    }
    else if ((h == 10 && mins >= 40) ||( h==11 && mins <20 ))
    {
        y1s.textContent = "Subject: " + mon_timetable[0][2]
        y1t.textContent = "Teacher: " + mon_teachers[0][2]
        y2s.textContent = "Subject: " + mon_timetable[1][2]
        y2t.textContent = "Teacher: " + mon_teachers[1][2]
        y3s.textContent = "Subject: " + mon_timetable[2][2]
        y3t.textContent = "Teacher: " + mon_teachers[2][2]

    }
    else if ((h == 11 && mins >= 20) ||( h==12 && mins <10 ))
    {
        y1s.textContent = "Subject: " + mon_timetable[0][3]
        y1t.textContent = "Teacher: " + mon_teachers[0][3]
        y2s.textContent = "Subject: " + mon_timetable[1][3]
        y2t.textContent = "Teacher: " + mon_teachers[1][3]
        y3s.textContent = "Subject: " + mon_timetable[2][3]
        y3t.textContent = "Teacher: " + mon_teachers[2][3]
    }
    else if (h == 12 && mins >= 10 && mins<50)
    {
        y1t.textContent = "40 Mins lunch Break 🍜 "
        y2t.textContent = "40 Mins lunch Break 🍜"
        y3t.textContent = "40 Mins lunch Break 🍜"
         
    }
    else if ((h == 12 && mins >= 50) ||( h==13 && mins <40 ))
    {
        y1s.textContent = "Subject: " + mon_timetable[0][4]
        y1t.textContent = "Teacher: " + mon_teachers[0][4]
        y2s.textContent = "Subject: " + mon_timetable[1][4]
        y2t.textContent = "Teacher: " + mon_teachers[1][4]
        y3s.textContent = "Subject: " + mon_timetable[2][4]
        y3t.textContent = "Teacher: " + mon_teachers[2][4]

    }
    else if ((h == 13 && mins >= 40) ||( h==14 && mins <30 ))
    {
        y1s.textContent = "Subject: " + mon_timetable[0][5]
        y1t.textContent = "Teacher: " + mon_teachers[0][5]
        y2s.textContent = "Subject: " + mon_timetable[1][5]
        y2t.textContent = "Teacher: " + mon_teachers[1][5]
        y3s.textContent = "Subject: " + mon_timetable[2][5]
        y3t.textContent = "Teacher: " + mon_teachers[2][5]

    }
    else if ((h == 14 && mins >= 30) ||( h==15 && mins <20 ))
    {
        y1s.textContent = "Subject: " + mon_timetable[0][6]
        y1t.textContent = "Teacher: " + mon_teachers[0][6]
        y2s.textContent = "Subject: " + mon_timetable[1][6]
        y2t.textContent = "Teacher: " + mon_teachers[1][6]
        y3s.textContent = "Subject: " + mon_timetable[2][6]
        y3t.textContent = "Teacher: " + mon_teachers[2][6]

    }
    else if ((h == 15 && mins >= 20) ||(h>=15) || (h<=7 ))
    {
         y1s.textContent = "The College Has Ended, Happy Learning 😊!"
         y2s.textContent = "The College Has Ended, Happy Learning 😊!"
         y3s.textContent = "The College Has Ended, Happy Learning 😊!"
    }


}
function tue(h, mins){ 
    if (h <= 8 && mins <= 49)
    {
        y1t.textContent = "The Classes Starts At 8:50 , Be Prepared!" 
        y2t.textContent = "The Classes Starts At 8:50 , Be Prepared!"
        y3t.textContent = "The Classes Starts At 8:50 , Be Prepared!"

    }
    else if ((h == 8 && mins >= 50) ||( h==9 && mins <40 ))
    {
         y1s.textContent = "Subject: " + tue_timetable[0][0]
         y1t.textContent = "Teacher: " + tue_teachers[0][0]
         y2s.textContent = "Subject: " + tue_timetable[1][0]
         y2t.textContent = "Teacher: " + tue_teachers[1][0]
         y3s.textContent = "Subject: " + tue_timetable[2][0]
         y3t.textContent = "Teacher: " + tue_teachers[2][0]


    }
    else if ((h == 9 && mins >= 40) ||( h==10 && mins <30 ))
    {
        y1s.textContent = "Subject: " + tue_timetable[0][1]
        y1t.textContent = "Teacher: " + tue_teachers[0][1]
        y2s.textContent = "Subject: " + tue_timetable[1][1]
        y2t.textContent = "Teacher: " + tue_teachers[1][1]
        y3s.textContent = "Subject: " + tue_timetable[2][1]
        y3t.textContent = "Teacher: " + tue_teachers[2][1]
    }
    else if ((h == 10 && mins >= 30) && ( h==10 && mins <40 ))
    {
        y1t.textContent = "10 Mins Short Break 🚽🚻"
        y2t.textContent = "10 Mins Short Break 🚽🚻"
        y3t.textContent = "10 Mins Short Break 🚽🚻"


    }
    else if ((h == 10 && mins >= 40) ||( h==11 && mins <20 ))
    {
        y1s.textContent = "Subject: " + tue_timetable[0][2]
        y1t.textContent = "Teacher: " + tue_teachers[0][2]
        y2s.textContent = "Subject: " + tue_timetable[1][2]
        y2t.textContent = "Teacher: " + tue_teachers[1][2]
        y3s.textContent = "Subject: " + tue_timetable[2][2]
        y3t.textContent = "Teacher: " + tue_teachers[2][2]

    }
    else if ((h == 11 && mins >= 20) ||( h==12 && mins <10 ))
    {
        y1s.textContent = "Subject: " + tue_timetable[0][3]
        y1t.textContent = "Teacher: " + tue_teachers[0][3]
        y2s.textContent = "Subject: " + tue_timetable[1][3]
        y2t.textContent = "Teacher: " + tue_teachers[1][3]
        y3s.textContent = "Subject: " + tue_timetable[2][3]
        y3t.textContent = "Teacher: " + tue_teachers[2][3]
    }
    else if ((h == 12 && mins >= 10 && mins<50 ))
    {
        y1t.textContent = "40 Mins lunch Break 🍜 "
        y2t.textContent = "40 Mins lunch Break 🍜"
        y3t.textContent = "40 Mins lunch Break 🍜"
         
    }
    else if ((h == 12 && mins >= 50) ||( h==13 && mins <40 ))
    {
        y1s.textContent = "Subject: " + tue_timetable[0][4]
        y1t.textContent = "Teacher: " + tue_teachers[0][4]
        y2s.textContent = "Subject: " + tue_timetable[1][4]
        y2t.textContent = "Teacher: " + tue_teachers[1][4]
        y3s.textContent = "Subject: " + tue_timetable[2][4]
        y3t.textContent = "Teacher: " + tue_teachers[2][4]

    }
    else if ((h == 13 && mins >= 40) ||( h==14 && mins <30 ))
    {
        y1s.textContent = "Subject: " + tue_timetable[0][5]
        y1t.textContent = "Teacher: " + tue_teachers[0][5]
        y2s.textContent = "Subject: " + tue_timetable[1][5]
        y2t.textContent = "Teacher: " + tue_teachers[1][5]
        y3s.textContent = "Subject: " + tue_timetable[2][5]
        y3t.textContent = "Teacher: " + tue_teachers[2][5]

    }
    else if ((h == 14 && mins >= 30) ||( h==15 && mins <20 ))
    {
        y1s.textContent = "Subject: " + tue_timetable[0][6]
        y1t.textContent = "Teacher: " + tue_teachers[0][6]
        y2s.textContent = "Subject: " + tue_timetable[1][6]
        y2t.textContent = "Teacher: " + tue_teachers[1][6]
        y3s.textContent = "Subject: " + tue_timetable[2][6]
        y3t.textContent = "Teacher: " + tue_teachers[2][6]

    }
    else if ((h == 15 && mins >= 20) ||( h>=15 ) || (h<=7 ))
    {
         y1s.textContent = "The College Has Ended, Happy Learning 😊!"
         y2s.textContent = "The College Has Ended, Happy Learning 😊!"
         y3s.textContent = "The College Has Ended, Happy Learning 😊!"
    }
}
function wed(h, mins){ 
    if (h <= 8 && mins <= 49)
    {
        y1t.textContent = "The Classes Starts At 8:50 , Be Prepared!" 
        y2t.textContent = "The Classes Starts At 8:50 , Be Prepared!"
        y3t.textContent = "The Classes Starts At 8:50 , Be Prepared!"

    }
    else if ((h == 8 && mins >= 50) ||( h==9 && mins <40 ))
    {
         y1s.textContent = "Subject: " + wed_timetable[0][0]
         y1t.textContent = "Teacher: " + wed_teachers[0][0]
         y2s.textContent = "Subject: " + wed_timetable[1][0]
         y2t.textContent = "Teacher: " + wed_teachers[1][0]
         y3s.textContent = "Subject: " + wed_timetable[2][0]
         y3t.textContent = "Teacher: " + wed_teachers[2][0]


    }
    else if ((h == 9 && mins >= 40) ||( h==10 && mins <30 ))
    {
        y1s.textContent = "Subject: " + wed_timetable[0][1]
        y1t.textContent = "Teacher: " + wed_teachers[0][1]
        y2s.textContent = "Subject: " + wed_timetable[1][1]
        y2t.textContent = "Teacher: " + wed_teachers[1][1]
        y3s.textContent = "Subject: " + wed_timetable[2][1]
        y3t.textContent = "Teacher: " + wed_teachers[2][1]
    }
    else if ((h == 10 && mins >= 30)  && ( h==10 && mins <40 ))
    {
        y1t.textContent = "10 Mins Short Break 🚽🚻"
        y2t.textContent = "10 Mins Short Break 🚽🚻"
        y3t.textContent = "10 Mins Short Break 🚽🚻"


    }
    else if ((h == 10 && mins >= 40) || ( h==11 && mins <20 ))
    {
        y1s.textContent = "Subject: " + wed_timetable[0][2]
        y1t.textContent = "Teacher: " + wed_teachers[0][2]
        y2s.textContent = "Subject: " + wed_timetable[1][2]
        y2t.textContent = "Teacher: " + wed_teachers[1][2]
        y3s.textContent = "Subject: " + wed_timetable[2][2]
        y3t.textContent = "Teacher: " + wed_teachers[2][2]

    }
    else if ((h == 11 && mins >= 20) ||( h==12 && mins <10 ))
    {
        y1s.textContent = "Subject: " + wed_timetable[0][3]
        y1t.textContent = "Teacher: " + wed_teachers[0][3]
        y2s.textContent = "Subject: " + wed_timetable[1][3]
        y2t.textContent = "Teacher: " + wed_teachers[1][3]
        y3s.textContent = "Subject: " + wed_timetable[2][3]
        y3t.textContent = "Teacher: " + wed_teachers[2][3]
    }
    else if ((h == 12 && mins >= 10 && mins<50))
    {
        y1t.textContent = "40 Mins lunch Break 🍜 "
        y2t.textContent = "40 Mins lunch Break 🍜"
        y3t.textContent = "40 Mins lunch Break 🍜"
         
    }
    else if ((h == 12 && mins >= 50) ||( h==13 && mins <40 ))
    {
        y1s.textContent = "Subject: " + wed_timetable[0][4]
        y1t.textContent = "Teacher: " + wed_teachers[0][4]
        y2s.textContent = "Subject: " + wed_timetable[1][4]
        y2t.textContent = "Teacher: " + wed_teachers[1][4]
        y3s.textContent = "Subject: " + wed_timetable[2][4]
        y3t.textContent = "Teacher: " + wed_teachers[2][4]

    }
    else if ((h == 13 && mins >= 40) ||( h==14 && mins <30 ))
    {
        y1s.textContent = "Subject: " + wed_timetable[0][5]
        y1t.textContent = "Teacher: " + wed_teachers[0][5]
        y2s.textContent = "Subject: " + wed_timetable[1][5]
        y2t.textContent = "Teacher: " + wed_teachers[1][5]
        y3s.textContent = "Subject: " + wed_timetable[2][5]
        y3t.textContent = "Teacher: " + wed_teachers[2][5]

    }
    else if ((h == 14 && mins >= 30) ||( h==15 && mins <20 ))
    {
        y1s.textContent = "Subject: " + wed_timetable[0][6]
        y1t.textContent = "Teacher: " + wed_teachers[0][6]
        y2s.textContent = "Subject: " + wed_timetable[1][6]
        y2t.textContent = "Teacher: " + wed_teachers[1][6]
        y3s.textContent = "Subject: " + wed_timetable[2][6]
        y3t.textContent = "Teacher: " + wed_teachers[2][6]

    }
    else if ((h == 15 && mins >= 20) ||( h>=15 ) || (h<=7 ))
    {
         y1s.textContent = "The College Has Ended, Happy Learning 😊!"
         y2s.textContent = "The College Has Ended, Happy Learning 😊!"
         y3s.textContent = "The College Has Ended, Happy Learning 😊!"
    }
}
function thu(h, mins){ 
    if (h <= 8 && mins <= 49)
    {
        y1t.textContent = "The Classes Starts At 8:50 , Be Prepared!" 
        y2t.textContent = "The Classes Starts At 8:50 , Be Prepared!"
        y3t.textContent = "The Classes Starts At 8:50 , Be Prepared!"

    }
    else if ((h == 8 && mins >= 50) ||( h==9 && mins <40 ))
    {
         y1s.textContent = "Subject: " + thu_timetable[0][0]
         y1t.textContent = "Teacher: " + thu_teachers[0][0]
         y2s.textContent = "Subject: " + thu_timetable[1][0]
         y2t.textContent = "Teacher: " + thu_teachers[1][0]
         y3s.textContent = "Subject: " + thu_timetable[2][0]
         y3t.textContent = "Teacher: " + thu_teachers[2][0]


    }
    else if ((h == 9 && mins >= 40) ||( h==10 && mins <30 ))
    {
        y1s.textContent = "Subject: " + thu_timetable[0][1]
        y1t.textContent = "Teacher: " + thu_teachers[0][1]
        y2s.textContent = "Subject: " + thu_timetable[1][1]
        y2t.textContent = "Teacher: " + thu_teachers[1][1]
        y3s.textContent = "Subject: " + thu_timetable[2][1]
        y3t.textContent = "Teacher: " + thu_teachers[2][1]
    }
    else if ((h == 10 && mins >= 30) && ( h==10 && mins <40 ))
    {
        y1t.textContent = "10 Mins Short Break 🚽🚻"
        y2t.textContent = "10 Mins Short Break 🚽🚻"
        y3t.textContent = "10 Mins Short Break 🚽🚻"


    }
    else if ((h == 10 && mins >= 40) ||( h==11 && mins <20 ))
    {
        y1s.textContent = "Subject: " + thu_timetable[0][2]
        y1t.textContent = "Teacher: " + thu_teachers[0][2]
        y2s.textContent = "Subject: " + thu_timetable[1][2]
        y2t.textContent = "Teacher: " + thu_teachers[1][2]
        y3s.textContent = "Subject: " + thu_timetable[2][2]
        y3t.textContent = "Teacher: " + thu_teachers[2][2]

    }
    else if ((h == 11 && mins >= 20) ||( h==12 && mins <10 ))
    {
        y1s.textContent = "Subject: " + thu_timetable[0][3]
        y1t.textContent = "Teacher: " + thu_teachers[0][3]
        y2s.textContent = "Subject: " + thu_timetable[1][3]
        y2t.textContent = "Teacher: " + thu_teachers[1][3]
        y3s.textContent = "Subject: " + thu_timetable[2][3]
        y3t.textContent = "Teacher: " + thu_teachers[2][3]
    }
    else if (h == 12 && mins >= 10 && mins<50)
    {
        y1t.textContent = "40 Mins lunch Break 🍜 "
        y2t.textContent = "40 Mins lunch Break 🍜"
        y3t.textContent = "40 Mins lunch Break 🍜"
         
    }
    else if ((h == 12 && mins >= 50) ||( h==13 && mins <40 ))
    {
        y1s.textContent = "Subject: " + thu_timetable[0][4]
        y1t.textContent = "Teacher: " + thu_teachers[0][4]
        y2s.textContent = "Subject: " + thu_timetable[1][4]
        y2t.textContent = "Teacher: " + thu_teachers[1][4]
        y3s.textContent = "Subject: " + thu_timetable[2][4]
        y3t.textContent = "Teacher: " + thu_teachers[2][4]

    }
    else if ((h == 13 && mins >= 40) ||( h==14 && mins <30 ))
    {
        y1s.textContent = "Subject: " + thu_timetable[0][5]
        y1t.textContent = "Teacher: " + thu_teachers[0][5]
        y2s.textContent = "Subject: " + thu_timetable[1][5]
        y2t.textContent = "Teacher: " + thu_teachers[1][5]
        y3s.textContent = "Subject: " + thu_timetable[2][5]
        y3t.textContent = "Teacher: " + thu_teachers[2][5]

    }
    else if ((h == 14 && mins >= 30) ||( h==15 && mins <20 ))
    {
        y1s.textContent = "Subject: " + thu_timetable[0][6]
        y1t.textContent = "Teacher: " + thu_teachers[0][6]
        y2s.textContent = "Subject: " + thu_timetable[1][6]
        y2t.textContent = "Teacher: " + thu_teachers[1][6]
        y3s.textContent = "Subject: " + thu_timetable[2][6]
        y3t.textContent = "Teacher: " + thu_teachers[2][6]

    }
    else if ((h == 15 && mins >= 20) ||( h>=15 ) || (h<=7 ))
    {
         y1s.textContent = "The College Has Ended, Happy Learning 😊!"
         y2s.textContent = "The College Has Ended, Happy Learning 😊!"
         y3s.textContent = "The College Has Ended, Happy Learning 😊!"
    }

}
function fri(h, mins)
{
    if (h <= 8 && mins <= 49)
    {
        y1t.textContent = "The Classes Starts At 8:50 , Be Prepared!" 
        y2t.textContent = "The Classes Starts At 8:50 , Be Prepared!"
        y3t.textContent = "The Classes Starts At 8:50 , Be Prepared!"

    }
    else if ((h == 8 && mins >= 50) ||( h==9 && mins <40 ))
    {
         y1s.textContent = "Subject: " + fri_timetable[0][0]
         y1t.textContent = "Teacher: " + fri_teachers[0][0]
         y2s.textContent = "Subject: " + fri_timetable[1][0]
         y2t.textContent = "Teacher: " + fri_teachers[1][0]
         y3s.textContent = "Subject: " + fri_timetable[2][0]
         y3t.textContent = "Teacher: " + fri_teachers[2][0]


    }
    else if ((h == 9 && mins >= 40) ||( h==10 && mins <30 ))
    {
        y1s.textContent = "Subject: " + fri_timetable[0][1]
        y1t.textContent = "Teacher: " + fri_teachers[0][1]
        y2s.textContent = "Subject: " + fri_timetable[1][1]
        y2t.textContent = "Teacher: " + fri_teachers[1][1]
        y3s.textContent = "Subject: " + fri_timetable[2][1]
        y3t.textContent = "Teacher: " + fri_teachers[2][1]
    }
    else if ((h == 10 && mins >= 30) && ( h==10 && mins <40 ))
    {
        y1t.textContent = "10 Mins Short Break 🚽🚻"
        y2t.textContent = "10 Mins Short Break 🚽🚻"
        y3t.textContent = "10 Mins Short Break 🚽🚻"


    }
    else if ((h == 10 && mins >= 40) ||( h==11 && mins <20 ))
    {
        y1s.textContent = "Subject: " + fri_timetable[0][2]
        y1t.textContent = "Teacher: " + fri_teachers[0][2]
        y2s.textContent = "Subject: " + fri_timetable[1][2]
        y2t.textContent = "Teacher: " + fri_teachers[1][2]
        y3s.textContent = "Subject: " + fri_timetable[2][2]
        y3t.textContent = "Teacher: " + fri_teachers[2][2]

    }
    else if ((h == 11 && mins >= 20) ||( h==12 && mins <10 ))
    {
        y1s.textContent = "Subject: " + fri_timetable[0][3]
        y1t.textContent = "Teacher: " + fri_teachers[0][3]
        y2s.textContent = "Subject: " + fri_timetable[1][3]
        y2t.textContent = "Teacher: " + fri_teachers[1][3]
        y3s.textContent = "Subject: " + fri_timetable[2][3]
        y3t.textContent = "Teacher: " + fri_teachers[2][3]
    }
    else if (h == 12 && mins >= 10 && mins<50)
    {
        y1t.textContent = "40 Mins lunch Break 🍜 "
        y2t.textContent = "40 Mins lunch Break 🍜"
        y3t.textContent = "40 Mins lunch Break 🍜"
         
    }
    else if ((h == 12 && mins >= 50) ||( h==13 && mins <40 ))
    {
        y1s.textContent = "Subject: " + fri_timetable[0][4]
        y1t.textContent = "Teacher: " + fri_teachers[0][4]
        y2s.textContent = "Subject: " + fri_timetable[1][4]
        y2t.textContent = "Teacher: " + fri_teachers[1][4]
        y3s.textContent = "Subject: " + fri_timetable[2][4]
        y3t.textContent = "Teacher: " + fri_teachers[2][4]

    }
    else if ((h == 13 && mins >= 40) ||( h==14 && mins <30 ))
    {
        y1s.textContent = "Subject: " + fri_timetable[0][5]
        y1t.textContent = "Teacher: " + fri_teachers[0][5]
        y2s.textContent = "Subject: " + fri_timetable[1][5]
        y2t.textContent = "Teacher: " + fri_teachers[1][5]
        y3s.textContent = "Subject: " + fri_timetable[2][5]
        y3t.textContent = "Teacher: " + fri_teachers[2][5]

    }
    else if ((h == 14 && mins >= 30) ||( h==15 && mins <20 ))
    {
        y1s.textContent = "Subject: " + fri_timetable[0][6]
        y1t.textContent = "Teacher: " + fri_teachers[0][6]
        y2s.textContent = "Subject: " + fri_timetable[1][6]
        y2t.textContent = "Teacher: " + fri_teachers[1][6]
        y3s.textContent = "Subject: " + fri_timetable[2][6]
        y3t.textContent = "Teacher: " + fri_teachers[2][6]

    }
    else if ((h == 15 && mins >= 20) ||( h>=15 ) || (h<=7 ))
    {
         y1s.textContent = "The College Has Ended, Happy Learning 😊!"
         y2s.textContent = "The College Has Ended, Happy Learning 😊!"
         y3s.textContent = "The College Has Ended, Happy Learning 😊!"
    }

}
function sat(h, mins){ 
    if (h <= 8 && mins <= 49)
    {
        y1t.textContent = "The Classes Starts At 8:50 , Be Prepared!" 
        y2t.textContent = "The Classes Starts At 8:50 , Be Prepared!"
        y3t.textContent = "The Classes Starts At 8:50 , Be Prepared!"

    }
    else if ((h == 8 && mins >= 50) ||( h==9 && mins <40 ))
    {
         y1s.textContent = "Subject: " + sat_timetable[0][0]
         y1t.textContent = "Teacher: " + sat_teachers[0][0]
         y2s.textContent = "Subject: " + sat_timetable[1][0]
         y2t.textContent = "Teacher: " + sat_teachers[1][0]
         y3s.textContent = "Subject: " + sat_timetable[2][0]
         y3t.textContent = "Teacher: " + sat_teachers[2][0]


    }
    else if ((h == 9 && mins >= 40) ||( h==10 && mins <30 ))
    {
        y1s.textContent = "Subject: " + sat_timetable[0][1]
        y1t.textContent = "Teacher: " + sat_teachers[0][1]
        y2s.textContent = "Subject: " + sat_timetable[1][1]
        y2t.textContent = "Teacher: " + sat_teachers[1][1]
        y3s.textContent = "Subject: " + sat_timetable[2][1]
        y3t.textContent = "Teacher: " + sat_teachers[2][1]
    }
    else if ((h == 10 && mins >= 30) && ( h==10 && mins <40 ))
    {
        y1t.textContent = "10 Mins Short Break 🚽🚻"
        y2t.textContent = "10 Mins Short Break 🚽🚻"
        y3t.textContent = "10 Mins Short Break 🚽🚻"


    }
    else if ((h == 10 && mins >= 40) ||( h==11 && mins <20 ))
    {
        y1s.textContent = "Subject: " + sat_timetable[0][2]
        y1t.textContent = "Teacher: " + sat_teachers[0][2]
        y2s.textContent = "Subject: " + sat_timetable[1][2]
        y2t.textContent = "Teacher: " + sat_teachers[1][2]
        y3s.textContent = "Subject: " + sat_timetable[2][2]
        y3t.textContent = "Teacher: " + sat_teachers[2][2]

    }
    else if ((h == 11 && mins >= 20) ||( h==12 && mins <10 ))
    {
        y1s.textContent = "Subject: " + sat_timetable[0][3]
        y1t.textContent = "Teacher: " + sat_teachers[0][3]
        y2s.textContent = "Subject: " + sat_timetable[1][3]
        y2t.textContent = "Teacher: " + sat_teachers[1][3]
        y3s.textContent = "Subject: " + sat_timetable[2][3]
        y3t.textContent = "Teacher: " + sat_teachers[2][3]
    }
    else if (h == 12 && mins >= 10 && mins<50)
    {
        y1t.textContent = "40 Mins lunch Break 🍜 "
        y2t.textContent = "40 Mins lunch Break 🍜"
        y3t.textContent = "40 Mins lunch Break 🍜"
         
    }
    else if ((h == 12 && mins >= 50) ||( h==13 && mins <40 ))
    {
        y1s.textContent = "Subject: " + sat_timetable[0][4]
        y1t.textContent = "Teacher: " + sat_teachers[0][4]
        y2s.textContent = "Subject: " + sat_timetable[1][4]
        y2t.textContent = "Teacher: " + sat_teachers[1][4]
        y3s.textContent = "Subject: " + sat_timetable[2][4]
        y3t.textContent = "Teacher: " + sat_teachers[2][4]

    }
    else if ((h == 13 && mins >= 40) ||( h==14 && mins <30 ))
    {
        y1s.textContent = "Subject: " + sat_timetable[0][5]
        y1t.textContent = "Teacher: " + sat_teachers[0][5]
        y2s.textContent = "Subject: " + sat_timetable[1][5]
        y2t.textContent = "Teacher: " + sat_teachers[1][5]
        y3s.textContent = "Subject: " + sat_timetable[2][5]
        y3t.textContent = "Teacher: " + sat_teachers[2][5]

    }
    else if ((h == 14 && mins >= 30) ||( h==15 && mins <20 ))
    {
        y1s.textContent = "Subject: " + sat_timetable[0][6]
        y1t.textContent = "Teacher: " + sat_teachers[0][6]
        y2s.textContent = "Subject: " + sat_timetable[1][6]
        y2t.textContent = "Teacher: " + sat_teachers[1][6]
        y3s.textContent = "Subject: " + sat_timetable[2][6]
        y3t.textContent = "Teacher: " + sat_teachers[2][6]

    }
    else if ((h == 15 && mins >= 20) ||( h>=15 ) || (h<=7 ))
    {
         y1s.textContent = "The College Has Ended, Happy Learning 😊!"
         y2s.textContent = "The College Has Ended, Happy Learning 😊!"
         y3s.textContent = "The College Has Ended, Happy Learning 😊!"
    }

}
