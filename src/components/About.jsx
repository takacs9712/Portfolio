import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {   
        company: 'P&M Solutions Kft.',
        year: 2023,
        title: 'Frontend Developer',
        duration: 'Consultant',
        details: 'As a Frontend Developer, my responsibility involves creating visually appealing and user-friendly websites and web applications using various frameworks, such as React JS or TS. I take care of performance optimization and ensure compatibility across different devices while collaborating with UX designers and backend developers. Proficiency in frontend technologies, responsive design, and understanding UX principles is crucial.'
    },
    {   
        company: 'Webwise Hungary Kft',
        year: 2022,
        title: 'Customer Success Manager',
        duration: '1 Year',
        details: 'Dedicated to optimizing the user experience, driving app adoption, and maximizing customer satisfaction. Facilitates smooth onboarding, offers personalized support, and anticipates user needs to foster long-term engagement and loyalty.'
    },
    {   
        company: 'Gazdafi Electronic Kft.',
        year: 2021,
        title: 'Marketing Assistant',
        duration: '4 months',
        details: ' I held an essential support role in market research, content creation, sales, product management, data analysis, event organization, customer support, and digital marketing efforts. I was an integral part of the team, contributing to the marketing success of the company or organization.'
    },
    {   
        company: 'Magyar Telekom Nyrt.',
        year: 2020,
        title: 'Help Desk',
        duration: '1 Year',
        details: 'As a skilled IT Support Specialist, I was dedicated to delivering efficient and reliable technical assistance to users and clients. My responsibilities encompassed a wide range of tasks, including troubleshooting hardware and software issues, diagnosing technical problems, and providing timely solutions to ensure smooth operations.'
    },
]

const About = () => {
  return (
    <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-8'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            company={item.company}
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details}
            />
        ))}

    </div>
  )
}

export default About