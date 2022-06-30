import React from "react";

type Types = {
	title: string;
	children: React.ReactNode;
	className?: string;
	titleClassName?: string;
};

const Fieldset = ({ title, children, className, titleClassName }: Types) => {
	return (
		<div className={`fieldset ${className}`}>
			<span className={`fieldset__title ${titleClassName}`}>{title}</span>
			{children}
		</div>
	);
};

export default Fieldset;
