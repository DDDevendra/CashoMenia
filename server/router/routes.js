import { Router } from 'express'

import * as userController from '../controller/userController.js'
import * as ItemController from '../controller/itemController.js'


const router  = Router();

router.route('/test').get(userController.test);
router.route('/signUp').post(userController.SingUp);
router.route('/login').put(userController.Login);

router.route('/addItem').post(ItemController.addItem);

export default router;