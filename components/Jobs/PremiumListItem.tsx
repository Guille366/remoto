import React, { useState } from 'react';
import Link from 'next/link';
import {
  dateFormatter,
  handleLevel,
  tagFormatter,
  titleFormatter,
} from '../../utils/formatters';
import getIcon from '../../utils/icons';
import Labels from '../common/Labels';
import Badges from '../common/Badges';
import Fav from '../common/Fav';
import LinkButton from '../common/Buttons/LinkButton';

interface PremiumListItemTypes {
  data: {
    id: number;
    created_at: string;
    apply_url?: string;
    title: string;
    labels: {
      name: string;
    }[];
  };
  light?: boolean;
  isEmail?: boolean;
  link?: string;
}

const PremiumListItem: React.FC<PremiumListItemTypes> = ({
  data: { id, created_at, title, labels, apply_url },
  light,
  link,
  isEmail,
}) => {
  const [hover, setHover] = useState(false);

  const today = new Date().toString();

  const handleHover = (arg: string) => {
    arg === 'enter' ? setHover(true) : setHover(false);
  };

  return (
    <div
      key={id}
      className="relative"
      onMouseEnter={() => handleHover('enter')}
      onMouseLeave={() => handleHover('leave')}
    >
      <Fav id={id} hidden={!hover} light />

      <div
        className={`text-gray-700 flex flex-row gap-2 justify-between h-full max-w-full p-4 shadow-lg rounded hover:shadow-lg hover:border-opacity-50 border-opacity-25 border
              ${
                light
                  ? 'bg-white hover:bg-violet-100 border-yellow-700'
                  : 'bg-white hover:bg-violet-100 border-yellow-700'
              }
            `}
      >
        <Link
          href={{
            pathname: `/jobs/[id]`,
            query: { id: id },
          }}
        >
          <a className="no-underline md:w-4/5 w-full">
            <Badges
              newOpening={
                dateFormatter(created_at).standard ===
                dateFormatter(today).standard
              }
              hotOpening
            />

            <h2
              className={`font-code pb-2 pt-0 text-xl ${
                light ? 'text-violet-700' : 'text-violet-700'
              }`}
            >
              {titleFormatter(title)}
            </h2>
            <div className="flex flex-row gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-thin md:scrollbar-thumb-transparent md:scrollbar-track-transparent scrollbar-thumb-rounded-md scrollbar-thumb-rounded-full hover:scrollbar-thumb-yellow-600 pb-2">
              {labels.map((item, key) => (
                <Labels
                  key={key}
                  level={handleLevel(tagFormatter(item.name) || '')}
                  name={item.name}
                  light
                >
                  {getIcon(tagFormatter(item.name) || '')}{' '}
                  {tagFormatter(item.name)}
                </Labels>
              ))}
            </div>
            <p className="text-violet-700 text-xs p-0 mt-2 font-mono">
              ⏱️ {dateFormatter(created_at).fromNow}
            </p>
          </a>
        </Link>
        <LinkButton
          isEmail={!apply_url && isEmail}
          to={apply_url || link || ''}
          text="Aplicar"
          className="self-center hidden md:flex"
          variant="gold"
        />
      </div>
    </div>
  );
};

export default PremiumListItem;
