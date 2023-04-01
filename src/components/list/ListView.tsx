import React, { useState, useEffect } from "react";
import projects from "../../data/test_data";
import List from "./List";

const ListView = ():JSX.Element => {

  const [lists, setLists] = useState<any>([]); // Each box represnt a project


  useEffect(() => {
  
    const _lists = projects.slice().reverse().map((project) => {
      return <List key={project.id} projectDetail={project} largeScreen={false} />;
    });
    setLists(_lists);
  }, []);

  return (
    <ul className="list-view">
      {
          lists.map((list: JSX.Element) => list)
      }
    </ul>
  )
};

export default ListView;
