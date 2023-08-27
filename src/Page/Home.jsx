import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import { Col, Row, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";

// register Handsontable's modules

registerAllModules();
function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startButtonDisabled, setStartButtonDisabled] = useState(false);
  const [stopButtonDisabled, setStopButtonDisabled] = useState(true);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [checkBoxTodayChecked, setCheckBoxTodayChecked] = useState(false);
  const [checkBoxMonthChecked, setCheckBoxMonthChecked] = useState(false);
  const [starttime, setStarttime] = useState();
  const [stoptime, setStoptime] = useState();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleStartClick = () => {
    const currentDate = new Date();
    const formattedCurrentDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;

    if (formattedCurrentDate === tableData[0][0]) {
      setStartButtonDisabled(true);
      setStopButtonDisabled(false);
      const currentTime = currentDate.toLocaleTimeString([], { hour12: false });
      setStarttime(currentTime);
      setStoptime("");

      // Update the tableData to show the current time in the "Start" column
      const updatedTableData = tableData.map((row) => {
        if (row[0] === formattedCurrentDate) {
          return [row[0], currentTime, row[2], row[3], row[4]];
        }
        return row;
      });
      setTableData(updatedTableData); // Update the tableData state

      // Update the HotTable display with the new data
      const rowToUpdate = tableData.findIndex(
        (row) => row[0] === formattedCurrentDate
      );
      if (rowToUpdate !== -1) {
        const hotTableInstance = hotTableRef.current.hotInstance;
        hotTableInstance.setDataAtCell(rowToUpdate, 1, currentTime); // Update the "Start" column
      }
    } else {
      console.log("You can only start timer for the current date.");
    }
  };
  const hotTableRef = useRef(null);

  const handleStopClick = () => {
    setStartButtonDisabled(false);
    setStopButtonDisabled(true);
    setStoptime(new Date().toLocaleTimeString([], { hour12: false }));

    const updatedTableData = tableData.map((row) => {
      return [row[0], row[1], row[2], stoptime, row[4]];
    });

    setTableData(updatedTableData);
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const newData = [];

    for (let day = 1; day <= 31; day++) {
      const formattedDate = `${day}/${currentMonth + 1}/${currentYear}`;
      newData.push([formattedDate, starttime, stoptime, "", ""]);
    }

    setTableData(newData);
  }, [starttime, stoptime]);
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

  const dayOfWeek = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const day = currentTime.getDate();
  const month = currentTime.toLocaleDateString("en-US", { month: "long" });
  const year = currentTime.getFullYear();

  const columns = [
    { editor: false }, // Custom renderer for the "Date" column
    { editor: false, defaultValue: "" },
    { editor: false, defaultValue: "" },
    {
      type: "dropdown",
      source: [
        "yellow",
        "red",
        "orange",
        "green",
        "blue",
        "gray",
        "black",
        "white",
      ],
    },
    { type: "text", defaultValue: "" },
  ];

  return (
    <>
      <Row>
        <Col md={2}>
          <div className="home">
            <div className="left-table">
              <div className="info">
                <p>
                  {day} {month} {year}
                </p>
              </div>
              <div className="info">
                <p>{dayOfWeek}</p>
              </div>
            </div>
            <div className="time">
              {currentTime.toLocaleTimeString([], { hour12: false })}
            </div>
          </div>
        </Col>
        <Col md={10}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Work Shift (เวลาทำงาน)</th>
                <th>Team</th>
                <th>Office</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mr.Thanarat Saneum(Tan)</td>
                <td>08:00-17:00</td>
                <td>Dev</td>
                <td>Pattaya</td>
              </tr>
            </tbody>
          </Table>
          <Button
            onClick={handleStartClick}
            disabled={startButtonDisabled}
            style={{ backgroundColor: startButtonDisabled ? "red" : "" }}
            className="btn1"
          >
            start
          </Button>
          <Button
            onClick={handleStopClick}
            disabled={stopButtonDisabled}
            style={{ backgroundColor: stopButtonDisabled ? "red" : "" }}
            className="btn1 "
          >
            stop
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={2}>
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
        </Col>
        <Col md={10}>
          <HotTable
            ref={hotTableRef}
            data={tableData}
            colHeaders={["Date", "Start", "Stop", "Reason", "Note"]}
            columns={columns}
            height="auto"
            licenseKey="non-commercial-and-evaluation"
            width="100%"
            colWidths={[220, 220, 220, 240, 800]}
            style={{ textAlign: "center" }}
            settings={{
              afterChange: () => {
                // This triggers a re-render of HotTable when data changes
                // It's necessary to update the HotTable display
              },
            }}
          />
        </Col>
      </Row>
    </>
  );
}
export default Home;
