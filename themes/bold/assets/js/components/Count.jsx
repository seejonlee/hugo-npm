import * as React from 'react';
import * as ReactDOM from 'react-dom';

// eslint-disable-next-line import/no-unresolved
import * as params from '@params';

const Count = () => {
	const [count, setCount] = React.useState(0);
	console.log({params});
	console.log(params.api);
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
