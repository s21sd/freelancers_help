"use client"
import { registerAction } from "@/actions/authActions"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useFormState } from "react-dom"

const initState = {
    status: 0,
    errors: {}
}

export default function page() {
    const [state, formAction] = useFormState(registerAction, initState)
    return (
        <div className="flex justify-center items-center h-screen bg-gray-400 ">

            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Login</TabsTrigger>
                    <TabsTrigger value="password">Sign up</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Welcome Back! Login to your Account.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <form action={formAction}>
                                <div className="space-y-1">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name."
                                    />
                                    <span className="text-red-400">{state?.error?.name}</span>

                                </div>

                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email."
                                    />
                                    <span className="text-red-400">{state?.error?.email}</span>

                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password."
                                    />
                                    <span className="text-red-400">{state?.error?.password}</span>

                                </div>

                                <div className="mt-2">
                                    <Button type="submit">
                                        Login
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign Up</CardTitle>
                            <CardDescription>
                                Don't have an account! Create your Account.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <form action={formAction}>
                                <div className="space-y-1">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name."
                                    />
                                    <span className="text-red-400">{state?.error?.name}</span>

                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        id="username"
                                        type="text"
                                        name="username"
                                        placeholder="Enter your username."
                                    />
                                    <span className="text-red-400">{state?.error?.username}</span>

                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email."
                                    />
                                    <span className="text-red-400">{state?.error?.email}</span>

                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password."
                                    />
                                    <span className="text-red-400">{state?.error?.password}</span>

                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="cpassword">Confirm Password</Label>
                                    <Input
                                        id="cpassword"
                                        type="password"
                                        name="password_confirmation"
                                        placeholder="Confirm your password."
                                    />
                                    <span className="text-red-400">{state?.error?.password_confirmation}</span>
                                </div>
                                <div className="mt-2 ">
                                    <Button className="w-full" type="submit">
                                        Create Your Account
                                    </Button>
                                </div>
                            </form>
                        </CardContent>

                    </Card>
                </TabsContent>
            </Tabs>
        </div >
    )
}
