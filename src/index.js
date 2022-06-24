import reportWebVitals from './reportWebVitals';
import { renderer } from './render';
import state from './redux/state'

renderer(state);
reportWebVitals();
