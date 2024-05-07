import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import PropTypes from 'prop-types';

const AdminCard = ({ title, desc, showFooter }) => {
  return (
    <Card className="w-full max-w-[25rem] shadow-lg mb-8">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
          <Button size="lg" fullWidth={true} className="mx-4">
            Accept
          </Button>
          <Button size="lg" color="red" fullWidth={true} className="mx-4">
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
};

export default AdminCard;
