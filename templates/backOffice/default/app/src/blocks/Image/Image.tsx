import "./Image.css";

import {
  BlockModuleComponentProps,
  BlockPluginDefinition,
  LibraryImage,
} from "TheliaBlocksTypes";
import { head, size } from "lodash";
import {
  useCreateImage,
  useDeleteImage,
  useLibraryImage,
  useLibraryImageById,
} from "../../hooks/data";

import Loader from "../../components/Loader";
import React from "react";

export type BlockImageComponentProps = BlockModuleComponentProps<LibraryImage>;

function MediaLibrary({
  onSelect,
  limit = 20,
}: {
  onSelect: (image: LibraryImage) => void;
  limit?: number;
}) {
  const [offset, setOffset] = React.useState<number>(0);
  const [title, setTitle] = React.useState<string | null>(null);
  const mutation = useCreateImage();
  const deleteMutation = useDeleteImage();
  const images = useLibraryImage({ offset, limit, title });

  return (
    <div className="p-4 bg-white MediaLibrary">
      <div className="mb-4 text-3xl font-bold">Ajouter une nouvelle image</div>
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          mutation.mutate(data, {
            onSuccess: (data) => {
              onSelect(data);
            },
          });
        }}
      >
        <input type="file" name="image" />
        <input
          className="mt-2"
          type="text"
          name="title"
          placeholder="Titre de l'image"
          defaultValue=""
        />
        <div className="w-full mt-2">
          <button type="submit" className="Button Button--primary">
            Envoyer
          </button>
        </div>
      </form>
      {mutation.isError ? (
        <div className="mt-4 alert alert-danger">{mutation.error?.message}</div>
      ) : null}
      <div className="flex mt-12 mb-2">
        <div className="text-3xl font-bold ">Images existantes</div>
        <input
          className="ml-4"
          type="search"
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
          name="title-search"
          placeholder="Chercher une image par son titre"
        />
      </div>
      {images.isFetching ? (
        <Loader width="80px" />
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {images?.data?.map((image) => {
            return image?.id ? (
              <div key={image.id} className="flex flex-col p-2 border">
                <div
                  className="m-auto cursor-pointer hover:opacity-75"
                  onClick={() => onSelect(image)}
                >
                  {image.url ? <img src={image.url} alt={image.title} /> : null}
                </div>
                <button
                  className="mt-auto text-sm uppercase Button Button--danger"
                  onClick={() => deleteMutation.mutate(image.id)}
                >
                  effacer
                </button>
              </div>
            ) : null;
          })}
        </div>
      )}

      {!images.isFetching && images.isFetched && size(images.data) <= 0 ? (
        <div className="alert alert-warning">Aucun Résultat</div>
      ) : null}

      {!images.isFetching && images.isFetched && size(images.data) > 0 ? (
        <div className="flex items-center justify-center gap-8 mt-4">
          <button
            className="Button"
            onClick={() => setOffset((old) => Math.max(old - limit, 0))}
            disabled={offset === 0}
          >
            page précédente
          </button>
          <div className="px-4 Button">{offset / limit + 1}</div>
          <button
            className="Button"
            onClick={() => {
              if (!images.isPreviousData && size(images?.data) >= limit) {
                setOffset((old) => old + limit);
              }
            }}
            disabled={images.isPreviousData || size(images?.data) < limit}
          >
            page suivante
          </button>
        </div>
      ) : null}
    </div>
  );
}

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

      if (linkUrl) {
        newData.link = {
          url: linkUrl,
          target: linkTarget,
        };
      }

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
