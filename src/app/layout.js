import Link from "next/link";
import "./globals.css";
import { ClerkProvider, UserButton, auth } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import CreateProfile from "./components/CreateProfile";
import Header from "./components/Header";


export const metadata = {
  title: "Album Reviews",
  description: "Album Reviews you can trust",
};

export default async function RootLayout({ children }) {
  const { userId } = auth();

  const profileRes =
    await sql`SELECT * FROM rr_profiles 
      WHERE clerk_user_id = ${userId}`;


  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />

          
          <div id="nav-wrapper">
            <nav>
              <ul>
                <li><Link href ="/">Home</Link></li>
                <li><Link href ="/about">About</Link></li>
                <li><Link href ="/allreviews">Reviews</Link></li>
                <li><Link href ="/profiles">Profiles</Link></li>
                
                {userId && profileRes.rowCount !== 0 && <li><Link href={`/profiles/${profileRes.rows[0].id}/reviews`}>My Profile</Link></li>}
                {!userId && <li><Link href="/sign-in">Sign In</Link></li>}
              </ul>
            </nav>
          </div>
          <div id="wrapper">
            {userId && <UserButton afterSignOutUrl="/" />}
            <br/><br/>
            {userId && profileRes.rowCount === 0 && <CreateProfile />}
            {userId && profileRes.rowCount !== 0 && children}
          </div>

        <div>
     <footer>Myles Artur Reily Danny <sup>&copy;</sup></footer>
       </div>
        </body>
      </html>
    </ClerkProvider> 
  );

}
