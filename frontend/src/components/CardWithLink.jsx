import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CardWithLink = ({ title, desc, location, icon, buttonText }) => {
  return (
    <Card className="mt-6 w-96 transition-all duration-300 hover:scale-110 shadow-xl">
      <CardBody>
        <FontAwesomeIcon
          icon={icon}
          className="text-5xl text-green-500 mb-4 block mx-auto"
        />
        <Typography variant="h4" color="blue-gray" className="text-center mb-2">
          {title}
        </Typography>
        <Typography className="text-center">{desc}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-end">
        <Link to={location}>
          <Button color="green" className="flex items-center gap-3">
            {buttonText ? buttonText : 'View'}{' '}
            <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

CardWithLink.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  icon: PropTypes.elementType,
};

export default CardWithLink;
