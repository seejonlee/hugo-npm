import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Count = () => {
	const [count, setCount] = useState(0);
	return (
		<div className={`count`}>
			<span>{count}</span>
			<button
				onClick={() => {
					setCount(prev => {
						return prev + 1;
					});
				}}
			>
				INCREMENT ME
			</button>
		</div>
	);
};

ReactDOM.render(React.createElement(Count), document.getElementById('count-component'));
