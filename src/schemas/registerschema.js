import z from "zod";

export const registerschema=z.object({
    name:z.string().min(3,"Name should contain atleast 3 letters"),
    email:z.string().email("Enter a valid email"),
    college:z.string().min(3,"Enter a valid college name"),
    department:z.string().min(3,"Dept. must contain atleast 3 letters"),
    preferredArea:z.string().min(3,"Area must be more than 3 character"),
    password:z.string().min(8,"Password must contain atleast 8 characters")
})