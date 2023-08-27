import React, { useState, useEffect } from "react";
import "./home.css";
import { Col, Row, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";

// register Handsontable's modules

registerAllModules();
function Holiday() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const tableData = [];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
        <Col md={2} style={{ marginBottom: "10px" }}>
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
            <div className="time">{currentTime.toLocaleTimeString()}</div>
          </div>
        </Col>
        <Col md={10}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select style={{width: 300, height : 50}}>
                    <option value={10}>Mr.Thanarat Sanrum(Tan)</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <HotTable
            data={tableData}
            colHeaders={["Date", "Start", "Stop", "Reason", "Note"]}
            columns={columns}
            height="auto"
            licenseKey="non-commercial-and-evaluation"
            width="100%"
            colWidths={[300, 300, 300, 300, 870]}
          />
        </Col>
      </Row>
    </>
  );
}
export default Holiday;
