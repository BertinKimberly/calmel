import React from "react";

import { FaCrown } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Programs" />

        <div className="programs__wrapper">
          {programs.map(({ id, icon, title, info, path }) => (
            <Card key={id} className="programs__program">
              <span>{icon}</span>
              <h4>{title}</h4>
              <small>{info}</small>
              <Link to={path} className="btn sm">
                Learn More <AiFillCaretRight />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
