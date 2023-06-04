import React from 'react';
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<>
			{options.map((option) => (
				<button key={nanoid()} type="button" name={option} onClick={onLeaveFeedback}>
					{option}
				</button>
			))}
		</>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;