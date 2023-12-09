import { z } from "zod";

export const UserInput = z.object({
    email: z.string(),
    password: z.string()
});

export type UserInputType = z.infer<typeof UserInput> //You don't need to use zod validation on the frontend, only types are good enough. Zod is meant to be used on the backend.

export type UserInputType2 = {
    email: string,
    password: string
}//both types are the same.

//just making a change here to trigger github action
//another change again
//change again

