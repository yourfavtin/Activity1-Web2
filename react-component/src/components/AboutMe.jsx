function About() {
    return (
      <div className="p-4 border-2 border-black rounded-lg shadow-lg mt-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h2 className="font-bold text-2xl text-center">Facts About Me</h2>
        <ul className="list-disc ml-5">
          <li>Online Gamer</li>
          <li>Only Child</li>
          <li>Explorer</li>
        </ul>
        <h2 className="font-bold text-2xl text-center">Hobbies</h2>
        <ul className="list-disc ml-5">
          <li>Cycling</li>
          <li>Learning New Programming Language</li>
          <li>Team Sports</li>
        </ul>
      </div>
    );
  }
  
  export default About;
  