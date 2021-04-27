import { useCreateOrUpdatePage, usePage } from "../hooks/data";
import { useDispatch, useSelector } from "react-redux";

import React, { ChangeEvent } from "react";
import { RootState } from "../redux/store";
import { setPageTitle, setPageSlug } from "../redux/page";

function PageTitle() {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.page.title);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPageTitle(e.target.value));
    dispatch(setPageSlug(e.target.value));
  };

  return (
    <div className="mb-6 PageTitle">
      <input
        type="text"
        value={title}
        placeholder="Titre de la page"
        className="w-full"
        onChange={onChange}
      />
    </div>
  );
}

function PageActions({ onSave }: { onSave: Function }) {
  return (
    <div>
      <button className="px-8 font-bold uppercase Button">Validate</button>
      <button
        className="px-8 font-bold uppercase Button Button--primary"
        onClick={() => onSave()}
      >
        Save
      </button>
    </div>
  );
}

function PageOptions() {
  const mutation = useCreateOrUpdatePage();

  const pageState = useSelector((state: RootState) => state.page);
  return (
    <div className="flex">
      <div className="flex-1">
        <PageTitle />
      </div>
      <div className="ml-6">
        <PageActions onSave={() => mutation.mutate(pageState)} />
      </div>
    </div>
  );
}

export default PageOptions;
