import { formatDistanceToNow } from 'date-fns';
import React from 'react';

function TimeAgo({ dateString, suffix = true, icon = null, className = null }) {
	const date = new Date(dateString);
	const timeAgo = formatDistanceToNow(date, { addSuffix: suffix });
	return (
		<div className={className || ''}>
			{icon || null} {timeAgo}
		</div>
	);
}
export default TimeAgo;
