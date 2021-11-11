import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import moment from 'moment';

import { Job } from '../types/jobtype';
import Button from './Button';

export const Card = (props: Job): JSX.Element => {
  return (
    <div
      key={props.id}
      className="p-5 text-center border bg-white filter drop-shadow-lg"
    >
      <div className="text-gray ">{moment(props.date).format('DD MMMM')}</div>
      <div className="text-2xl">{props.title}</div>
      <div className="text-sm font-semibold flex items-center justify-center text-gray-600">
        <FaMapMarkerAlt /> {props.location}
      </div>
      <div className="p-4 text-gray-600 text-left">{props.description}</div>
      <Link href={`/${props.id}`}>
        <Button label="Job description" />
      </Link>
    </div>
  );
};

export default Card;
