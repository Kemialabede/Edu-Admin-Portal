import { SlHome } from 'react-icons/sl';
import { FaUsers } from 'react-icons/fa';
import { AiOutlineProduct } from 'react-icons/ai';
import { AiFillGolden } from 'react-icons/ai';
import { AiFillProject } from 'react-icons/ai';
import { AiOutlineBook } from 'react-icons/ai';
import { AiOutlineNodeCollapse } from 'react-icons/ai';
import './sidebar.scss';

export const navLinks = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: <SlHome />,
    id: 1,
  },
  {
    name: 'Staff Management',
    link: '/users',
    icon: <FaUsers />,
    id: 2,
  },
  {
    name: 'Level Management',
    link: '/levels',
    icon: <AiFillGolden />,
    id: 3,
  },
  {
    name: 'Class Management',
    link: '/class-management',
    icon: <FaUsers />,
    id: 3,
  },
  {
    name: 'Course Management',
    link: '/courses',
    icon: <AiFillProject />,
    id: 4,
  },
  {
    name: 'Course Materials',
    link: '/courses-materials',
    icon: <AiFillProject />,
    id: 5,
  },
  {
    name: 'Question Management',
    link: '/questions-management',
    icon: <AiOutlineBook />,
    id: 6,
  },
  {
    name: 'Admin Management',
    link: '/admin-management',
    icon: <AiOutlineProduct />,
    id: 7,
  },
  {
    name: 'Settings',
    link: '/settings',
    icon: <AiOutlineNodeCollapse />,
    id: 8,
  },
];
