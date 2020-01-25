import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import Selection from "./Selection";
import Submission from "./Submission";
import data from "../constants/CourseData";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export default function TabSelector({ array, newIFrame }) {
  return (
    <div>
      <Tabs
        tabPosition="left"
        onChange={key => {
          // Split bc this tabpane sucks
          let split_key = key.split(",");
          let crn = split_key[0];
          let termName = split_key[1];
          newIFrame(crn, termName);
        }}
      >
        {array.map(elem => (
          <TabPane
            key={elem["crn"] + "," + elem["termName"]}
            tab={
              elem["instructors"].split(",")[0] +
              " " +
              elem["termName"].slice(elem["termName"].length - 2)
            }
          >
            <Submission CRN={elem["crn"]} term={elem["termName"]} show={true} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}
