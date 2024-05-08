import React, { useState } from "react";
import ContactForm from "./features/components/form";

const ContactPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-900 py-5">
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl dark:bg-gray-800">
          <h1 className="font-bold uppercase text-5xl dark:text-teal-600">
            Send us a <br /> message
          </h1>
          <ContactForm />
        </div>
        <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-teal-600 rounded-2xl">
          <div className="flex flex-col text-gray-600">
            <h1 className="font-bold uppercase text-4xl my-4">
              Drop in our office
            </h1>
            <p className="text-gray-500">
              Please ask us your question by filling out this form below. You
              will receive an answer to your question at the first opportunity
              we have to reply. We appreciate the time you have taken.
            </p>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-map-marker-alt pt-2 pr-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Main Office</h2>
                <p className="text-gray-500">
                  9 MILMINK ST, Toronto, Nunavut M9W3N3
                </p>
              </div>
            </div>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-phone-alt pt-2 pr-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Call Us</h2>
                <p className="text-gray-500">Tel: 905-497-6701</p>
                <p className="text-gray-500">Fax: 905-497-6700</p>
              </div>
            </div>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
              ></a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
