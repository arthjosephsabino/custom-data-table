/**
 * 
 * @param firstName: user's first name 
 * @param lastName: user's last name
 * @returns string (user's full name w/ checks)
 */
export const getUserFullName = (firstName: string, lastName: string) => {
  if(firstName && lastName) { 
    return `${firstName} ${lastName}`
  } else if (firstName || lastName) {
    return firstName || lastName; 
  } else { 
    return "--"; 
  } 
};