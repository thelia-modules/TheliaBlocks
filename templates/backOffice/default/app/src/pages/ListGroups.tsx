import { Link } from "react-router-dom";
import React from "react";
import { useGroups } from "../hooks/data";
import Tippy from "@tippyjs/react";
import { useState } from "react";

const TEXT_COPY_SHORTCODE = "Copier le shortcode";

export default function ListGroups() {
  const res = useGroups();
  const [copyText, setCopyText] =  useState<string>(TEXT_COPY_SHORTCODE)

  if (!res.data) {
    return null;
  }

  const copyShortcodeToClipboard = (shortcode: string) => {
    navigator.clipboard.writeText(shortcode).then(function() {
      setCopyText("Copié !");

      setTimeout(() => {
        setCopyText(TEXT_COPY_SHORTCODE);
      }, 1500);
    });
  }

  return (
    <ul>
      {res.data.map((group) => (
        <li className="flex bg-white border-b" key={group.id}>
          <Link className="flex-grow block p-5" to={`/edit/${group.id}`}>
            {group.title} ({group.id})
          </Link>
          <Tippy content={copyText} hideOnClick={false}>
            <button className="px-8 py-5 ml-1 hover:bg-gray-200" onClick={() => copyShortcodeToClipboard(`[block_group slug=${group.slug}]`)}><i className="fa fa-clipboard"></i></button>
          </Tippy>
        </li>
      ))}
    </ul>
  );
}
