import { useEffect, useState } from 'react';
import './jobCard.css';
import { BsBookmark, BsLightningChargeFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import axios from 'axios';

type Props = {
  id: string | number;
  getActiveSlug: (id: string | number) => void;
};

type TJobData = {
  by: string;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

const JobCard = (props: Props) => {
  const [data, setData] = useState<TJobData>();
  const getData = () => {
    if (props.id) {
      axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${35908337}.json`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function convertData(timestamp: number) {
    if (typeof timestamp === 'undefined') {
      return 'Not Available';
    }
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDateTime = `${year}-${month}-${day}`;
    return formattedDateTime;
  }

  // const unixTimestamp = 1683838872;
  // const formattedDateTime = convertUnixTimestampToDateTime(unixTimestamp);
  // console.log(formattedDateTime);

  return (
    <div
      onClick={() => props.getActiveSlug(props.id)}
      className='smallCardContainer'
    >
      <div className='card-head'>
        <div className='imageContainer'>
          <img
            src='https://m.media-amazon.com/images/I/51HCHFclmmL.jpg'
            alt=''
          />
        </div>
        <div className='head-info'>
          <p className='title'>{data?.title || 'Not Available'}</p>
          <p className='sub-title'>{`Type - ${data?.type} | Score - ${
            data?.score
          } | Time - ${convertData(data?.time)}`}</p>
        </div>
        <div className='bookmark'>
          <BsBookmark />
        </div>
      </div>
      <div className='card-body'>
        <p className='author'>
          <FaUserAlt /> - {data?.by || 'Confidential'}
        </p>
        <button>
          <BsLightningChargeFill />
          {'  '}{' '}
          <a href={data?.url} target='_blank'>
            Apply
          </a>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
