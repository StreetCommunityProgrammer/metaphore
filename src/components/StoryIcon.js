import React from 'react';
import {
	DiCss3Full,
	DiJava,
	DiJavascript1,
	DiPhp,
	DiPython,
	DiRuby,
	DiRust,
} from 'react-icons/di';
import { GoBeaker } from 'react-icons/go';
import { TbMathFunction, TbAtom, TbBrandGolang } from 'react-icons/tb';
import { SiZig } from 'react-icons/si';

function StoryIcon({ language, size = 16, className = 'text-zinc-50' }) {
	switch (language) {
		case 'css':
			return <DiCss3Full size={size} className={className} />;
			break;
		case 'golang':
			return <TbBrandGolang size={size} className={className} />;
			break;
		case 'java':
			return <DiJava size={size} className={className} />;
			break;
		case 'javascript':
			return <DiJavascript1 size={size} className={className} />;
			break;
		case 'maths':
			return <TbMathFunction size={size} className={className} />;
			break;
		case 'php':
			return <DiPhp size={size} className={className} />;
			break;
		case 'physics':
			return <TbAtom size={size} className={className} />;
			break;
		case 'python':
			return <DiPython size={size} className={className} />;
			break;
		case 'ruby':
			return <DiRuby size={size} className={className} />;
			break;
		case 'rust':
			return <DiRust size={size} className={className} />;
			break;
		case 'zig':
			return <SiZig size={size} className={className} />;
			break;
		default:
			return <GoBeaker size={size} className={className} />;
			break;
	}
}

export default StoryIcon;
