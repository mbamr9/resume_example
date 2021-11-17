import React  from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { GitHub, Language, WavesOutlined, YouTube } from '@mui/icons-material';
import WorkIcon from '@mui/icons-material/Work';
 const ResumeData= {
    name:' coding ',
    title:'full stack developer',
    
    birthday:'134',
    Email:'mbads',
    address:'vancdasfu ',
    phone:'3214124',

    socials:{
        telegram:{
            link: 'https://t.me/hadeis_eska',
            text: 'TLink',
            icon:<TelegramIcon />
        },
        instagram:{
            link: 'https://wd',
            text: 'ILink',
            icon: <InstagramIcon />
        },
        github:{
            link: 'https://github.com/mbamr9',
            text: 'github',
            icon: <GitHubIcon />
        }


    },
    experiences:[
        {
            title:'work one ',
            data: '2008 ',
            description:'working in the icecream shop  ',
        },
        {
            title:'work 2 ',
            data: '2026 ',
            description:'working in the icecream shop  ',
        },
        {
            title:'work 3 ',
            data: '2014 ',
            description:'working in the icecream shop  ',
        },
    ],
    education:[
        {
            title:'education one ',
            data: '2008 ',
            description:'working in the icecream shop  ',
        },
        {
            title:'education 2 ',
            data: '2026 ',
            description:'working in the icecream shop  ',
        },
        {
            title:'education 3 ',
            data: '2014 ',
            description:'working in the icecream shop  ',
        },
    ],
    services:[
        {
            title:'web dev',
            description:'I have been web developer for 10 years',
            icon:<WorkIcon />,
        },
        {
            title:'branding identity',
            description:'I have been webbalbv a;orgijqe[rofhiwor 10 years',
            icon:<WavesOutlined />,
        },
        {
            title:'illustrator',
            description:'I have been web developer for 10 a;orsighw-qrfojyears',
            icon:<WavesOutlined />,
        }, 
         {
            title:'illustrator',
            description:'I have been web developgroihaskvjasdlkcj]w-qrfojyears',
            icon:<WavesOutlined />,
        },
    ],
    skills:[{
           title:"front-end",
         description:[
             "React Js",
             "JavaScroipt",
             "Bootstrap",
             "material UI",
             "sass",
             ],
            },
            {
              title:"Back-End",
              description:["NodeJs" , "cpp" , "php" ,"java"]
            },
            {
                title:"DataBase",
                description:["Mongo" , "sql" ]
             },
             {
                title:"Surce-Control",
                description:["github" , "git" ]
             },
      
    ],
   
   portfolio:[

         {
             tag:'React',
             image:'',
             title:'Project 1',
             description:'this is my project description ',
             link:[
                 {link:'https://www.google.com',icon:<YouTube/>},
                 {link:'https://www.google.com',icon:<GitHub/>},
                 {link:'https://www.google.com',icon:<Language/>},
             ]
         },
   ]
   ,
    about:'I am from iran , I am traing to be web developer ,I saw many differrent cources on YouTube and Udemy and iranian site . I tinking that I am at the start point  of this journey.  for me web development is very hard and frastrating beacuse I get stuck in bugs every day however I fix that bugs . . . '
}

export default ResumeData