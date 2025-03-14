"use client";

import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { auth, provider, signInWithPopup, signOut } from "../utils/firebase";

export default function Auth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <div className="text-end">
      {user ? (
        <>
          <span className="me-2">Welcome, {user.displayName}</span>
          <Button variant="danger" onClick={() => signOut(auth)}>
            Logout
          </Button>
        </>
      ) : (
        <Button variant="primary" onClick={() => signInWithPopup(auth, provider)}>
          Login with Google
        </Button>
      )}
    </div>
  );
}
