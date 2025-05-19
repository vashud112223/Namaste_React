props are just normal function arguments.
passing a props to a function is same as passing an argument to a function
props are objects.
config driven ui- the ui driven by config(api)
always uses key while using map
if we are not using key then suppose new card is coming then react trat as a same card so it will render the whole component
by giving th key we can optimize the performance
we can index as a key also
not using keys(not acceptable) <<<<< index as key <<<<<< unique id (best practices)
there are two types of export
1.default export/import
export default components
import {component} from "path"
2. named export/import
export const component
import {component} from "path"
importing Header and Header.js is same
 React hooks are just normal javascript utility functions
- useState() hooks
  - useEffect
  whenever a state vriable changes, react trigger the recoiciliation(re-render the component)
  useEffect-> when the callback functions called-> this callback functions called after the components renders
 # 2 types of Routing in web apps
 Client Side Routing
 Server Side Routing

 Once the class is initiated first constructor is called then render is called