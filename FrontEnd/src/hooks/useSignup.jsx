import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (fname, lname, email, password) => {
    setIsLoading(true);
    setError(null);

    const payload = { fname, lname, email, password };
    console.log("Payload:", payload); // Debugging line

    try {
      const response = await fetch("https://code-production-5d71.up.railway.app/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await response.json();
      console.log("Response JSON:", json); // Debugging line

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }
      if (response.ok) {
        // Save the user to local storage
        localStorage.setItem("user", JSON.stringify(json));

        // Update the auth context
        dispatch({ type: "LOGIN", payload: json });

        // Update loading state
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Signup error:", error); // Debugging line
      setError("An unexpected error occurred");
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
