import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreatePage, usePage } from "../hooks/data";
import { setPageTitle } from "../redux/page";
import { RootState } from "../redux/store";

function PageTitle() {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.page.title);

  return (
    <div className="mb-6 PageTitle">
      <input
        type="text"
        value={title}
        placeholder="Titre de la page"
        className="w-full"
        onChange={(e) => dispatch(setPageTitle(e.target.value))}
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
  const mutation = useCreatePage();
  const page = usePage("1");
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
