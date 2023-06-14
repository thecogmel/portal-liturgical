import React from "react";

// import { Container } from './styles';

const Message: React.FC = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-neutral-500 px-8 py-24 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl flex flex-col">
              <h2 className="text-2xl italic text-white md:text-3xl">
                “Os amigos são uma das nossas maiores riquezas, devem ser
                cultivados, com muito cuidado e ternura.”
              </h2>

              <p className="font-bold text-white/90 mt-4 sm:block text-right">
                - Carlo Acutis
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Student"
              src="https://i.pinimg.com/736x/ce/88/c3/ce88c3eb2f03b319d4b90e19999043d6.jpg"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
            <img
              alt="Student"
              src="https://segueme.org/wp-content/uploads/2019/02/logo.png"
              className="h-40 w-full object-scale-down sm:h-56 md:h-full bg-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
