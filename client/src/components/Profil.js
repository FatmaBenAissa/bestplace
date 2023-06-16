import React from "react";
import { useSelector } from "react-redux";
import "./Profil.css";

const Profil = () => {
  const user = useSelector((state) => state.user.user);

  return <div>hello {user?.name}</div>;
};

export default Profil;
