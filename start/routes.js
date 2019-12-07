'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route');


//User
Route
  .post('/api/user', 'UserController.create');

Route
  .post('/api/user/auth', 'UserController.login');

Route
  .get('/api/users/:id', 'UserController.show')
  .middleware('auth');


//Interests
Route
  .get('/api/interests', 'InterestController.list')
  .middleware('auth');

Route
  .get('/api/user/interests', 'InterestController.interestOfUser')
  .middleware('auth');

Route
  .post('/api/interests', 'InterestController.attachToUser')
  .middleware('auth');



//schedules
Route
  .get('/api/schedules', 'ScheduleController.list')
  .middleware('auth');

Route
  .post('/api/schedules', 'ScheduleController.attachToUser')
  .middleware('auth');


//Groups
Route
  .get('/api/recomended_groups', 'GroupController.recomendedGroups')
  .middleware('auth');

Route
  .get('/api/groups', 'GroupController.list')
  .middleware('auth');

Route
  .get('/api/groups/:id', 'GroupController.show')
  .middleware('auth');

Route
  .post('/api/schedules', 'ScheduleController.attachToUser')
  .middleware('auth');


Route.any('*', 'NuxtController.render');
