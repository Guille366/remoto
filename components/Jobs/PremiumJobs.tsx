import React, { useContext } from 'react';
import Alert from '../common/Alert';
import PremiumListItem from './PremiumListItem';
import { JobsContext } from '../../context/JobsContext';
import { extractEmail, extractLink } from '../../utils/extractFromString';

const PremiumJobs = () => {
  const context = useContext(JobsContext);
  const allJobs = context?.jobs || [];
  const bestJobs = allJobs.filter((job) => job.reactions.total_count >= 1);

  return (
    <div className="font-nunito pt-4 pb-8">
      <Alert />
      <div className="grid grid-cols-1 gap-4 mt-4">
        {bestJobs.length !== 0 &&
          bestJobs.map(
            (item, key) =>
              key < 4 && (
                <PremiumListItem
                  data={item}
                  key={key}
                  light={key % 2 !== 0}
                  link={
                    !extractLink(item.body)
                      ? extractEmail(item.body) || ''
                      : extractLink(item.body) || ''
                  }
                  isEmail={!extractLink(item.body)}
                />
              ),
          )}
      </div>
    </div>
  );
};

export default PremiumJobs;
