import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import useCopyToClipboard from "react-use/lib/useCopyToClipboard";

import { useGroups } from "../hooks/data";

const TEXT_COPY_SHORTCODE = "Copier le shortcode";
const TEXT_COPIED = "Copié !";
const TEXT_ERROR_COPY = "Une erreur est survenue";

export default function ListGroups() {
  const res = useGroups();
  const [copyText, setCopyText] = useState<string>(TEXT_COPY_SHORTCODE);
  const [copied, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    setCopyText(copied.error ? TEXT_ERROR_COPY : TEXT_COPIED);

    setTimeout(() => {
      setCopyText(TEXT_COPY_SHORTCODE);
    }, 1500);
  }, [copied]);

  if (!res.data) {
    return null;
  }

  return (
    <ul>
      {res.data.map((group) => (
        <li className="flex bg-white border-b" key={group.id}>
          <Link className="flex-grow block p-5" to={`/edit/${group.id}`}>
            {group.title} ({group.id})
          </Link>
          <Tippy content={copyText} hideOnClick={false}>
            <button
              className="px-8 py-5 ml-1 hover:bg-gray-200"
              onClick={() =>
                copyToClipboard(`[block_group slug=${group.slug}]`)
              }
            >
              <i className="fa fa-clipboard"></i>
            </button>
          </Tippy>
        </li>
      ))}
    </ul>
  );
}
