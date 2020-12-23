import Express from 'express';
import multer from 'multer';
import { uploadUserProfilePhoto } from '../storage/uploader';
import UserService from "../service/user.service";
import FirebaseAuth from "../auth/firebase.auth";

const router = Express.Router();
const uploadMiddleware = multer().single('file');
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.use(uploadMiddleware);

router.post('/uploadUserProfilePhoto/:env/:userId', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    // @ts-ignore
    if (req.file) {
        const userService:UserService = new UserService(new FirebaseAuth());
        // @ts-ignore
        uploadUserProfilePhoto(req.file, req.params.env, req.params.userId)
            .then(async (response) => {
                await userService.updateUserProfilePhoto(req.params.userId, response.publicUrl);
                res.send(response);
            })
            .catch(err => {
                res.status(500);
                res.send(err);
            });
    } else {
        res.status(400);
        res.send("No File Attached");
    }
});

export const UserPhotoUploadRouter = router;