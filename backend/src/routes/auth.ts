import { Router } from "express";
import type { Request, Response } from "express";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { db } from "../db";
import { users } from "../db/schema";
import type { NewUser } from "../db/schema";
import is = require("drizzle-orm");

const authRouter = Router();

interface SignUpBody {
    name: string;
    email: string;
    password: string;
}

interface LoginBody {
   
    email: string;
    password: string;
}




authRouter.post(
    "/signup",
    async (req: Request<{}, {}, SignUpBody>, res: Response) => {
        try {
            const { name, email, password } = req.body;

            // Vérifier si l'utilisateur existe déjà
            const existingUser = await db
                .select()
                .from(users)
                .where(eq(users.email, email));

            if (existingUser.length > 0) {
                return res.status(400).json({
                    msg: "User with the same email already exists",
                });
            }

            // Hasher le mot de passe
            const hashedPassword = await bcrypt.hash(password, 8);

            // Créer le nouvel utilisateur
            const newUser: NewUser = {
                name,
                email,
                password: hashedPassword,
            };

            const [user] = await db
                .insert(users)
                .values(newUser)
                .returning();

            return res.status(201).json(user);
        } catch (e) {
            return res.status(500).json({
                error: e instanceof Error ? e.message : String(e),
            });
        }
    }
);


authRouter.post(
    "/login",
    async (req: Request<{}, {}, SignUpBody>, res: Response) => {
        try {
            const { email, password } = req.body;

            // Vérifier si l'utilisateur existe déjà
            const [existingUser] = await db
                .select()
                .from(users)
                .where(eq(users.email, email));

            if (!existingUser) {
                return res.status(400).json({
                    msg: "User with this email doesn't  exists",
                });
            }

            // Hasher le mot de passe
            const isMatch = await bcrypt.compare(
                password,
                existingUser.password
            );

            
            if(!isMatch){
                res.status(400).json({
                    msg: "Invalid password ",
                });

                return ;
            }

            

            return res.json(existingUser);
        } catch (e) {
            return res.status(500).json({
                error: e instanceof Error ? e.message : String(e),
            });
        }
    }
);



















authRouter.get("/", (_req: Request, res: Response) => {
    res.send("Hey there ! from auth");
});


export default authRouter;