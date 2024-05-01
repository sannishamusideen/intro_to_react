import React from 'react'
import Cat from "../assets/image/cat.jpeg";

const ReactTest = () => {
  return (
    <section className="testing">
      <div>
        <img src={Cat} alt="" />
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1443&q=80"
          alt=""
        />
        <h2>Hello World</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          error quod saepe vero rerum laboriosam doloremque, facilis nesciunt
          aperiam corrupti dolorum pariatur, laborum dolorem. Iusto iure
          inventore pariatur rerum ratione.
        </p>
      </div>
    </section>
  );
}

export default ReactTest;