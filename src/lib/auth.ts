import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 1 day
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Credentials({
      credentials: {
        id: {
          type: "text",
        },
        email: {
          type: "text",
        },
        name: {
          type: "text",
        },
      },
      authorize: async (credentials, req) => {
        return credentials || null;
      },
    }),
  ],
  callbacks: {
    session: async ({ session }) => session,
  },
};
