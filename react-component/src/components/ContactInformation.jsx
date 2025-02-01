function Contact(props) {
    return (
      <div className="p-4 border-2 border-black rounded-lg shadow-lg mt-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h2 className="font-bold text-2xl text-center">Contact Information</h2>
            <div className="mt-5 gap-6">
                <p><strong> Email : </strong><a href="#" className="text-blue-500"> {props.Email} </a></p><br></br>
                <p> <strong>Phone : </strong> <a href="#" className="text-blue-500"> {props.Phone} </a></p><br></br>
                <p><strong>Address :</strong> <a href="#" className="text-blue-500"> {props.Address}</a></p>
            </div>
            
      </div>
    );
  }
  
  export default Contact;
  