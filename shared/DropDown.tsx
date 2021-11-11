import { ReactElement } from 'react';

interface AppProps {
  list?: string[];
  icon?: ReactElement<SVGElement>;
}

export const DropDown = ({ list, icon }: AppProps): JSX.Element => {
  return (
    <div className="p-1 border-b border-gray-300 flex items-center">
      {icon && icon}
      <select className="focus:outline-none cursor-pointer">
        {list?.map((text, idx) => (
          <option key={idx}>{text}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
