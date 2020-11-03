import React from "react";
import bemCssModules from "bem-css-modules";

import { default as CourseStyles } from "./Course.module.scss";

const styles = bemCssModules(CourseStyles);

const Course = ({ authors, img, price, title }) => {
	const allAuthors = authors.join(", ");

	return (
		<li>
			<article className={styles()}>
				<h3 className={styles("title")}>{title}</h3>
				<img alt={title} className={styles("image")} src={img} />
				<p
					className={styles("price")}
				>{`Koszt kursu:  ${price}zł`}</p>
				<p
					className={styles("authors")}
				>{`Autorzy kursu: ${allAuthors}`}</p>
			</article>
		</li>
	);
};

export default Course;
