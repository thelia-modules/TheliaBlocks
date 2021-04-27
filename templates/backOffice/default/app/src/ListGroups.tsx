import { Link } from "react-router-dom";
import React from "react";
import { useGroups } from "./hooks/data";

export default function ListGroups() {
  const res = useGroups();

  if(!res.data) {
    return null;
  }

  return (
    <div>
      {res.data.map((group) => (
        <Link className="block" to={`/edit/${group.id}`} key={group.id}>
          {group.id} : {group.title} ({group.slug})
        </Link>
      ))}
    </div>
  );
}
