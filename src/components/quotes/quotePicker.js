import {
	cpp,
	css,
	golang,
	java,
	javascript,
	linux,
	maths,
	php,
	physics,
	python,
	ruby,
	rust,
	zig,
} from './data';

export default function quotePicker(language) {
	switch (language) {
		case 'linux':
			return linux;
		case 'cpp':
			return cpp;
		case 'css':
			return css;
		case 'golang':
			return golang;
			break;
		case 'java':
			return java;
			break;
		case 'javascript':
			return javascript;
			break;
		case 'maths':
			return maths;
			break;
		case 'php':
			return php;
			break;
		case 'physics':
			return physics;
			break;
		case 'python':
			return python;
			break;
		case 'ruby':
			return ruby;
			break;
		case 'rust':
			return rust;
			break;
		case 'zig':
			return zig;
			break;
	}
}
