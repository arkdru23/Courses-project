import React, { useContext } from "react";
import bemCssModules from "bem-css-modules";

import Course from "../Courses/subcomponents/Course";
import { default as CoursesStyles } from "./Courses.module.scss";
import { StoreContext } from "../../store/StoreProvider";

const styles = bemCssModules(CoursesStyles);

const Courses = () => {
	const { courses } = useContext(StoreContext);

	const coursesElements = courses.map((course) => (
		<Course key={course.id} {...course} />
	));

	console.log(courses);

	return (
		<section className={styles()}>
			<h2 className={styles("title")}></h2>
			<ul className={styles("list")}>{coursesElements}</ul>
		</section>
	);
};

export default Courses;
