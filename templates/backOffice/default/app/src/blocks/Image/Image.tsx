import "./Image.css";

import {
  BlockModuleComponentProps,
  BlockPluginDefinition,
  LibraryImage,
} from "../../types";
import {
  useCreateImage,
  useDeleteImage,
  useLibraryImage,
} from "../../hooks/data";

import React from "react";

export type BlockImageComponentProps = BlockModuleComponentProps<LibraryImage>;

function MediaLibrary({
  onSelect,
}: {
  onSelect: (image: LibraryImage) => void;
}) {
  const mutation = useCreateImage();
  const deleteMutation = useDeleteImage();
  const images = useLibraryImage();

  return (
    <div className="p-4 bg-white MediaLibrary">
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
          defaultValue=""
          placeholder="Titre de l'image"
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

      <div className="mt-12 mb-2 text-3xl font-bold">Images existantes: </div>
      <div className="grid grid-cols-5 gap-4">
        {images?.data?.map((image) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
}

function BlockImageComponent(props: BlockImageComponentProps) {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const { data, onUpdate } = props;

  React.useEffect(() => {
    if (!data) {
      setIsEditing(true);
    }
  }, [data]);

  return (
    <div
      className="relative overflow-y-auto BlockImage"
      style={{ minHeight: "30vh" }}
    >
      {data.url ? (
        <img src={data.url} alt={data.title} className="BlockImage-img" />
      ) : null}
      {isEditing ? (
        <div className="absolute bg-gray-800 bg-opacity-75 inset-4 ">
          <button
            className="absolute right-0 ml-auto Button Button--info"
            onClick={() => setIsEditing(false)}
          >
            Fermer
          </button>
          <div className="p-8 bg-white">
            <MediaLibrary
              onSelect={(image) => {
                onUpdate(image);
                setIsEditing(false);
              }}
            />
          </div>
        </div>
      ) : (
        <button onClick={() => setIsEditing(true)}>
          {data.url ? "Modifier l'image" : "Ajouter une image"}
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
