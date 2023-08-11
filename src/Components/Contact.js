const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-xl">Contact Us.</h1>
      <form className="p-4">
        <div className="p-4">
          <h2 className="font-light">Name</h2>
          <input className="border rounded-xl border-black p-2" type="text" value="" placeholder="name"/>
        </div>
        <div className="p-4">
          <h2 className="font-light">Email</h2>
          <input className="border rounded-xl border-black p-2" type="text" value="" placeholder="email"/>
        </div>
        <div className="p-4">
          <h2 className="font-light">Message</h2>
          <input className="border rounded-xl border-black p-2" type="text" value="" placeholder="message"/>
        </div>
        <button className="bordered border-black p-4 bg-gray-400 rounded-xl">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
