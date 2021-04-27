import { Link } from "react-router-dom";
import React from "react";
import { useBlockGroupsList } from "./hooks/data";

export default function ListBlockGroups() {
  const res = useBlockGroupsList();
  return (
    <div>
      {res.data?.data.map((group) => (
        <Link to={`/edit/${group.id}`} key={group.id}>
          {group.id} - {group.slug} - {group.title}
        </Link>
      ))}
    </div>
  );
}
