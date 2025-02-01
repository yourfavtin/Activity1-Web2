const skills = [
    { name: "JavaScript", level: 70 },
    { name: "React", level: 30 },
    { name: "CSS", level: 90 },
    { name: "HTML", level: 95 },
    { name: "Node.js", level: 20 },
  ];
  
  function Skills() {
    return (
      <div className="p-4 border-2 border-black rounded-lg shadow-lg mt-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h2 className="font-bold text-2xl text-center">Skills</h2>
        {skills.map((skill) => (
          <div key={skill.name} className="mt-2">
            <p>{skill.name}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Skills;
  