import React, { useState } from 'react'
import Link from "next/link";
import { dateFormatter, handleLevel, tagFormatter, titleFormatter } from '../../utils/formatters'
import getIcon from '../../utils/icons'
import Labels from '../common/Labels'
import Badges from '../common/Badges';
import Fav from '../common/Fav';

interface ListItemTypes {
  data: {
    id: number;
    created_at: string;
    title: string;
    reactions: {
        total_count: number;
    };
    labels: {
        name: string;
    }[]
  }
}

const ListItem: React.FC<ListItemTypes> = ({ data: { id, created_at, title, reactions, labels } }) => {
    const [hover, setHover] = useState(false);

    const today = new Date().toString();

    const handleHover = (arg: string) => {
        arg === 'enter' ? setHover(true) : setHover(false)
    }
  
  return (
    <div 
        key={id} 
        className="relative" 
        onMouseEnter={() => handleHover('enter')} 
        onMouseLeave={() => handleHover('leave')}
      >
        <Fav id={id} hidden={!hover} />

        <Link
          href={{
            pathname: `/jobs/[id]`,
            query: { id: id },
          }}
        >
          <a className="text-gray-700 flex flex-col justify-center h-full max-w-full p-4 no-underline shadow-md rounded border-violet-700 border border-opacity-25 hover:shadow-lg hover:border-opacity-50 hover:bg-violet-50">
            <Badges
              newOpening={
                dateFormatter(created_at).standard === dateFormatter(today).standard
              }
              hotOpening={reactions.total_count >= 1}
            />

            <h2 className="font-code pb-2 pt-0">
              {titleFormatter(title)}
            </h2>
            <div className="flex flex-row gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-thin md:scrollbar-thumb-transparent md:scrollbar-track-transparent scrollbar-thumb-rounded-md scrollbar-thumb-rounded-full hover:scrollbar-thumb-violet-700 hover:scrollbar-track-violet-100 pb-2">
              {labels.map(
                (item, key) =>
                  <Labels
                    key={key}
                    level={handleLevel(tagFormatter(item.name) || "")}
                    name={item.name}
                  >
                    {getIcon(tagFormatter(item.name) || "")}{" "}
                    {tagFormatter(item.name)}
                  </Labels>
              )}
            </div>
            <p className="text-gray-500 text-xs p-0 mt-2 font-mono">
              ⏱️ {dateFormatter(created_at).fromNow}
            </p>
          </a>
        </Link>
      </div>
  )
}

export default ListItem