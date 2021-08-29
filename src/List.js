import React from "react";

const List = ({ people, ...otherprops }) => {
  return (
    <>
      {console.log("props:", otherprops)}
      {people.map((person) => (
        <article key={person.id} className="person">
          <img src={person.image} />
          <div>
            <h4>{person.name}</h4>
            <p>{person.age} years</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
