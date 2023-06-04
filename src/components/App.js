import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
	const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	
	const countPositiveFeedbackPercentage = () => {
		const result = totalCount();
		const percentage = (good * 100) / result;
		return Math.round(percentage);
	};

	const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        break;
		};
	};
	
	const totalCount = () => {
		return good + bad + neutral;
	};

		const total = totalCount();
		const positivePercentage = countPositiveFeedbackPercentage();
		const objKey = ['good', 'neutral', 'bad'];
		return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions options={objKey} onLeaveFeedback={onLeaveFeedback} />
				</Section>

				{total === 0 ? (
					<Notification message="No feedback given" />
				) : (
					<Section title="Statistics">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}
						/>
					</Section>
				)}
			</>
		);
}
