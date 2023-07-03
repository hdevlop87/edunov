import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/connectDB';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';

const loginController = async (credentials) => {
    const { email, password } = credentials;
    await connectDB();
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Account does not exist');
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Login failed. Please try again.');
    }

    const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
    };

    return userData;
};

const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        role: user.role ? user.role : 'teacher',
    };

    const token = jwt.sign(payload, process.env.NEXTAUTH_SECRET, { expiresIn: "48h" });

    return token;
};

export const authOption = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials) {
                const user = await loginController(credentials)
                if (user) {
                    return user;
                } else {
                    throw new Error('Invalid credentials');
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                const generatedToken = generateToken(user);
                return { ...token, ...user, accessToken: generatedToken };
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },

    pages: {
        signIn: "/auth/signin",
    },
}