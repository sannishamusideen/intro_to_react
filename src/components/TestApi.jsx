import React from "react";
import Cat from "../assets/image/cat.jpeg";
import { TestTeams } from "../assets/json/Eventdata";
import styled from "styled-components";

const TestApi = () => {
  return (
    <Test>
      <div className="container">
        {TestTeams.map((item, index) => (
          <div className="each_event">
            <img src={Cat} alt="" />
            <h3>{item.name}</h3>
            <p>{item.position}</p>
            <span>{item.location}</span>
          </div>
        ))}
      </div>
    </Test>
  );
};

export default TestApi;

let Test = styled.div`

img {
    width: 100px
}
`;
