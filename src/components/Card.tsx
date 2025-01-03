interface CardProps {
  title: string;
  value: number;
}

const Card = ({ title, value }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center flex items-center flex-col justify-center">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
};

export default Card;
