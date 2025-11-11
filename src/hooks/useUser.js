import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useUser() {
  const stored = localStorage.getItem("user");
  const [user, setUser] = useState(stored ? JSON.parse(stored) : null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!stored) {
      toast.error("Sesión expirada. Inicie sesión nuevamente.");
      navigate("/");
    }
  }, [navigate, stored]);

  return user;
}
