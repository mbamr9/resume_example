import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";

import "./TimeLine.css";
import { TimelineContent } from "@mui/lab";
import { Typography } from "@mui/material";

const TimeLine = ({ title, children, icon }) => {
  return (
    <Timeline className={"timeline"}>
      <TimelineItem className={"timeline_first_item"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline_header">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
};
export const CustomTimelineSepatrator = () => {
  return (
    <TimelineSeparator className="seperator_padding">

      <TimelineDot variant={"outlined"} className={"timeline_dot"} />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default TimeLine;
