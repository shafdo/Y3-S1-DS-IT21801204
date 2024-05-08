import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({ title, desc, createdDate, author, price }) => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  return (
    <Card className="max-w-[22rem] overflow-hidden mb-4">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={`https://source.unsplash.com/random/500x400/?tech&orientation=landscape&sig=${getRandomNumber()}`}
          alt="Thumbnail"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="h6" color="blue-gray">
          Created by: {author}
        </Typography>
        <Typography
          variant="lead"
          color="gray"
          className="mt-3 font-normal text-base"
        >
          {desc}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography className="font-semibold">
          Created Date: {createdDate}
        </Typography>
        <div className="mt-4 flex justify-end">
          <Button size="sm" color="green" className="flex items-center">
            <FontAwesomeIcon icon={faDollar} className="text-xl" />
            <p className="ml-2 text-xl">{price}</p>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default BlogCard;
