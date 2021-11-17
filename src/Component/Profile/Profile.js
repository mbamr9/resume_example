import { Typography } from "@mui/material";
import React from "react";
import "./Profile.css";
import ResumeData from "../../Utiles/ResumeData";
import TimeLine, { CustomTimelineSepatrator } from "../TimeLine/TimeLine";
import firstimg from "../../Assets/Images/img.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { TimelineContent, TimelineItem } from "@mui/lab";
import CustomButton from "../Button/Button";
import DownloadIcon from "@mui/icons-material/Download";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSepatrator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          <a href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile  container_shadow">
      <div className="profile_name">
        <Typography className="name">{ResumeData.name} </Typography>
        <Typography className="title">{ResumeData.title}</Typography>
      </div>

      <div className="profile_image">
        <img src={firstimg} alt="noconnection" />
      </div>
      <div className="profile_information">
        <TimeLine icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title="Name" text={ResumeData.name} />
          <CustomTimelineItem title="Title" text={ResumeData.title} />
          <CustomTimelineItem title="Email" text={ResumeData.Email} />

          {Object.keys(ResumeData.socials).map((social) => {
            return (
              <CustomTimelineItem
                key={social}
                title={social}
                text={ResumeData.socials[social].text}
                link={ResumeData.socials[social].link}
              />
            );
          })}
        </TimeLine>

        <br />
        <div className="button_container">
          {" "}
          <CustomButton
            text={"Download CV"}
            icon={<DownloadIcon />}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
