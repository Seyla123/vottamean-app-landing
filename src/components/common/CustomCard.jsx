import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";

const CustomCard = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="mb-8 ">
            {data.icon ? (
              <div className="bg-primary text-white rounded-lg md:p-3 p-2 w-fit">
                {data.icon}
              </div>
            ) : (
              <img
                src={data.image}
                alt={data.title}
                className="w-2/3 md:w-1/3"
              />
            )}
          </div>
        </CardTitle>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{data.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
