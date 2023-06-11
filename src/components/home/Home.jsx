import PopularClasses from "./popularClasses/PopularClasses";
import PopularInstructor from "./popularInsctructor/PopularInstructor";
import Slider from "./slider/Slider";
import { Helmet } from "react-helmet-async";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div>
      <Helmet>
        <title>Home | The Art Academy</title>
      </Helmet>
      <Slider />
      <h1 className="text-4xl font-bold text-center text-amber-600 mt-8">
        Popular Classes
      </h1>
      <PopularClasses />
      <h1 className="text-4xl font-bold text-center text-amber-600 mt-4">
        Popular Instructors
      </h1>
      <PopularInstructor />
      <div>
        <h1 className="text-4xl font-bold text-center text-amber-600 my-4">
          Common Questions
        </h1>
        <div className="join join-vertical w-full mb-8">
          <div className="collapse collapse-arrow join-item border border-amber-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              What is the duration of the course?
            </div>
            <div className="collapse-content">
              <p>
                The course duration varies depending on the specific program you
                choose. We offer a range of courses with durations that can be
                as short as a few weeks to as long as several months. For more
                detailed information on the duration of each course, we
                recommend visiting our website or contacting our admissions team
                directly. They will be able to provide you with specific
                information tailored to your needs. Feel free to reach out to
                us, and we will be happy to assist you!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-amber-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Are these courses exclusively for children?
            </div>
            <div className="collapse-content">
              <p>
                No, our courses are not exclusively for children. We offer a
                wide range of courses that cater to learners of all ages,
                including children, teenagers, and adults. Whether you are a
                beginner or an advanced learner, we have courses designed to
                meet your specific needs and skill levels. Our diverse selection
                of courses ensures that everyone can find a suitable program to
                enhance their knowledge and skills. Feel free to explore our
                course offerings to find the right fit for you!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-amber-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Can I take these classes online?
            </div>
            <div className="collapse-content">
              <p>
                Yes, all of our classes are available online. We understand the
                importance of flexibility and accessibility, which is why we
                have designed our courses to be accessible remotely. Whether
                you're located in a different city or even a different country,
                you can still enroll in our courses and participate in virtual
                classrooms. Our online platform provides an interactive learning
                experience, allowing you to engage with instructors and fellow
                students, access course materials, and submit assignments
                online. So, you can conveniently join our classes from the
                comfort of your own home or any location with an internet
                connection. Start your learning journey with us today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
