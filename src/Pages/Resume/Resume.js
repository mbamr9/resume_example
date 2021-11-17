import { Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import "./Resume.css";
import ResumeData from "../../Utiles/ResumeData";
import WorkIcon from "@mui/icons-material/Work";
import Icon from "@mui/material/Icon";
import CustomButton from "../../Component/Button/Button"
import SendIcon from '@mui/icons-material/Send';
import TimeLine, {
  CustomTimelineSepatrator,
} from "../../Component/TimeLine/TimeLine";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import SchoolIcon from "@mui/icons-material/School";
const Resume = () => {
  return (
    <>
      {/* about me */}
      <Grid container className="section">
        <Grid item className="section_title mb-4">
          <span></span>
          <h3 variant="h5">About Me</h3>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h9" className="aboutme_tex">
            {" "}
            {ResumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* experiences and educatons  */}
      <Grid container className="section">
        <Grid item className="section_title mb-4">
          <span></span>
          <h3 variant="h5">Resume </h3>
        </Grid>

        <Grid item xs={12} className="resume_timeline">
          <Grid container>
            {/* working history */}
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TimeLine title="work Experience" icon={<WorkIcon />}>
                {ResumeData.experiences.map((exp) => {
                  return (
                    <TimelineItem>
                      <CustomTimelineSepatrator />
                      <TimelineContent>
                        <Typography className="timeline_title">
                          {exp.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {exp.data}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {exp.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </TimeLine>
            </Grid>

            {/* education  */}
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TimeLine title="education" icon={<WorkIcon />}>
                {ResumeData.education.map((educate) => {
                  return (
                    <TimelineItem>
                      <CustomTimelineSepatrator />
                      <TimelineContent>
                        <Typography className="timeline_title">
                          {educate.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {educate.data}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {educate.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </TimeLine>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* services */}
      <Grid container className="section">
        <Grid item className="section_title mb-4">
          <span></span>
          <h3 className="section_title_text" variant="h5">
            My service{" "}
          </h3>
        </Grid>

        <Grid container spacing={2}>
          {ResumeData.services.map((service) => {
            return (
              <Grid item xs={12} sm={3} md={3}>
                <div className="service mb-5">
                  <div className="service_icon m-1"> {service.icon} </div>
                  <Typography variant="h5" className="service_title">
                    {" "}
                    {service.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {" "}
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      {/* skills */}
      <Grid
        container
        spacing={3}
        justify="space-between"
        className="section graybg "
      >
        {ResumeData.skills.map((skill) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={0}>
                <Typography variant="h6" className="skills_title">
                  {skill.title}
                </Typography>
                {skill.description.map((el) => {
                  return (
                    <Typography variant="body2" className="skil_description">
                      <TimelineDot
                        variant={"outlined"}
                        className="timeline_dot"
                      />
                      {el}
                    </Typography>
                  );
                })}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      {/* contact */}
      <Grid container className="section" spacing={2}>
        <Grid item xs={6}  lg={6} md={6} className="mt-4">
          <Grid container>
            <Grid item className="section_title mb-4">
              <span></span>
              <h3 variant="h5"> Contact form</h3>
            </Grid>
          </Grid>
        
        <Grid item >
          <Grid container>
            <Grid item xs={6} sm={6} className="section_title mb-4">
              <TextField fullWidth name='name' label='Name'></TextField>
            </Grid>
            <Grid item xs={6} sm={6} className="section_title mb-4">
              <TextField fullWidth name='email' label='email'></TextField>
            </Grid>
            <Grid item xs={12} sm={12} className="section_title mb-4">
              <TextField fullWidth name='message' label='message ' multiline rows={4 }></TextField>
            </Grid>
            <Grid item xs={12}>
              <CustomButton  text="send" icon={<SendIcon/>}/>
            </Grid>
          </Grid>
        </Grid>
        </Grid>

        {/* contact info */}

        <Grid item xs={6} lg={6} md={6} className="mt-4">
           <Grid container>
           <Grid item className="section_title mb-4">
              <span></span>
              <h3 variant="h5"> Contact iformation</h3>
            </Grid>
  
              <Grid item xs={12}   >
                <Grid container  spacing={2}>
                <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <span> phone:</span> {ResumeData.phone}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <span> Email:</span> {ResumeData.Email}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} >
                    <Typography className="contactInfo_item">
                      <span> Address:</span> {ResumeData.address}
                    </Typography>
                  </Grid>
                 
                  
                  
                </Grid>
              </Grid>
           </Grid>

        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
