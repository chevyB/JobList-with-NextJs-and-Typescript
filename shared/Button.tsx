interface AppProps {
  label: string;
  type?: string;
}

export const Button = ({
  label,
  type = 'roundedGray',
}: AppProps ): JSX.Element => {
  
  const btnTypes: { [key: string]: string } = {
    roundedGray: 'rounded-full border-gray-500 text-gray-500',
    boxedGray: 'rounded border-gray-500 text-gray-500 py-2 hover:bg-gray-500 hover:text-white',
  };

  return (
    <button className={`border px-5 cursor-pointer ${btnTypes[type]}`}>
      {label}
    </button>
  );
};

export default Button;
