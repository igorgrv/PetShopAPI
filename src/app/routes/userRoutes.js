const UserController = require('../controllers/userController');
const userController = new UserController();
const userRoutes = UserController.routes();

module.exports = (app) => {
	app.route(userRoutes.users)
		.get(userController.getUsers())
		.post(userController.addUser());

	app
    .route(userRoutes.user)
    .get(userController.getUser())
    .patch(userController.updateUser())
    .delete(userController.deleteUser());
}