import CssStories from "../pages/stories/CssStories";
import JavaStories from "../pages/stories/JavaStories";
import JavascriptStories from "../pages/stories/JavascriptStories";
import MathsStories from "../pages/stories/MathsStories";
import PhpStories from "../pages/stories/PhpStories";
import PhysicsStories from "../pages/stories/PhysicsStories";
import PythonStories from "../pages/stories/PythonStories";
import RubyStories from "../pages/stories/RubyStories";
import RustStories from "../pages/stories/RustStories";
import ZigStories from "../pages/stories/ZigStories";

export const sidebar = [
    { path: '/css', title: 'CSS Metaphors', component: <CssStories /> },
    { path: '/java', title: 'Java Metaphors', component: <JavaStories /> },
    { path: '/javascript', title: 'Javascript Metaphors', component: <JavascriptStories /> },
    { path: '/maths', title: 'Maths Metaphors', component: <MathsStories /> },
    { path: '/php', title: 'PHP Metaphors', component: <PhpStories /> },
    { path: '/physics', title: 'Physics Metaphors', component: <PhysicsStories /> },
    { path: '/python', title: 'Python Metaphors', component: <PythonStories /> },
    { path: '/ruby', title: 'Ruby Metaphors', component: <RubyStories /> },
    { path: '/rust', title: 'Rust Metaphors', component: <RustStories /> },
    { path: '/zig', title: 'Zig Metaphors', component: <ZigStories /> },
]
