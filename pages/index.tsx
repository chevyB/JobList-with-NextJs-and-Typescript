import type { NextPage } from 'next';
import { FaMapMarkerAlt, FaClock, FaDollarSign } from 'react-icons/fa';

import Layout from '../src/layout';
import DropDown from '../shared/DropDown';
import Card from '../shared/Card';

const Home: NextPage = () => {
  const dummy = [
    {
      id: '1',
      date: new Date(),
      title: 'UI Designer',
      location: 'Philippines',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: '2',
      date: new Date(),
      title: 'Product Designer',
      location: 'Japan',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  return (
    <>
      <Layout withBack={false}>
        <div className="py-5">
          <div className="w-full font-bold text-8 text-blue-500 px-1">
            JOB LIST
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-1 text-4xl">Designer</div>
            <div className="w-1/2 flex items-center justify-between">
              <DropDown list={['Anywhere']} icon={<FaMapMarkerAlt />} />
              <DropDown list={['Full-time']} icon={<FaClock />} />
              <DropDown list={['Salary']} icon={<FaDollarSign />} />
            </div>
            <div className="flex-1 text-right">Search</div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-5">
          {dummy?.map((job) => {
            return <Card {...job} />;
          })}
        </div>
      </Layout>
    </>
  );
};

export default Home;
