window.onload = function(){
    var now = new Date(); // 현재 날짜
    var nowmonth = new Date(now.getFullYear(),now.getMonth()); // 21년 6월 1일

    changehead(nowmonth); // 현재 년월을 기록
    buildCalendar(nowmonth); // 달력 작성하는 함수

};
function selectMonth(){
    var yearMonth = document.getElementById('selectMonth').value;
    var selectYearMonth = new Date(yearMonth);
    changehead(selectYearMonth); // 입력된 년월을 기록
    buildCalendar(selectYearMonth);
}

function changehead(selectDate){ // 작성된 년월 표기
    document.getElementById('head').innerHTML
        = selectDate.getFullYear()+'년'+(selectDate.getMonth()+1)+'월'
}
function buildCalendar(selectDate){
    //alert('달력작성');
    var calendar = document.getElementById('calendarBody');
    calendar.innerHTML='';

    var monthLastDay = lastDate(selectDate); // 마지막 날짜
    var weekInfo = selectDate.getDay(); // 주 정보를 가져오기 일요일0, 월1~토6
    var dateCnt = selectDate.getDate()-weekInfo;

    while(true){ // 주간 반복 : 행
        var weekLine = document.createElement('tr');
        for(var weekCnt=0;weekCnt<7;weekCnt++){// 날짜 반복(7번 반복)
            var weekDay = document.createElement('td');
            if(0<dateCnt && dateCnt<=monthLastDay){
                weekDay.innerHTML = dateCnt; // 날짜를 기록
            }
            dateCnt++;
            weekLine.appendChild(weekDay);
        }
        calendar.appendChild(weekLine);
        if(dateCnt>monthLastDay){
            break;
        }
    }

}
function lastDate(selectDate){ //각 달의 마지막 날짜
    var year = selectDate.getFullYear();
    var month = selectDate.getMonth();

    var monthArr = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(((year%4==0) && (year%100!=0)) || (year%400==0)){
        monthArr[1] = 29;
    }
    return monthArr[month];
}