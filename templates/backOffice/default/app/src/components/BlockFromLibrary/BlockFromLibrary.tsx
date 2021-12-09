import './BlockFromLibrary.css';

import React from 'react';
import { useDispatch } from 'react-redux';
import Tippy from '@tippyjs/react';
import { nanoid } from 'nanoid';

import { addBlock } from '../../redux/blocks';
import { __PLUGINS } from '../../pluginManager';
import { BlockPluginDefinition, BlockModuleI18n } from '../../types';
import { getI18nText } from '../../utils/i18n';
import BlockTooltip from '../BlockTooltip';

function BlockFromLibrary({
  block
}: {
  block: BlockModuleI18n & {
    id: string;
    initialData: BlockPluginDefinition['initialData'];
    type: BlockPluginDefinition['type'];
  };
}) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(
      addBlock({
        id: nanoid(),
        parent: null,
        data: block.initialData,
        type: block.type
      })
    );
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, 250);
  };

  const displayedTitle = block.title ? getI18nText(block.title) : block.type.id;

  return (
    <div className="BlockFromLibrary">
      <Tippy
        theme="light"
        content={
          <BlockTooltip
            title={displayedTitle}
            //image={block.image && getI18nText(block.image)}
            description={block.description && getI18nText(block.description)}
          />
        }
      >
        <button
          type="button"
          className="BlockFromLibrary-title"
          onClick={onClick}
        >
          {displayedTitle}
        </button>
      </Tippy>
    </div>
  );
}

export default BlockFromLibrary;
