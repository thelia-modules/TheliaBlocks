import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import useCopyToClipboard from "react-use/lib/useCopyToClipboard";
import { toast } from "react-toastify";

// import { setGroupVisible } from "../redux/group";
import { useDeleteGroup, useGroups, useDuplicateGroup } from "../hooks/data";
import { GroupTypeStore } from "../types";

const TEXT_COPY_SHORTCODE = "Copier le shortcode";
const TEXT_COPIED = "Copié !";
const TEXT_ERROR_COPY = "Une erreur est survenue";

export default function ListGroups() {
  const res = useGroups();
  const [copyText, setCopyText] = useState<string>(TEXT_COPY_SHORTCODE);
  const [copied, copyToClipboard] = useCopyToClipboard();
  const mutationDelete = useDeleteGroup({
    onSuccess: () => {
      toast.info("Le groupe a bien été supprimé");
      res.refetch();
    },
  });
  const mutationDuplicate = useDuplicateGroup();

  useEffect(() => {
    setCopyText(copied.error ? TEXT_ERROR_COPY : TEXT_COPIED);

    setTimeout(() => {
      setCopyText(TEXT_COPY_SHORTCODE);
    }, 1500);
  }, [copied]);

  // const updateGroupVisibility = (group: GroupTypeStore, visible: boolean) => {};

  const deleteGroup = (group: GroupTypeStore) => {
    if (window.confirm("La suppression est définitive")) {
      mutationDelete.mutate({ id: group.id });
    }
  };

  const duplicateGroup = (group: GroupTypeStore) => {
    mutationDuplicate.mutate({ id: group.id });
  };

  if (!res.data) {
    return (
      <p className="alert alert-info">
        Aucun groupe existant. Pour créer un nouveau groupe, cliquez sur le
        bouton "Ajouter un groupe de blocs".
      </p>
    );
  }

  return (
    <ul>
      {res.data.map((group) => (
        <li className="flex bg-white border-b" key={group.id}>
          <Link className="flex-grow block p-5" to={`/edit/${group.id}`}>
            #{group.id} - {group.title}
            {!!group.itemBlockGroups?.length && (
              <span className="ml-3 text-sm font-normal text-gray-400">
                <i className="fa fa-link"></i>
                {group.itemBlockGroups.map(({ itemId, itemType }) => (
                  <span key={`${itemType}-${itemId}`} className="ml-1">
                    {itemType}-{itemId}
                  </span>
                ))}
              </span>
            )}
          </Link>
          <div>
            {/* {group.visible ? (
              <Tippy content={"Désactiver le groupe"} hideOnClick={false}>
                <button
                  className="px-6 py-5 border-l hover:bg-gray-200"
                  onClick={() => updateGroupVisibility(group, false)}
                >
                  <i className="fa fa-eye"></i>
                </button>
              </Tippy>
            ) : (
              <Tippy content={"Activer le groupe"} hideOnClick={false}>
                <button
                  className="px-6 py-5 border-l hover:bg-gray-200"
                  onClick={() => updateGroupVisibility(group, true)}
                >
                  <i className="fa fa-eye-slash"></i>
                </button>
              </Tippy>
            )} */}
            <Tippy content={"Dupliquer le groupe"} hideOnClick={false}>
              <button
                className="px-6 py-5 border-l hover:bg-gray-200"
                onClick={() => duplicateGroup(group)}
              >
                <i className="fa fa-clone"></i>
              </button>
            </Tippy>
            <Tippy content={copyText} hideOnClick={false}>
              <button
                className="px-6 py-5 border-l hover:bg-gray-200"
                onClick={() =>
                  copyToClipboard(`[block_group slug=${group.slug}]`)
                }
              >
                <i className="fa fa-clipboard"></i>
              </button>
            </Tippy>
            <Tippy content={"Supprimer le groupe"} hideOnClick={false}>
              <button
                className="px-6 py-5 text-red-600 border-l hover:bg-gray-200"
                onClick={() => deleteGroup(group)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </Tippy>
          </div>
        </li>
      ))}
    </ul>
  );
}
