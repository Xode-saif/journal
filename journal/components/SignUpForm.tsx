'use client'
import { registerUser } from "@/apis/apicalls"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
    const router = useRouter();
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const res = await registerUser(name,email,password);
        if(res.statusCode === 201 && res.isSuccess){
            router.replace("/login");
        }
    }
    return (
        <div className=" flex flex-col justify-center items-center h-screen w-screen ">
            <Card {...props} className="w-xs h-xs lg:w-lg lg:h-lg">
                <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                        Enter your information below to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent >
                    <form onSubmit={handleSubmit}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                                <Input id="name" name="name" type="text" placeholder="John Doe" required />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="m@example.com"
                                    required
                                />
                                <FieldDescription>
                                    We&apos;ll use this to contact you. We will not share your email
                                    with anyone else.
                                </FieldDescription>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input id="password" name="password" type="password" required />
                                <FieldDescription>
                                    Must be at least 8 characters long.
                                </FieldDescription>
                            </Field>
                            {/* <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input id="confirm-password" type="password" required />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field> */}
                            <FieldGroup>
                                <Field>
                                    <Button type="submit" >Create Account</Button>
                                    {/* <Button variant="outline" type="button">
                  Sign up with Google
                </Button> */}
                                    <FieldDescription className="px-6 text-center">
                                        Already have an account? <a href="/login">Sign in</a>
                                    </FieldDescription>
                                </Field>
                            </FieldGroup>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
