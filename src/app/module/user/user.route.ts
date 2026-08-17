import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { upload } from "../../lib/multer";
import { UserController } from "./user.controller";
import { auth } from "../../middleware/checkAuth";

const router = Router();

router.patch("/profile-image",
    auth(Role.SUPER_ADMIN, Role.ADMIN, Role.DOCTOR, Role.PATIENT),
    upload.single("profileImage"),
    UserController.uploadProfileImage);

export const UserRoutes = router;