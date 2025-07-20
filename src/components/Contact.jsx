import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Contact = () => {
  const { textColor, mode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: ""
  });
  const [client, setClient] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [error, setError] = useState({});

  const addClient = (e) => {
    e.preventDefault();
    if (!validation()) return
    const clientWithId = { ...formData, id: nextId };
    setClient([...client, clientWithId]);
    setNextId(prev => prev + 1);
    setFormData({
      Name: "",
      Email: "",
      Message: ""
    });

  }

  const validation = () => {
    let errors = {}

    if (!formData.Name.trim()) errors.Name = "Name is required";
    if (!formData.Email.trim()) errors.Email = "Email is required";
    if (!formData.Message.trim()) errors.Message = "Message is required";

    setError(errors);
    return Object.keys(errors).length === 0;
  }

  return (
    <section id="contact" className={`py-6 flex justify-between items-center bg-white ${mode}:bg-gray-800 border ${mode}:border-gray-700 p-4 rounded-lg shadow-md relative`}>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className={`text-3xl font-bold mb-12 text-center ${textColor}`}>Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Contact Information</h3>
            <p className={`mb-6 ${textColor}`}>Feel free to reach out if you're looking for a developer or just want to connect.</p>
            <div className="space-y-4">
              <div>
                <a href="mailto:pranavbane987@gmail.com" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-envelope mx-3 ${textColor}`} viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  <span className={`${textColor}`}>pranavbane987@gmail.com</span>
                </a>
              </div>
              <div>
                <a href="tel:+917039312133" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-telephone mx-3 ${textColor}`} viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <span className={`${textColor}`}>+91 7039312133</span>
                </a>
              </div>
              <div>
                <a href="https://www.google.com/maps/search/?q=Bedekar+Nager+Diva,+Thane"
                  target="_blank"
                  rel="noopener noreferrer" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-geo-alt mx-3 ${textColor}`} viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <span className={`${textColor}`}>Bedekar Nager Diva, Thane</span>
                </a>
              </div>
            </div>
            <div className="mt-8">
              <h4 className={`${textColor} font-semibold mb-4`}>Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" target="_blank" className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition" title="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
                <a href="#" target="_blank" className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition" title="Linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/xx___pranav___xx" target="_blank" className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition" title="Instragram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={addClient}>
            <div>
              <label htmlFor="name" className={`${textColor} block mb-2 font-medium`}>Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700" placeholder="Your name" value={formData.Name} onChange={(e) => setFormData({ ...formData, Name: e.target.value })} />
              {error.Name && <span className="text-red-500">{error.Name}</span>}
            </div>
            <div>
              <label htmlFor="email" className={`${textColor} block mb-2 font-medium`}>Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700" placeholder="Your email" value={formData.Email} onChange={(e) => setFormData({ ...formData, Email: e.target.value })} />
              {error.Email && <span className="text-red-500">{error.Email}</span>}
            </div>
            <div>
              <label htmlFor="message" className={`${textColor} block mb-2 font-medium`}>Message</label>
              <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700" placeholder="Your message" value={formData.Message} onChange={(e) => setFormData({ ...formData, Message: e.target.value })}></textarea>
              {error.Message && <span className="text-red-500">{error.Message}</span>}
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
