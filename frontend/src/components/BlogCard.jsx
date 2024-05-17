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
import { getRandomNumber } from '../utils/misc';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';

const BlogCard = ({ title, desc, createdDate, author, price, courseId }) => {
  const location = useLocation();
  const [cookies] = useCookies(['auth']);
  const [user, setUser] = useState(false);

  useEffect(() => {
    
      if (cookies.auth) {
        setUser(true);
        console.log('User:', user);      
    }else {
      // If no authentication token exists, clear the user state
      setUser(false);
    }
  }, [cookies.auth]);

 
 console.log('Cookies:', cookies.auth )
  

  const isMyCoursesPage = location.pathname === '/learner/myCourses';
  let buttonLink;
  if (user) {
    buttonLink = isMyCoursesPage ? `/learner/course/view?crscode=${courseId}` : `/payment?product=${encodeURIComponent(
      JSON.stringify({ title, description: desc, price, courseId })
    )}`;
  } else {
    buttonLink = '/login';
  }
  const buttonText = isMyCoursesPage ? "Access" : `${price}`;

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
          <Link
           to={buttonLink}  
          >
            <Button size="sm" color="green" className="flex items-center">
            {!isMyCoursesPage && <FontAwesomeIcon icon={faDollar} className="text-xl" />}
              <p className="ml-2 text-xl">{buttonText}</p>
            </Button>
          </Link>
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

{/* <Link
to={`/payment?product=${encodeURIComponent(
  JSON.stringify({ title, description: desc, price, courseId })
)}`}
> */}
