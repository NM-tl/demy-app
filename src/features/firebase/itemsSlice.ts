import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './config';
import { Course } from './types';

interface CoursesState {
  courses: Course[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  status: 'idle',
  error: null,
};

export const fetchCourses = createAsyncThunk<Course[]>('courses/fetchCourses', async () => {
  const querySnapshot = await getDocs(collection(db, 'courses'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Course));
});

export const addCourse = createAsyncThunk<Course, Omit<Course, 'id'>>('courses/addCourse', async (newCourse) => {
  const docRef = await addDoc(collection(db, 'courses'), newCourse);
  return { id: docRef.id, ...newCourse };
});

export const updateCourse = createAsyncThunk<Course, Partial<Course> & { id: string }>('courses/updateCourse', async (updatedCourse) => {
  const { id, ...data } = updatedCourse;
  const courseDoc = doc(db, 'courses', id);
  await updateDoc(courseDoc, data);
  return { id, ...data } as Course;
});

export const deleteCourse = createAsyncThunk<string, string>('courses/deleteCourse', async (id) => {
  const courseDoc = doc(db, 'courses', id);
  await deleteDoc(courseDoc);
  return id;
});

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch courses';
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.courses.push(action.payload);
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        const index = state.courses.findIndex(course => course.id === action.payload.id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.courses = state.courses.filter(course => course.id !== action.payload);
      });
  },
});

export default coursesSlice.reducer;
