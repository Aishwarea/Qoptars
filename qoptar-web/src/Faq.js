import React from "react";

function Faq() {
  return (
    <div className="Faq w-3/4 mx-auto pb-20">
      <h2 className="text-3xl text-white font-medium py-5">
        Want to say hello?
        <br />
        Have questions?
        <br />
        Feel free to contact us.
      </h2>
      <div className="py-5 text-white">
        <form className="w-2/3 max-w-lg">
          <label className="block mb-2" for="name">
            <input
              className="bg-gray shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </label>
          <label
            className="block text-white text-sm font-bold mb-2"
            for="Email"
          >
            <input
              className="bg-gray shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="E-mail"
            />
          </label>
          <label
            className="block text-white text-sm font-bold mb-2"
            for="Contact No."
          >
            <input
              className="bg-gray shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact"
              type="text"
              placeholder="Contact No."
            />
          </label>
          <input
            type="submit"
            value="Hello"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Faq;
