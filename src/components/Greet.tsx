import React from "react";

type GreetProps = {
  name: string;
  messageCout: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}, You have ${props.messageCout} unread messages.`
          : "Welcome guest"}
      </h2>
    </div>
  );
};
