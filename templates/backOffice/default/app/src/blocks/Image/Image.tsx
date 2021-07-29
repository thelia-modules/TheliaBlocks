import "./Image.css";

import {
  BlockModuleComponentProps,
  BlockPluginDefinition,
  LibraryImage,
} from "../../types";

import { useLibraryImageById } from "../../hooks/data";

import React from "react";
import MediaLibrary from "../../components/MediaLibrary";

export type BlockImageComponentProps = BlockModuleComponentProps<LibraryImage>;

function BlockImageComponent(props: BlockImageComponentProps) {
  const { data, onUpdate } = props;
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const image = useLibraryImageById(props.data.id);
  const [linkUrl, setLinkUrl] = React.useState<string>(data?.link?.url || "");
  const [linkTarget, setLinkTarget] = React.useState<string>(
    data?.link?.target || ""
  );

  React.useEffect(() => {
    if (!data) {
      setIsEditing(true);
    }
  }, [data]);

  React.useEffect(() => {
    if (data.id) {
      const newData = { ...data };

      newData.link = linkUrl ? {
        url: linkUrl,
        target: linkTarget,
      } : undefined;

      onUpdate(newData);
    }
  }, [linkUrl, linkTarget]);

  return (
    <div
      className="relative flex flex-col overflow-y-auto bg-gray-300 BlockImage"
      style={{ minHeight: "30vh" }}
    >
      {image?.data ? (
        <>
          <img
            src={image.data[0]?.url}
            alt={data.title}
            className="BlockImage-img"
          />

          <div className="BlockImage-editLink">
            <label htmlFor="id">Lien au clic sur l'image</label>
            <input
              type="text"
              name="link[url]"
              id="image-link"
              placeholder="Lien de l'image"
              className="w-full"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
            />
            <label className="block mt-2">
              Ouvrir dans une nouvelle fenêtre :
              <input
                className="ml-2"
                type="checkbox"
                name="link[target]"
                checked={linkTarget === "_blank"}
                onChange={(e) =>
                  setLinkTarget(e.target.checked ? "_blank" : "")
                }
              />
            </label>
          </div>
        </>
      ) : null}
      {isEditing ? (
        <div className="absolute bg-gray-800 bg-opacity-75 inset-4 ">
          <button
            className="absolute right-0 ml-auto Button Button--info"
            onClick={() => setIsEditing(false)}
          >
            Fermer
          </button>
          <div className="min-h-full p-8 bg-white">
            <MediaLibrary
              onSelect={(image) => {
                onUpdate(image);
                setIsEditing(false);
              }}
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className={`p-4 m-auto font-bold uppercase Button Button--primary ${
            data.url ? "absolute right-0" : ""
          }`}
        >
          {data?.url ? (
            "Modifier l'image"
          ) : (
            <span className="">Ajouter une image</span>
          )}
        </button>
      )}
    </div>
  );
}

const initialData = {
  url: null,
  id: null,
  title: "",
  fileName: "",
};

const moduleType = {
  id: "blockImage",
};

const blockImage: BlockPluginDefinition<LibraryImage> = {
  type: moduleType,
  component: BlockImageComponent,
  initialData,
  title: {
    default: "Image",
    fr_FR: "Image",
  },
  description: {
    default: "Display an image",
    fr_FR: "Affiche une image",
  },
  image: {
    default: "",
  },
};

export default blockImage;
