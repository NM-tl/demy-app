import { FC, useEffect } from 'react';
import MainLayout from '../../shared/layouts/MainLayout';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses, addCourse, updateCourse, deleteCourse } from '../../features/firebase/itemsSlice';
import { Course } from '../../features/firebase/types';
import { RootState, AppDispatch } from '../../features/firebase/store';

const Courses: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.courses.courses);
  const status = useSelector((state: RootState) => state.courses.status);
  const error = useSelector((state: RootState) => state.courses.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  const handleAddCourse = () => {
    const newCourse: Omit<Course, 'id'> = { name: 'New Course', author: 'Author', description: 'Description', lessons: 10, link: 'Link', price: '0$', startDate: new Date().toISOString() };
    dispatch(addCourse(newCourse));
  };

  const handleUpdateCourse = (id: string) => {
    const updatedCourse: Partial<Course> & { id: string } = { id, name: 'Updated Course', author: 'Author', description: 'Updated Description', lessons: 20, link: 'Updated Link', price: '100$', startDate: new Date().toISOString() };
    dispatch(updateCourse(updatedCourse));
  };

  const handleDeleteCourse = (id: string) => {
    dispatch(deleteCourse(id));
  };

  return (
    <MainLayout>
      <section className='w-full max-w-[1515px] m-auto px-4'>
        <h2>Courses List</h2>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error: {error}</p>}
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              {course.name}
              <button onClick={() => handleUpdateCourse(course.id)}>Update</button>
              <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={handleAddCourse}>Add Course</button>
      </section>
    </MainLayout>
  );
};

export default Courses;