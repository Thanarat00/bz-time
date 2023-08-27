import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./floor.css";
import { Calendar, Whisper, Popover, Badge } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

function getTodoList(date) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: '10:30 am', title: 'Meeting' },
        { time: '12:00 pm', title: 'Lunch' }
      ];
    case 15:
      return [
        { time: '09:30 pm', title: 'Products Introduction Meeting' },
        { time: '12:30 pm', title: 'Client entertaining' },
        { time: '02:00 pm', title: 'Product design discussion' },
        { time: '05:00 pm', title: 'Product test and acceptance' },
        { time: '06:30 pm', title: 'Reporting' },
        { time: '10:00 pm', title: 'Going home to walk the dog' }
      ];
    default:
      return [];
  }
}

function renderCell(date) {
  const list = getTodoList(date);
  const displayList = list.filter((item, index) => index < 2);

  if (list.length) {
    const moreCount = list.length - displayList.length;
    const moreItem = (
      <li>
        <Whisper
          placement="top"
          trigger="click"
          speaker={
            <Popover>
              {list.map((item, index) => (
                <p key={index}>
                  <b>{item.time}</b> - {item.title}
                </p>
              ))}
            </Popover>
          }
        >
          <a>{moreCount} more</a>
        </Whisper>
      </li>
    );

    return (
      <ul className="calendar-todo-list">
        {displayList.map((item, index) => (
          <li key={index}>
            <Badge /> <b>{item.time}</b> - {item.title}
          </li>
        ))}
        {moreCount ? moreItem : null}
      </ul>
    );
  }

  return null;
}
function Photo_edit( ) {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [checkBoxTodayChecked, setCheckBoxTodayChecked] = useState(false);
  const [checkBoxMonthChecked, setCheckBoxMonthChecked] = useState(false);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const calendarDays = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(
      <div key={`empty-${i}`} className="calendar-day empty" />
    );
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(
      <div key={`day-${i}`} className="calendar-day">
        {i}
      </div>
    );
  }

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  const handleCheckBoxTodayChange = (event) => {
    setCheckBoxTodayChecked(event.target.checked);

    if (event.target.checked) {
      const today = new Date().toISOString().substr(0, 10);
      setFromDate(today);
      setToDate(today);
    } else {
      setFromDate("");
      setToDate("");
    }
  };

  const handleCheckBoxMonthChange = (event) => {
    setCheckBoxMonthChecked(event.target.checked);

    if (event.target.checked) {
      const currentDate = new Date();
      const lastDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );
      const lastDay = lastDayOfMonth.toISOString().substr(0, 10);
      setToDate(lastDay);
    } else {
      setToDate("");
    }
  };

  return (
    <div>
      <Row>
        <Col md={2} className="input-container">
          <div>
            <label>From</label>
            <input
              type="date"
              value={fromDate}
              onChange={handleFromDateChange}
            />
          </div>
          <div>
            <label>To </label>
            <input type="date" value={toDate} onChange={handleToDateChange} />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={checkBoxTodayChecked}
                onChange={handleCheckBoxTodayChange}
              />
              Today
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkBoxMonthChecked}
                onChange={handleCheckBoxMonthChange}
              />
              Month
            </label>
          </div>
          <Row>
            <Col md={12}>
              <Button variant="primary" className="custom-button">
                asdsasa
              </Button>
              <Button variant="primary" className="custom-button">
                asdsasa
              </Button>
              <Button variant="primary" className="custom-button">
                asdsasa
              </Button>
              <Button variant="primary" className="custom-button">
                asdsasa
              </Button>
              <Button variant="primary" className="custom-button">
                asdsasa
              </Button>
              <Button variant="primary" className="custom-button">
                asdsasa
              </Button>
              <Button variant="primary" className="custom-button">
                asdsasa
              </Button>
              <Button variant="primary" className="custom-button">
                asdsasa
              </Button>
              <Button variant="primary" className="custom-button">
                asdsasa
              </Button>
              <Button variant="primary" className="custom-button">
                asdsasa
              </Button>
            </Col>
          </Row>
        </Col>
        <Col>
        <Calendar bordered renderCell={renderCell} />
        </Col>
      </Row>
    </div>
  );
}

export default Photo_edit;
