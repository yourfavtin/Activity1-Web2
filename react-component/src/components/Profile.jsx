import photo from '/Tin2.jpg'

function Profile(props) {
  return (
    <div className="text-center">
      <img
        src={photo} 
        alt="HAHAHAHAH"
        className="rounded-full mx-auto w-32 h-32 object-cover"
      />
      <h1 className="text-2xl font-bold mt-2">{props.name}</h1>
      <p className="text-gray-600">BSIT 2-A Major In Treating You Better with Pure Intention, Time, Assurance,
        pang long term at di pang lowkey lang
      </p>
    </div>
  );
}

export default Profile;
