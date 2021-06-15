import { size } from "lodash";
import React from "react";
import { useCreateImage, useDeleteImage, useLibraryImage } from "../hooks/data";
import { LibraryImage } from "../types";
import Loader from "./Loader";

export default function MediaLibrary({
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
