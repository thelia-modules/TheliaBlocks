import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NumberParam } from "serialize-query-params";
import { useQueryParam } from "use-query-params";

import { RootState } from "../redux/store";
import { setPage, setPageTitle, setPageSlug, initialState as initialPageState } from "../redux/page";
import { setBlocks, initialState as initialBlocksState } from "../redux/blocks";
import { useCreateOrUpdatePage, useBlockGroupsList } from "../hooks/data";
import { PageTypeStore } from "../types";

function PagesDropdown({
  search,
  onPageClick,
}: {
  search: string;
  onPageClick: (page: PageTypeStore) => any;
}) {
  const {
    isLoading,
    isError,
    error,
    data,
  }: {
    isLoading: boolean;
    isError: boolean;
    error: any;
    data: any;
  } = useBlockGroupsList();

  if (isLoading) {
    return <span>Loading ...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const autoCompleteResults = data.filter(
    ({ title } : { title: PageTypeStore["title"] }) =>
      title?.search(new RegExp(search, "i")) !== -1
  );
  if (!autoCompleteResults.length) {
    return null;
  }

  return (
    <ul className="border border-gray-400 divide-y divide-gray-300 top-full">
      {autoCompleteResults.map((page: PageTypeStore) => (
        <li
          key={page.id}
          onClick={() => onPageClick(page)}
          className="px-4 py-1 cursor-pointer"
        >
          {page.title}
        </li>
      ))}
    </ul>
  );
}

function PageTitle() {
  const dispatch = useDispatch();
  const pageState = useSelector((state: RootState) => state.page);
  const [, setPageId] = useQueryParam("id", NumberParam);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPageTitle(e.target.value));
    dispatch(setPageSlug(e.target.value));
  };

  const onPageClick = (page: PageTypeStore) => {
    if (page?.id) {
      setPageId(parseInt(page.id, 10));
    }
  };

  return (
    <div className="mb-6 PageTitle">
      <input
        type="text"
        value={pageState.title}
        placeholder="Titre de la page"
        className="w-full"
        onChange={onInputChange}
      />
      {pageState.title && !pageState.id && (
        <PagesDropdown search={pageState.title} onPageClick={onPageClick} />
      )}
    </div>
  );
}

function PageActions({ onSave }: { onSave: Function }) {
  const pageId = useSelector((state: RootState) => state.page.id);

  const newPage = () => {
    if(confirm("Are you sure ? New data might be lost.")){
      setPage(initialPageState);
      setBlocks(initialBlocksState); 
    }
  }

  return (
    <div>
      <button className="px-8 font-bold uppercase Button">Validate</button>
      <button
        className="px-8 font-bold uppercase Button Button--primary"
        onClick={() => onSave()}
      >
        {pageId ? 'Save' : 'Create'}
      </button>
      {pageId &&
        <button
          className="px-8 ml-6 font-bold uppercase Button Button--info"
          onClick={() => newPage()}
        >
          New page
        </button>
      }
    </div>
  );
}

function PageOptions() {
  const mutation = useCreateOrUpdatePage();

  const page = useSelector((state: RootState) => state.page);
  const blocks = useSelector((state: RootState) => state.blocks);
  
  return (
    <div className="flex">
      <div className="flex-1">
        <PageTitle />
      </div>
      <div className="ml-6">
        <PageActions onSave={() => mutation.mutate({ page, blocks })} />
      </div>
    </div>
  );
}

export default PageOptions;
