import Home from '../views/home'
import Comprehensive from '../views/comprehensive'
import Fashionable from '../views/fashionable'
export default [
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "/home/comprehensive",
        component: Comprehensive
      },
      {
        path: "/home/fashionable",
        component: Fashionable
      }
    ]
  },

]