/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Message } from "../../utils/messages";

const Message: React.FC<Message> = ({ message, author, image1, image2 }) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-neutral-500 px-8 py-24 md:p-12 lg:px-16 lg:py-24 rounded-md">
            <div className="mx-auto max-w-xl flex flex-col">
              <h2 className="text-2xl italic text-white md:text-3xl">
                {message}
              </h2>

              <p className="font-bold text-white/90 mt-4 text-right">
                - {author}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Imagem 1"
              src={image1}
              className="h-40 w-full object-cover sm:h-56 md:h-full rounded-md"
            />
            <img
              alt="Imagem 2"
              src={image2}
              className="h-40 w-full object-cover sm:h-56 md:h-full bg-primary rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
