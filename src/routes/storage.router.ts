import Express from 'express';
import multer from 'multer';
import { uploadUserProfilePhoto } from '../storage/uploader';

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
        // @ts-ignore
        uploadUserProfilePhoto(req.file, req.params.env, req.params.userId)
            .then((response) => {
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