import React from "react";

type buttonTypes = {
	children: React.ReactNode;
	variant?: "primary" | "secondary";
	size?: "small" | "medium" | "large";
	className?: string;
};

export enum buttonVariants {
	primary,
	secondary,
}

const Button = ({ children, variant, size, className }: buttonTypes) => {
	const primaryClassName = `button--primary`;
	const smallClassName = `!h-12 !text-sm !py-3 !px-8`;
	// const mediumClassName = `!h-12 !text-sm !py-3 !px-8`;
	// const largeClassName = `!h-12 !text-sm !py-3 !px-8`;

	return (
		<button
			className={`button 
        ${variant == "primary" && primaryClassName}
        ${size == "small" && smallClassName}
        ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
