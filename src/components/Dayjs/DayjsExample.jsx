import React, { useRef, useState } from 'react'
import moment from 'moment-timezone';
import "moment/locale/ko";
import dayjs from "dayjs";
import "dayjs/locale/ko";

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.locale("ko");
dayjs.extend(utc);
dayjs.extend(timezone);


export default function DayjsExample() {

    const birthDayRef = useRef(null);
    const [day,setDay] = useState("");
    const handleBir = (event) => {
        setDay(dayjs(event.target.value, "YYYY-MM-DD").format("dddd"));
    };

    const dayjsDate = dayjs();
    const newDayjsDate = dayjsDate.add(1, "week");
    const cloneNewDayjsDate = newDayjsDate.add(1, "week");
    return (
        <div>
            <h1>Dayjs</h1>
            <div>Immutable Check</div>
            <div>
                {dayjsDate.format()}
                <br />
                {newDayjsDate.format()}
                <br />
                {cloneNewDayjsDate.format()}
                <br />
            </div>
            <br />
            <div>Summer Time (New york)</div>
            <div>{dayjs.tz.guess()}</div>
            <div>2018년 3월 10일 13시에 하루 더하기:
                {dayjs.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format()}
            </div>

            <div>2018년 3월 10일 13시에 24시간 더하기:
                {dayjs.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour").format()}
            </div>



            <br />
            <div>Leap year (Korea)</div>
            <div>2017년 1월 1일에 1년 빼기:
                {dayjs("2017-01-01").subtract(1, "year").format()}
            </div>
            <div>
                2017년 1월 1일에 365일 빼기:
                {dayjs("2017-01-01").subtract(365, "day").format()}
            </div>
            <br />
            <div>한국어로 표기 (07-17-2021을 2021년 7월 21일로 표기하기)</div>
            <div>{dayjs("07-17-2021").format("YYYY년 MM월 DD일")}</div>
            <br />
            <div>자기 생일 찾기</div>
            <div>
                <input type="date" ref={birthDayRef} onChange={handleBir} />
                <div> 무슨 요일이었을까?</div>
                <div>{day}</div>
            </div>

            <div>두 날짜 비교</div>
            <div>
                <div>2021-07-17 03:00 과 2021-07-18 02:00은 몇시간 차이인가</div>
                <div>{`${dayjs("2021-07-17 03:00").diff(dayjs("2021-07-18 02:00"), "hours")}시간`}</div>
            </div>
        </div>
    )
}
