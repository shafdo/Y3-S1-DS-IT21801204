import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getRandomNumber } from '../../utils/misc';
import { addEnrollmentAPIWrapper } from '../../api/enrollment';

// ============ Demo Info ============
// 4032 0345 3810 7098
// 09 / 28
// 549
// Natasha White
// 1499 U.S. 287 #103
// Mansfield
// Texas
// 76063
// (817) 473-8100
// natasha@gmail.com

const PaymentPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const product = JSON.parse(decodeURIComponent(params.get('product')));
  const courseId = product.courseId; // Get courseId from the query parameters
  
  // if (courseId) {
  //   console.log(courseId); // Add a null check here
  // }

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  // const [courseLink, setCourseLink] = useState('');
  const paypalRef = useRef();

  useEffect(() => {
    const createPaypalButtons = async () => {
      try {
        const paypal = window.paypal;
        if (!paypal) {
          throw new Error('PayPal SDK not available');
        }

        const actions = paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: getRandomNumber(),
                  amount: {
                    currency_code: 'USD',
                    value: product.price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            setPaidFor(true);
            console.log(order);
          },
          onError: (err) => {
            setError(err);
            console.error(err);
          },
        });

        actions.render(paypalRef.current);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };

    createPaypalButtons();
  }, [product.price]);

  useEffect(() => {
    const enrollUserToCourse = async () => {
      if (paidFor) {
        try {
          // Call the add enrollment API function here
          const response = await addEnrollmentAPIWrapper(courseId);
         
        } catch (error) {
          setError(error);
          // console.error(error);
        }
      }
    };

    enrollUserToCourse();
      // 3. Call Email API------
  }, [paidFor]);

  if (paidFor) {
    return (
      <div className="bg-gray-100 overflow-hidden">
        <div className="bg-white p-6  md:mx-auto">
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Done!
            </h3>
            <p className="text-gray-600 my-2">
              Thank you for completing your secure online payment.
            </p>
            <p> Have a great day! </p>
            <div className="py-10 text-center flex justify-center">
              <Link
                to={`/learner/${courseId}/view`}
                className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 mx-3"
              >
                GO TO COURSE
              </Link>
              {/* <Link
                to={courseLink}
                className="px-12 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 mx-3"
              >
                GO TO COURSE
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center">
      <div className="block">
        <h1 className="text-3xl font-semibold mb-4">&gt; Learnify Checkout</h1>
        <div className="max-w-md w-full mx-auto bg-white shadow-md rounded-md p-6">
          {error && (
            <div className="text-red-500 mb-4">
              Uh oh, an error occurred! {error.message}
            </div>
          )}

          <img
            className="mb-4"
            src={`https://source.unsplash.com/random/500x400/?tech&orientation=landscape&sig=${getRandomNumber()}`}
            alt="Thumbnail"
          />

          <h1 className="text-2xl font-semibold mb-4">{product.title}</h1>
          <p className="text-4xl text-gray-700 mb-2">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="text-center" ref={paypalRef} />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
