import { getUsers, getRoles, getRoutes } from "api/users";

function complexOperation() {
  getUsers(function (usersError, users) {
    if (usersError) {
      console.error(usersError);
      return;
    }

    getRoles(users, function (rolesError, roles) {
      if (rolesError) {
        console.error(rolesError);
        return;
      }

      getRoutes(roles, function (routesError, routes) {
        if (routesError) {
            console.error(routesError);
            return;
        }
        return [];
      });
    });
  });
}
