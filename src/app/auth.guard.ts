import { CanActivateFn, NavigationEnd, Router, RouterEvent, RouterLink } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
 

  let isLogged = sessionStorage.getItem('token');
  if (isLogged == null){
    alert("You Need To Login !!")
    return false;    
     
   
  }
  return true;
  
  
  
};
