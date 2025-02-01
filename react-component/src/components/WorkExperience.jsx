function Experience() {
    return (
      <div className="p-4 border-2 border-black rounded-lg shadow-lg mt-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h2 className="font-bold text-2xl text-center">Work Experience</h2>
        <div>
          <h3 className="font-semibold">Frontend Developer at Tech Corp</h3>
          <p>Jan 2020 - Present</p>
          <p>Developing and maintaining the front end of the company website.</p>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Web Developer at Web Solutions</h3>
          <p>Jun 2018 - Dec 2019</p>
          <p>Worked on various web development projects for clients.</p>
        </div>
      </div>
    );
  }
  
  export default Experience;