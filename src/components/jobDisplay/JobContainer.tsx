import { useState } from 'react';
import './JobContainer.css';
import JobCard from '../cards/JobCard';

const JobContainer = () => {
  const [slugId, setSlugId] = useState<string | number>('');

  const getActiveSlug = (id: string | number): void => {
    setSlugId(id);
  };

  return (
    <div className='jobContainer'>
      <div className='jobList'>
        {Array.from({ length: 10 }).map((item, index) => (
          <JobCard key={index} id={index} getActiveSlug={getActiveSlug} />
        ))}
      </div>
      <div className='jobDetail'>{slugId}</div>
    </div>
  );
};

export default JobContainer;
