import React from "react";
import './Card.css';
import { addToFavorites, removeFromFavorites } from "./api/courses";


export const CourseCard = ({ course, onFavoriteSuccess }) => {
  const className = `course-card ${course.favorite ? 'favorite' : ''}`
  return (
    <div className={className} onClick={() => onCardClick(course, onFavoriteSuccess)}    >
      <InstructorImage instructor_image_url={course.instructor_image_url} />
      <CourseTitleAndDescription title={course.title} instructor_name={course.instructor_name} />
    </div>
  )
}

const InstructorImage = ({ instructor_image_url }) => {
  return (
    <img className="instructor-image" src={instructor_image_url}>
    </img>
  )
}

const CourseTitleAndDescription = ({ title, instructor_name }) => {
  return (
    <div className="course-title-description">
      <div className="instructor-name" >
        <span>
          {instructor_name}
        </span>
      </div>
      <div className="course-title">{title}</div>
    </div>
  )
}

const onCardClick = async (course, onFavoriteSuccess) => {
  if (course.favorite) {
    const res = await removeFromFavorites(course.id);
    console.info(res);
  } else {
    addToFavorites(course.id);
  }
  onFavoriteSuccess();
}
