import React from 'react'

const ProjectsScreen = () => {
  const projects = [
    {
      title: "project1",
      description: "this is project 1",
      imageUrl: "/project1.png",
      projectUrl: "/project1"
    },
    {
      title: "project2",
      description: "this is project 2",
      imageUrl: "/project2.png",
      projectUrl: "/project2"
    },
    {
      title: "project3",
      description: "this is project 3",
      projectUrl: "/project3",
      imageUrl: "/project3.png"
    }
  ]

  const experience = [
    {
      title: "experience1",
      description: "this is experience 1",
      startDate: "Jan 2020",
      endDate: "Dec 2020",
    },
    {
      title: "experience2",
      description: "this is experience 2",
      startDate: "Jan 2021",
      endDate: "Dec 2021",
    }
  ]
  return(
    <div className="h-full w-full">
      <div className='text-black flex gap-[10vw] items-start justify-center mt-[4vh]'>
        <div className='bg-white w-[32vw] h-auto'>Projects</div>
        <div className='bg-white w-[32vw] h-auto'>Experience</div>
      </div>
      <div></div>
    </div>
  )
}

export default ProjectsScreen