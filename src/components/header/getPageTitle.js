export const getPageTitle = (location) => {
  switch (location) {
    case '/users':
      return 'Staff Management'
    case '/class-management':
      return 'Class Management'
    case '/levels':
      return 'Level Management'
    case '/courses':
      return 'Course Management'
    case '/questions-management':
      return 'Question Management'
    case '/profile':
      return 'Profile Management'
    case '/notifications':
      return 'Notifications'
    case '/admin-management':
      return 'Admin Management'
    case '/settings':
      return 'Settings'
    case '/':
      return 'Dashboard'
    default:
      return ''
  }
}

export default getPageTitle
