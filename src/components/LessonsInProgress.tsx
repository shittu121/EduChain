import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LessonsInProgress = () => {
  const navigate = useNavigate();
  const selectedCourses = useSelector((state) => state.course.selectedCourses);

  if (selectedCourses.length === 0) {
    return <h1 className='px-12 lg:px-32 md:px-32 my-10 h-72'>No Course IN PROGRESS.</h1>;
  }

  const handleGoToCourse = (id) => {
    navigate(`/course/${id}`); // Navigate to course page with the course ID
  };




  return (
    <div>
      <div className="">
        {selectedCourses.map((course) => (
          <div className="space-y-5 py-5 flex" key={course.id}>
            <div className="mx-auto border w-[80%] border-[#1600a6] text-white">
              <div className="block lg:flex md:flex gap-10 w-full lg:w-[80%] md:w-[80%]">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="h-full lg:h-64 md:h-64 w-full object-cover lg:w-[60%]"
                />
                <div className="space-y-5 p-5 lg:p-0 md:p-0">
                  <h1 className="text-3xl flex-shrink-0">{course.title}</h1>
                  <p className="text-xs">{course.description}</p>
                  <div className="flex items-center gap-1.5">
                    <img src="./start1.svg" alt="" className="h-7 w-7" />
                    <h1>{course.name}</h1>
                  </div>
                  <button
                    className="border text-white hover:border-[#E6169B] p-3 flex-shrink-0 text-sm lg:text-lg md:text-lg"
                    onClick={() => handleGoToCourse(course.id)}
                  >
                    GO TO COURSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonsInProgress;
