import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { getRandomNumber } from '../../../utils/misc';

const AdminCard = ({
  title,
  desc,
  showFooter,
  acceptBtnActionFunc = () => {},
  rejectBtnActionFunc = () => {},
}) => {
  return (
    <Card className="w-full max-w-[25rem] shadow-lg mb-8 block mx-auto">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={`https://source.unsplash.com/random/500x400/?tech&orientation=landscape&sig=${getRandomNumber()}`}
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {title}
          </Typography>
        </div>
        <Typography color="gray">{desc}</Typography>
      </CardBody>
      {showFooter && (
        <CardFooter className="pt-3 flex">
          <Button
            size="lg"
            fullWidth={true}
            className="mx-4"
            onClick={acceptBtnActionFunc}
          >
            Accept
          </Button>
          <Button
            size="lg"
            color="red"
            fullWidth={true}
            className="mx-4"
            onClick={rejectBtnActionFunc}
          >
            Reject
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

AdminCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  showFooter: PropTypes.bool.isRequired,
  acceptBtnActionFunc: PropTypes.func,
  rejectBtnActionFunc: PropTypes.func,
};

export default AdminCard;
